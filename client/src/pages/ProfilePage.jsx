import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Spinner } from 'react-bootstrap'
import { BsCamera, BsTrash, BsThreeDots, BsHeartFill, BsPlus } from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import useAuth from '../hooks/useAuth'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getListings, getSavedListings, unsaveListing, updateProfile, removeAvatar } from '../services/api'
import LegalLinks from '../components/LegalLinks'

export default function ProfilePage() {
    const navigate = useNavigate()
    const { user, logout, setUser } = useAuth()
    const queryClient = useQueryClient()

    const [activeTab, setActiveTab] = useState('My Listings')
    const [profileSearch, setProfileSearch] = useState('')
    const [showPhotoMenu, setShowPhotoMenu] = useState(false)

    const avatarInputRef = useRef(null)

    const photoMenuRef = useRef(null)
    
    useEffect(() => {
        function handleClickOutside(e) {
            if (
                photoMenuRef.current &&
                !photoMenuRef.current.contains(e.target)
            ) {
                setShowPhotoMenu(false)
            }
        }
        if (showPhotoMenu) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showPhotoMenu])

    // Avatar upload
    const avatarMutation = useMutation({
        mutationFn: (file) => {
            const formData = new FormData()
            formData.append('avatar', file)
            return updateProfile(formData)
        },
        onSuccess: (updated) => {
            setUser(updated)
            queryClient.invalidateQueries(['me'])
            setShowPhotoMenu(false)
        }
    })

    // Avatar remove
    const removeAvatarMutation = useMutation({
        mutationFn: removeAvatar,
        onSuccess: (updated) => {
            setUser(updated)
            queryClient.invalidateQueries(['me'])
            setShowPhotoMenu(false)
        }
    })

    // Listings
    const { data: listings = [], isLoading: loadingListings } = useQuery({
        queryKey: ['my-listings', user?.id],
        queryFn: () => getListings({ userId: user?.id }),
        enabled: !!user
    })

    // Saved
    const { data: savedItems = [], isLoading: loadingSaved } = useQuery({
        queryKey: ['saved-listings'],
        queryFn: getSavedListings,
        enabled: !!user
    })

    // Unsave
    const unsaveMutation = useMutation({
        mutationFn: unsaveListing,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['saved-listings'] })
    })

    const activeListings = listings.filter(l => l.status === 'active').length
    const soldListings = listings.filter(l => l.status === 'sold').length

    const filteredListings = listings.filter(l =>
        l.title.toLowerCase().includes(profileSearch.toLowerCase())
    )

    const isPending = avatarMutation.isPending || removeAvatarMutation.isPending

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
                    { label: 'Lost & Found', to: '/lostfound' },
                    { label: 'Transactions', to: '/transactions' },
                    { label: 'Messages', to: '/messages' },
                    { label: 'Activity', to: '/activity' },
                ]}
            />

            <div className="profile-page">
                <div className="profile-container">

                    {/* Header */}
                    <div className="profile-header-section">

                        {/* Avatar */}
                        <div className="profile-avatar-wrapper" style={{ position: 'relative', cursor: 'pointer' }}>
                            {user?.avatarUrl ? (
                                <img
                                    src={user.avatarUrl}
                                    alt={user.name}
                                    className="profile-avatar-placeholder"
                                    style={{ objectFit: 'cover' }}
                                />
                            ) : (
                                <div className="profile-avatar-placeholder">
                                    {(user?.name?.[0] || "U").toUpperCase()}
                                </div>
                            )}

                            {/* Camera button */}
                            <button
                                className="edit-profile-btn"
                                onClick={() => setShowPhotoMenu(v => !v)}
                                title="Edit photo"
                                disabled={isPending}
                                style={{ bottom: 5, right: 5 }}
                            >
                                {isPending
                                    ? <Spinner animation="border" size="sm" />
                                    : <BsCamera size={14} />
                                }
                            </button>

                            {/* Photo menu */}
                            {showPhotoMenu && (
                                <div ref={photoMenuRef}
                                    style={{
                                        position: 'absolute',
                                        top: '110%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: '#fff',
                                        border: '1px solid #E2E8F0',
                                        borderRadius: 8,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                        zIndex: 20,
                                        minWidth: 160,
                                        overflow: 'hidden'
                                    }}
                                >
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setShowPhotoMenu(v => !v)
                                            avatarInputRef.current.click()
                                        }}
                                        style={menuBtn}
                                    >
                                        <BsCamera size={14} /> Change photo
                                    </button>

                                    {user?.avatarUrl && (
                                        <button
                                            onClick={() => {
                                                if (!window.confirm("Remove your profile photo?")) return
                                                removeAvatarMutation.mutate()
                                            }}
                                            disabled={removeAvatarMutation.isPending}
                                            style={{ ...menuBtn, color: '#ef4444', borderTop: '1px solid #F1F5F9' }}
                                        >
                                            <BsTrash size={14} /> Remove photo
                                        </button>
                                    )}
                                </div>
                            )}

                            <input
                                ref={avatarInputRef}
                                type="file"
                                accept="image/*"
                                className="d-none"
                                onChange={(e) => {
                                    const file = e.target.files[0]
                                    if (file) avatarMutation.mutate(file)
                                    e.target.value = ''
                                }}
                            />
                        </div>

                        <h1 className="profile-name">{user?.name || 'Loading...'}</h1>

                        <p className="profile-meta">
                            📍 KNUST • Member since{' '}
                            {user?.createdAt ? new Date(user.createdAt).getFullYear() : '—'}
                        </p>

                        {/* Stats */}
                        <div className="profile-stats">
                            <Stat label="LISTINGS" value={listings.length} />
                            <Divider />
                            <Stat label="ACTIVE" value={activeListings} />
                            <Divider />
                            <Stat label="SOLD" value={soldListings} />
                            <Divider />
                            <Stat label="SAVED" value={savedItems.length} />
                        </div>

                        {/* Tabs */}
                        <div className="profile-tabs-wrapper">
                            <div className="profile-tabs">
                                <TabBtn active={activeTab === 'My Listings'} onClick={() => setActiveTab('My Listings')}>
                                    My Listings
                                </TabBtn>
                                <TabBtn active={activeTab === 'Saved Items'} onClick={() => setActiveTab('Saved Items')}>
                                    Saved Items
                                </TabBtn>
                            </div>
                        </div>
                    </div>

                    {/* My Listings */}
                    {activeTab === 'My Listings' && (
                        <div className="listings-grid">

                            <Link to="/listings/create" className="list-new-item-card">
                                <div className="plus-icon-container">
                                    <BsPlus size={28} />
                                </div>
                                <span className="list-new-text">List New Item</span>
                            </Link>

                            {loadingListings ? (
                                <CenteredSpinner />
                            ) : filteredListings.length === 0 ? (
                                <EmptyState text={profileSearch ? 'No listings match your search.' : 'You haven’t listed anything yet.'} />
                            ) : filteredListings.map(item => (
                                <ListingCard
                                    key={item.id}
                                    item={item}
                                    onClick={() => navigate(`/listings/${item.id}`)}
                                    onEdit={() => navigate(`/listings/${item.id}/edit`)}
                                />
                            ))}
                        </div>
                    )}

                    {/* Saved */}
                    {activeTab === 'Saved Items' && (
                        <div className="listings-grid">
                            {loadingSaved ? (
                                <CenteredSpinner />
                            ) : savedItems.length === 0 ? (
                                <div className="text-center py-5" style={{ gridColumn: '1 / -1' }}>
                                    <p className="text-muted">No saved items yet.</p>
                                    <p className="text-muted small">Items you save will appear here.</p>
                                    <Button
                                        onClick={() => navigate('/marketplace')}
                                        style={{ backgroundColor: '#E0E000', border: 'none', color: '#0F172A' }}
                                    >
                                        Browse Marketplace
                                    </Button>
                                </div>
                            ) : savedItems.map(({ id, listing }) => (
                                <SavedCard
                                    key={id}
                                    listing={listing}
                                    onClick={() => navigate(`/listings/${listing.id}`)}
                                    onUnsave={(e) => {
                                        e.stopPropagation()
                                        if (!unsaveMutation.isPending) {
                                            unsaveMutation.mutate(listing.id)
                                        }
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Logout */}
                    <div className="d-flex justify-content-center mt-5">
                        <Button variant="outline-danger" onClick={() => { logout(); navigate('/login') }}>
                            Log Out
                        </Button>
                    </div>

                </div>
            </div>

            <footer className="border-top py-3 px-4" style={{ background: '#FFFFFF' }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <span className="text-muted small">
                        &copy; {new Date().getFullYear()} TradeX.
                    </span>
                    <LegalLinks />
                </div>
            </footer>
        </>
    )
}

/* --- small helpers (clean UI) --- */

const menuBtn = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    padding: '0.65rem 1rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontFamily: 'Lexend, sans-serif'
}

const Divider = () => <div className="stat-divider" />

const Stat = ({ label, value }) => (
    <div className="stat-item">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
    </div>
)

const TabBtn = ({ active, children, ...props }) => (
    <button className={`tab-btn ${active ? 'active' : ''}`} {...props}>
        {children}
    </button>
)

const CenteredSpinner = () => (
    <div className="d-flex justify-content-center py-4">
        <Spinner animation="border" style={{ color: '#E0E000' }} />
    </div>
)

const EmptyState = ({ text }) => (
    <p className="text-muted small py-4">{text}</p>
)

const ListingCard = ({ item, onClick, onEdit }) => (
    <div className="listing-item-card" onClick={onClick} style={{ cursor: 'pointer' }}>
        <div className={`listing-image-container ${item.status === 'sold' ? 'sold-overlay' : ''}`}>
            {item.images?.[0]?.url
                ? <img src={item.images[0].url} alt={item.title} className="listing-image" />
                : <div className="product-image-placeholder">No Image</div>}
            {item.status === 'active'
                ? <span className="price-pill">GH₵{item.price?.toFixed(2)}</span>
                : <span className="sold-badge">SOLD</span>}
        </div>
        <div className="listing-info">
            <div className="listing-title-bar">
                <h3 className="listing-title">{item.title}</h3>
                <button className="more-options-btn" onClick={(e) => { e.stopPropagation(); onEdit(); }}>
                    <BsThreeDots />
                </button>
            </div>
        </div>
    </div>
)

const SavedCard = ({ listing, onClick, onUnsave }) => (
    <div className="listing-item-card" onClick={onClick} style={{ cursor: 'pointer' }}>
        <div className="listing-image-container">
            {listing.images?.[0]?.url
                ? <img src={listing.images[0].url} alt={listing.title} className="listing-image" />
                : <div className="product-image-placeholder">No Image</div>}
            <span className="price-pill">GH₵{listing.price?.toFixed(2)}</span>
            <button className="unsave-btn" onClick={onUnsave}>
                <BsHeartFill size={16} color="#ef4444" />
            </button>
        </div>
        <div className="listing-info">
            <h3 className="listing-title">{listing.title}</h3>
        </div>
    </div>
)