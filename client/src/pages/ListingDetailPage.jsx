import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Spinner } from 'react-bootstrap';
import { BsArrowLeft, BsHeart, BsHeartFill, BsShareFill, BsPersonCircle, BsGeoAlt, BsClock, BsFlag } from 'react-icons/bs';
import AppNavbar from '../components/AppNavbar';
import LegalLinks from '../components/LegalLinks';
import useAuth from '../hooks/useAuth';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getListing, createTransaction, saveListing, unsaveListing, getSavedListings, createReport } from '../services/api';

export default function ListingDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { user } = useAuth()
    const queryClient = useQueryClient()
    const [reported, setReported] = useState(false)

    const { data: listing, isLoading, isError } = useQuery({
        queryKey: ['listing', id],
        queryFn: () => getListing(id)
    })

    const { data: savedItems = [] } = useQuery({
        queryKey: ['saved-listings'],
        queryFn: getSavedListings,
        enabled: !!user
    })

    const isSaved = savedItems.some(s => s.listingId === listing?.id)
    const isOwner = user?.id === listing?.userId

    const saveMutation = useMutation({
        mutationFn: () => isSaved ? unsaveListing(listing.id) : saveListing(listing.id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['saved-listings'] })
    })

    const buyMutation = useMutation({
        mutationFn: () => createTransaction(listing.id),
        onSuccess: () => navigate('/transactions')
    })

    const reportMutation = useMutation({
        mutationFn: () => createReport({ listingId: listing.id, reason: 'Reported by user' }),
        onSuccess: () => setReported(true)
    })

    if (isLoading) {
        return (
            <>
                <AppNavbar bg="#FFFFFF" border />
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                    <Spinner animation="border" style={{ color: '#E0E000' }} />
                </div>
            </>
        )
    }

    if (isError || !listing) {
        return (
            <>
                <AppNavbar bg="#FFFFFF" border />
                <div className="text-center py-5">
                    <p className="text-muted">Listing not found.</p>
                    <Button
                        onClick={() => navigate('/marketplace')}
                        style={{ backgroundColor: '#E0E000', border: 'none', color: '#0F172A' }}
                    >
                        Back to Marketplace
                    </Button>
                </div>
            </>
        )
    }

    const imageUrl = listing.images?.[0]?.url || null

    return (
        <>
            <AppNavbar bg="#FFFFFF" border={true} rightLinks={[
                { label: 'Marketplace', to: '/marketplace' },
                { label: 'Profile', to: '/profile' }
            ]} />

            <div className="product-detail-page">
                <div className="product-detail-container">
                    <Row className="g-4 product-detail-main">

                        {/* Image Gallery */}
                        <Col xs={12} lg={6}>
                            <div className="product-image-gallery">
                                <button className="back-btn" onClick={() => navigate(-1)}>
                                    <BsArrowLeft size={18} />
                                </button>

                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt={listing.title}
                                        className="main-product-image"
                                    />
                                ) : (
                                    <div
                                        className="main-product-image d-flex align-items-center justify-content-center"
                                        style={{ backgroundColor: '#F1F5F9', color: '#94A3B8' }}
                                    >
                                        No Image
                                    </div>
                                )}

                                <div className="image-actions">
                                    <button
                                        className="image-action-btn"
                                        onClick={() => saveMutation.mutate()}
                                        disabled={isOwner}
                                        title={isSaved ? 'Unsave' : 'Save'}
                                    >
                                        {isSaved
                                            ? <BsHeartFill size={16} color="#ef4444" />
                                            : <BsHeart size={16} />
                                        }
                                    </button>
                                    <button
                                        className="image-action-btn"
                                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                                        title="Copy link"
                                    >
                                        <BsShareFill size={16} />
                                    </button>
                                </div>

                                {/* Thumbnail strip for multiple images */}
                                {listing.images?.length > 1 && (
                                    <Row className="g-2 mt-2">
                                        {listing.images.map((img, index) => (
                                            <Col key={index} xs={3}>
                                                <img
                                                    src={img.url}
                                                    alt={`${listing.title} ${index + 1}`}
                                                    className="img-fluid rounded"
                                                    style={{ aspectRatio: '1', objectFit: 'cover', cursor: 'pointer', opacity: 0.8 }}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                )}
                            </div>
                        </Col>

                        {/* Details */}
                        <Col xs={12} lg={6}>
                            <div className="product-details-content">

                                {/* Tags and Price */}
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div className="d-flex gap-2 flex-wrap">
                                        <span
                                            style={{ backgroundColor: '#f0f0f0', color: '#64748B', fontWeight: 600, fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', display: 'inline-block' }}
                                        >
                                            {listing.category?.name || 'Uncategorized'}
                                        </span>
                                        <span
                                            style={{ backgroundColor: '#e0ffe0', color: '#008000', fontWeight: 600, fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', display: 'inline-block' }}
                                        >
                                            {listing.status === 'active' ? 'Available' : listing.status}
                                        </span>
                                    </div>
                                    <div className="text-end">
                                        <span className="product-detail-price">
                                            GH₵ {listing.price?.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h1 className="product-detail-title">{listing.title}</h1>

                                {/* Meta */}
                                <div className="d-flex gap-3 flex-wrap mb-4" style={{ fontSize: '0.85rem', color: '#64748B' }}>
                                    {listing.pickupLocation && (
                                        <span className="d-flex align-items-center gap-1">
                                            <BsGeoAlt size={14} /> {listing.pickupLocation}
                                        </span>
                                    )}
                                    <span className="d-flex align-items-center gap-1">
                                        <BsClock size={14} /> Listed {new Date(listing.createdAt).toLocaleDateString()}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="product-description mb-4">
                                    <h2 className="description-title">Description</h2>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#0F172A' }}>
                                        {listing.description}
                                    </p>
                                </div>

                                {/* Seller Info */}
                                <div className="seller-info-card mb-4">
                                    <div className="seller-details">
                                        <div
                                            className="d-flex align-items-center justify-content-center rounded-circle"
                                            style={{
                                                width: 48, height: 48,
                                                backgroundColor: '#E0E000',
                                                color: '#0F172A',
                                                fontWeight: 800,
                                                fontSize: '1.2rem',
                                                flexShrink: 0
                                            }}
                                        >
                                            {listing.user?.name?.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <span className="seller-name">{listing.user?.name}</span>
                                            <span className="seller-rating d-block">
                                                {listing.user?.email}
                                            </span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        style={{ borderColor: '#e0e0e0', fontWeight: 600 }}
                                        onClick={() => navigate('/profile')}
                                    >
                                        View Profile
                                    </Button>
                                </div>

                                {/* Actions */}
                                {isOwner ? (
                                    <Row className="g-2">
                                        <Col>
                                            <Button
                                                className="w-100 fw-bold border-0 py-3"
                                                style={{ backgroundColor: '#E0E000', color: '#0F172A', borderRadius: '6px' }}
                                                onClick={() => navigate(`/listings/${listing.id}/edit`)}
                                            >
                                                Edit Listing
                                            </Button>
                                        </Col>
                                    </Row>
                                ) : (
                                    <Row className="g-2">
                                        <Col xs={12} sm={6}>
                                            <Button
                                                className="w-100 fw-bold border-0 py-3"
                                                style={{ backgroundColor: '#E0E000', color: '#0F172A', borderRadius: '6px' }}
                                                onClick={() => buyMutation.mutate()}
                                                disabled={buyMutation.isPending || listing.status !== 'active'}
                                            >
                                                {buyMutation.isPending ? 'Processing...' : '🛒 Buy Now'}
                                            </Button>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Button
                                                className="w-100 fw-bold py-3"
                                                style={{ backgroundColor: '#0F172A', color: 'white', borderRadius: '6px', border: 'none' }}
                                                onClick={() => navigate(`/messages/${listing.userId}`)}
                                            >
                                                ✉️ Message Seller
                                            </Button>

                                            {!isOwner && (
                                                <div className='text-center mt-3'>
                                                    <Button
                                                        variant='link'
                                                        size='sm'
                                                        className='text-muted text-decoration-none'
                                                        onClick={() => reportMutation.mutate()}
                                                        disabled={reported || reportMutation.isPending}
                                                    >
                                                        <BsFlag size={13} className='me-1' />
                                                        {reported ? 'Reported' : 'Report this listing'}
                                                    </Button>
                                                </div>
                                            )}
                                        </Col>
                                    </Row>
                                )}

                                {buyMutation.isError && (
                                    <div className="text-danger small mt-2 text-center">
                                        {buyMutation.error?.message}
                                    </div>
                                )}

                            </div>
                        </Col>
                    </Row>
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