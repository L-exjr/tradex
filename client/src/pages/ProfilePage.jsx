import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, Button, Spinner } from 'react-bootstrap'
import { BsPencil, BsThreeDots, BsHeartFill, BsPlus } from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import useAuth from '../hooks/useAuth'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getListings, getSavedListings, unsaveListing, updateProfile } from '../services/api'

export default function ProfilePage() {
    const navigate = useNavigate()
    const { user, logout, setUser } = useAuth()
    const queryClient = useQueryClient()
    const [activeTab, setActiveTab] = useState('My Listings')
    const [profileSearch, setProfileSearch] = useState('')
    const avatarInputRef = useRef(null)

    const avatarMutation = useMutation({
        mutationFn: (file) => {
            const formData = new FormData()
            formData.append('avatar', file)
            return updateProfile(formData)
        },
        onSuccess: (updated) => {
            setUser(updated)
        }
    })

    const { data: listings = [], isLoading: loadingListings } = useQuery({
        queryKey: ['my-listings', user?.id],
        queryFn: () => getListings({ userId: user?.id }),
        enabled: !!user
    })

    const { data: savedItems = [], isLoading: loadingSaved } = useQuery({
        queryKey: ['saved-listings'],
        queryFn: getSavedListings,
        enabled: !!user
    })

    const unsaveMutation = useMutation({
        mutationFn: unsaveListing,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['saved-listings'] })
    })

    const activeListings = listings.filter(l => l.status === 'active').length
    const soldListings = listings.filter(l => l.status === 'sold').length

    const filteredListings = listings.filter(l =>
        l.title.toLowerCase().includes(profileSearch.toLowerCase())
    )

    return (
        <>
            <AppNavbar
                bg="#FFFFFF"
                border={true}
                showSearch={true}
                searchPlaceholder="Search your listings..."
                onSearch={(q) => setProfileSearch(q)}
                rightLinks={[
                    { label: 'Marketplace', to: '/marketplace' },
                    { label: 'Messages', to: '/messages' },
                ]}
            />

            <div className="profile-page">
                <div className="profile-container">

                    <div className="profile-header-section">

                        {/* Avatar */}
                        <div className="profile-avatar-wrapper">
                            {user?.avatarUrl ? (
                                <img
                                    src={user.avatarUrl}
                                    alt={user.name}
                                    className="profile-avatar-placeholder"
                                    style={{ objectFit: 'cover' }}
                                />
                            ) : (
                                <div className="profile-avatar-placeholder">
                                    {user?.name?.charAt(0).toUpperCase() || '?'}
                                </div>
                            )}
                            <button
                                className="edit-profile-btn"
                                onClick={() => avatarInputRef.current.click()}
                                title="Change Photo"
                                disabled={avatarMutation.isPending}
                            >
                                {avatarMutation.isPending
                                    ? <span style={{ fontSize: '0.6rem' }}>...</span>
                                    : <BsPencil size={14} />
                                }
                            </button>
                            <input
                                ref={avatarInputRef}
                                type="file"
                                accept="image/*"
                                className="d-none"
                                onChange={(e) => {
                                    const file = e.target.files[0]
                                    if (file) avatarMutation.mutate(file)
                                }}
                            />
                        </div>

                        <h1 className="profile-name">{user?.name || 'Loading...'}</h1>
                        <p className="profile-meta">
                            📍 KNUST • Member since{' '}
                            {user?.createdAt
                                ? new Date(user.createdAt).getFullYear()
                                : '—'
                            }
                        </p>

                        {/* Stats */}
                        <div className="profile-stats">
                            <div className="stat-item">
                                <span className="stat-value">{listings.length}</span>
                                <span className="stat-label">LISTINGS</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-value">{activeListings}</span>
                                <span className="stat-label">ACTIVE</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-value">{soldListings}</span>
                                <span className="stat-label">SOLD</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-value">{savedItems.length}</span>
                                <span className="stat-label">SAVED</span>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="profile-tabs-wrapper">
                            <div className="profile-tabs">
                                <button
                                    className={`tab-btn ${activeTab === 'My Listings' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('My Listings')}
                                >
                                    My Listings
                                </button>
                                <button
                                    className={`tab-btn ${activeTab === 'Saved Items' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('Saved Items')}
                                >
                                    Saved Items
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* My Listings Tab */}
                    {activeTab === 'My Listings' && (
                        <div className="listings-grid">
                            <Link to="/listings/create" className="list-new-item-card">
                                <div className="plus-icon-container">
                                    <BsPlus size={28} color="#0F172A" />
                                </div>
                                <span className="list-new-text">List New Item</span>
                            </Link>

                            {loadingListings ? (
                                <div className="d-flex justify-content-center py-4">
                                    <Spinner animation="border" style={{ color: '#E0E000' }} />
                                </div>
                            ) : filteredListings.length === 0 ? (
                                <p className="text-muted small py-4">
                                    {profileSearch ? 'No listings match your search.' : 'No listings yet.'}
                                </p>
                            ) : filteredListings.map(item => (
                                <div
                                    key={item.id}
                                    className="listing-item-card"
                                    onClick={() => navigate(`/listings/${item.id}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className={`listing-image-container ${item.status === 'sold' ? 'sold-overlay' : ''}`}>
                                        {item.images?.[0]?.url ? (
                                            <img
                                                src={item.images[0].url}
                                                alt={item.title}
                                                className="listing-image"
                                            />
                                        ) : (
                                            <div className="product-image-placeholder">No Image</div>
                                        )}
                                        {item.status === 'active' ? (
                                            <span className="price-pill">
                                                GH₵{item.price?.toFixed(2)}
                                            </span>
                                        ) : (
                                            <span className="sold-badge">SOLD</span>
                                        )}
                                    </div>

                                    <div className="listing-info">
                                        <div className="listing-title-bar">
                                            <h3 className="listing-title">{item.title}</h3>
                                            <button
                                                className="more-options-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    navigate(`/listings/${item.id}/edit`)
                                                }}
                                            >
                                                <BsThreeDots />
                                            </button>
                                        </div>
                                        <p className="listing-status">
                                            {item.status === 'active'
                                                ? `Active • ${new Date(item.createdAt).toLocaleDateString()}`
                                                : `Sold • ${new Date(item.createdAt).toLocaleDateString()}`
                                            }
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Saved Items Tab */}
                    {activeTab === 'Saved Items' && (
                        <div className="listings-grid">
                            {loadingSaved ? (
                                <div className="d-flex justify-content-center py-4">
                                    <Spinner animation="border" style={{ color: '#E0E000' }} />
                                </div>
                            ) : savedItems.length === 0 ? (
                                <div className="text-center py-5" style={{ gridColumn: '1 / -1' }}>
                                    <p className="text-muted">No saved items yet.</p>
                                    <Button
                                        onClick={() => navigate('/marketplace')}
                                        style={{
                                            backgroundColor: '#E0E000',
                                            border: 'none',
                                            color: '#0F172A'
                                        }}
                                    >
                                        Browse Marketplace
                                    </Button>
                                </div>
                            ) : savedItems.map(({ id, listing }) => (
                                <div
                                    key={id}
                                    className="listing-item-card"
                                    onClick={() => navigate(`/listings/${listing.id}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="listing-image-container">
                                        {listing.images?.[0]?.url ? (
                                            <img
                                                src={listing.images[0].url}
                                                alt={listing.title}
                                                className="listing-image"
                                            />
                                        ) : (
                                            <div className="product-image-placeholder">No Image</div>
                                        )}
                                        <span className="price-pill">
                                            GH₵{listing.price?.toFixed(2)}
                                        </span>
                                        <button
                                            className="unsave-btn"
                                            title="Remove from saved"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                unsaveMutation.mutate(listing.id)
                                            }}
                                        >
                                            <BsHeartFill size={16} color="#ef4444" />
                                        </button>
                                    </div>

                                    <div className="listing-info">
                                        <div className="listing-title-bar">
                                            <h3 className="listing-title">{listing.title}</h3>
                                        </div>
                                        <p className="listing-status">
                                            {listing.user?.name} • {listing.category?.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Logout */}
                    <div className="d-flex justify-content-center mt-5">
                        <Button
                            variant="outline-danger"
                            onClick={() => {
                                logout()
                                navigate('/login')
                            }}
                        >
                            Log Out
                        </Button>
                    </div>

                </div>
            </div>

            <footer className="border-top py-3 px-4" style={{ background: '#FFFFFF' }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <span className="text-muted small">
                        &copy; {new Date().getFullYear()} TradeX. Built for the campus community.
                    </span>
                    <div className="d-flex gap-3">
                        <a href="/privacy" className="text-muted small text-decoration-none">Privacy</a>
                        <a href="/terms" className="text-muted small text-decoration-none">Terms</a>
                    </div>
                </div>
            </footer>
        </>
    )
}