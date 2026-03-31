import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Spinner } from 'react-bootstrap'
import { BsSliders, BsPlusCircle, BsArrowRepeat, BsCalendar, BsGeoAlt } from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import LegalLinks from '../components/LegalLinks'
import { useQuery } from '@tanstack/react-query'
import { getLostFoundPosts } from '../services/api'

export default function LostAndFoundPage() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('lost')
    const [searchQuery, setSearchQuery] = useState('')
    const [visibleCount, setVisibleCount] = useState(8)

    const { data: posts = [], isLoading } = useQuery({
        queryKey: ['lostfound', activeTab, searchQuery],
        queryFn: () => getLostFoundPosts({
            type: activeTab,
            ...(searchQuery && { search: searchQuery })
        })
    })

    const visible = posts.slice(0, visibleCount)
    const hasMore = visibleCount < posts.length

    return (
        <>
            <AppNavbar
                bg="#FFFFFF"
                border={true}
                showSearch={true}
                searchPlaceholder="Search lost & found items..."
                onSearch={(q) => {
                    setSearchQuery(q)
                    setVisibleCount(8)
                }}
                rightLinks={[
                    { label: 'Marketplace', to: '/marketplace' },
                ]}
            />

            <div className="lost-found-page">
                <div className="lf-container">

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1 className="lf-page-title">Lost & Found</h1>
                        <Button
                            onClick={() => navigate('/lostfound/report')}
                            className="d-flex align-items-center gap-2 border-0 fw-semibold"
                            style={{
                                backgroundColor: '#E0E000',
                                color: '#111827',
                                borderRadius: '8px'
                            }}
                        >
                            <BsPlusCircle size={18} /> Report Item
                        </Button>
                    </div>

                    <div className="lf-toolbar">
                        <div className="lf-tabs-filters">
                            <div className="lf-tabs">
                                <button
                                    className={`lf-tab-btn ${activeTab === 'lost' ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveTab('lost')
                                        setVisibleCount(8)
                                    }}
                                >
                                    Lost Items
                                </button>
                                <button
                                    className={`lf-tab-btn ${activeTab === 'found' ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveTab('found')
                                        setVisibleCount(8)
                                    }}
                                >
                                    Found Items
                                </button>
                            </div>
                            <button className="lf-filters-btn">
                                <BsSliders size={14} /> Filters
                            </button>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="d-flex justify-content-center py-5">
                            <Spinner animation="border" style={{ color: '#E0E000' }} />
                        </div>
                    ) : visible.length === 0 ? (
                        <div className="text-center text-muted py-5">
                            <p>No {activeTab} items found.</p>
                            <Button
                                onClick={() => navigate('/lostfound/report')}
                                style={{
                                    backgroundColor: '#E0E000',
                                    border: 'none',
                                    color: '#111827'
                                }}
                            >
                                Be the first to report one
                            </Button>
                        </div>
                    ) : (
                        <div className="lf-grid">
                            {visible.map(item => (
                                <div key={item.id} className="lf-card">
                                    <div className="lf-image-container">
                                        <span
                                            className="lf-badge"
                                            style={{
                                                color: item.type === 'lost' ? '#ef4444' : '#16a34a'
                                            }}
                                        >
                                            {item.type.toUpperCase()}
                                        </span>
                                        {item.images?.[0]?.url ? (
                                            <img
                                                src={item.images[0].url}
                                                alt={item.title}
                                                className="lf-card-image"
                                            />
                                        ) : (
                                            <div className="product-image-placeholder">No Image</div>
                                        )}
                                    </div>
                                    <div className="lf-info">
                                        <h3 className="lf-item-title">{item.title}</h3>
                                        <div className="lf-meta">
                                            <p className="lf-date">
                                                <BsCalendar size={12} />
                                                {item.type === 'lost' ? 'Lost' : 'Found'}{' '}
                                                {new Date(item.dateLostFound).toLocaleDateString()}
                                            </p>
                                            <p className="lf-location">
                                                <BsGeoAlt size={12} />
                                                {item.locationText}
                                            </p>
                                        </div>
                                        <button
                                            className="lf-view-btn"
                                            onClick={() => navigate(`/lostfound/${item.id}`)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {hasMore && (
                        <div className="d-flex justify-content-center mt-4">
                            <button
                                className="lf-load-more-btn"
                                onClick={() => setVisibleCount(v => v + 8)}
                            >
                                <BsArrowRepeat size={16} /> Load More Items
                            </button>
                        </div>
                    )}

                </div>
            </div>

            <footer className="border-top py-3 px-4" style={{ background: '#FFFFFF' }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <span className="text-muted small">
                        &copy; {new Date().getFullYear()} TradeX. Built for the campus community.
                    </span>
                    <LegalLinks />
                </div>
            </footer>
        </>
    )
}