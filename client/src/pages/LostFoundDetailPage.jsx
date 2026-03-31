import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Badge, Button, Spinner } from 'react-bootstrap'
import {
    BsArrowLeft, BsGeoAlt, BsCalendar,
    BsPersonCircle, BsFlag, BsCheckCircle
} from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import LegalLinks from '../components/LegalLinks'
import useAuth from '../hooks/useAuth'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getLostFoundPost, updateLostFoundPost, createReport } from '../services/api'

export default function LostFoundDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { user } = useAuth()
    const queryClient = useQueryClient()
    const [reported, setReported] = useState(false)
    const [selectedImage, setSelectedImage] = useState(0)

    const { data: post, isLoading, isError } = useQuery({
        queryKey: ['lostfound-post', id],
        queryFn: () => getLostFoundPost(id)
    })

    const resolveMutation = useMutation({
        mutationFn: () => updateLostFoundPost(id, { status: 'resolved' }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['lostfound-post', id] })
    })

    const reportMutation = useMutation({
        mutationFn: () => createReport({ postId: parseInt(id), reason: 'Reported by user' }),
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

    if (isError || !post) {
        return (
            <>
                <AppNavbar bg="#FFFFFF" border />
                <div className="text-center py-5">
                    <p className="text-muted">Post not found.</p>
                    <Button
                        onClick={() => navigate('/lostfound')}
                        style={{ backgroundColor: '#E0E000', border: 'none', color: '#0F172A' }}
                    >
                        Back to Lost & Found
                    </Button>
                </div>
            </>
        )
    }

    const isOwner = user?.id === post.userId
    const isResolved = post.status === 'resolved'

    return (
        <>
            <AppNavbar bg="#FFFFFF" border={true} rightLinks={[
                { label: 'Marketplace', to: '/marketplace' },
                { label: 'Lost & Found', to: '/lostfound' },
            ]} />

            <div className="product-detail-page">
                <div className="product-detail-container">
                    <Row className="g-4">

                        {/* Image Section */}
                        <Col xs={12} lg={6}>
                            <div className="product-image-gallery">
                                <button className="back-btn" onClick={() => navigate(-1)}>
                                    <BsArrowLeft size={18} />
                                </button>

                                {post.images?.length > 0 ? (
                                    <img
                                        src={post.images[selectedImage]?.url}
                                        alt={post.title}
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

                                {post.images?.length > 1 && (
                                    <Row className="g-2 mt-2">
                                        {post.images.map((img, index) => (
                                            <Col key={index} xs={3}>
                                                <img
                                                    src={img.url}
                                                    alt={`${post.title} ${index + 1}`}
                                                    className="img-fluid rounded"
                                                    onClick={() => setSelectedImage(index)}
                                                    style={{
                                                        aspectRatio: '1',
                                                        objectFit: 'cover',
                                                        cursor: 'pointer',
                                                        opacity: selectedImage === index ? 1 : 0.6,
                                                        border: selectedImage === index ? '2px solid #E0E000' : '2px solid transparent',
                                                        borderRadius: '6px'
                                                    }}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                )}
                            </div>
                        </Col>

                        {/* Details Section */}
                        <Col xs={12} lg={6}>
                            <div className="product-details-content">

                                {/* Badges and Status */}
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div className="d-flex gap-2 flex-wrap">
                                        <span style={{
                                            backgroundColor: post.type === 'lost' ? '#fee2e2' : '#dcfce7',
                                            color: post.type === 'lost' ? '#ef4444' : '#16a34a',
                                            fontWeight: 700,
                                            fontSize: '0.75rem',
                                            padding: '3px 8px',
                                            borderRadius: '4px',
                                            display: 'inline-block',
                                        }}>
                                            {post.type.toUpperCase()}
                                        </span>
                                        <span style={{
                                            backgroundColor: isResolved ? '#f3f4f6' : '#fef9c3',
                                            color: isResolved ? '#6b7280' : '#ca8a04',
                                            fontWeight: 700,
                                            fontSize: '0.75rem',
                                            padding: '3px 8px',
                                            borderRadius: '4px',
                                            display: 'inline-block',
                                        }}>
                                            {isResolved ? 'RESOLVED' : 'OPEN'}
                                        </span>
                                        {post.category && (
                                            <span style={{
                                                backgroundColor: '#f0f0f0',
                                                color: '#64748B',
                                                fontWeight: 600,
                                                fontSize: '0.72rem',
                                                padding: '3px 8px',
                                                borderRadius: '4px',
                                                display: 'inline-block',
                                            }}>
                                                {post.category.name}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Title */}
                                <h1 className="product-detail-title">{post.title}</h1>

                                {/* Meta */}
                                <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: '0.875rem', color: '#64748B' }}>
                                    <span className="d-flex align-items-center gap-2">
                                        <BsCalendar size={14} />
                                        {post.type === 'lost' ? 'Lost on' : 'Found on'}{' '}
                                        {new Date(post.dateLostFound).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </span>
                                    <span className="d-flex align-items-center gap-2">
                                        <BsGeoAlt size={14} />
                                        {post.locationText}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="product-description mb-4">
                                    <h2 className="description-title">Description</h2>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#0F172A' }}>
                                        {post.description}
                                    </p>
                                </div>

                                {/* Posted By */}
                                <div className="seller-info-card mb-4">
                                    <div className="seller-details">
                                        <div
                                            className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
                                            style={{
                                                width: 48, height: 48,
                                                backgroundColor: '#E0E000',
                                                color: '#0F172A',
                                                fontSize: '1.2rem',
                                                flexShrink: 0
                                            }}
                                        >
                                            {post.user?.name?.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <span className="seller-name">{post.user?.name}</span>
                                            <span className="seller-rating d-block">
                                                Posted {new Date(post.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        style={{ borderColor: '#e0e0e0', fontWeight: 600 }}
                                        onClick={() => navigate(`/messages/${post.userId}`)}
                                    >
                                        Contact
                                    </Button>
                                </div>

                                {/* Actions */}
                                {isOwner ? (
                                    <Row className="g-2">
                                        {!isResolved && (
                                            <Col xs={12} sm={6}>
                                                <Button
                                                    className="w-100 fw-bold border-0 d-flex align-items-center justify-content-center gap-2 py-3"
                                                    style={{ backgroundColor: '#E0E000', color: '#0F172A', borderRadius: '6px' }}
                                                    onClick={() => resolveMutation.mutate()}
                                                    disabled={resolveMutation.isPending}
                                                >
                                                    <BsCheckCircle size={16} />
                                                    {resolveMutation.isPending ? 'Updating...' : 'Mark Resolved'}
                                                </Button>
                                            </Col>
                                        )}
                                        <Col xs={12} sm={isResolved ? 12 : 6}>
                                            <Button
                                                className="w-100 fw-bold py-3"
                                                variant="outline-secondary"
                                                style={{ borderRadius: '6px', borderColor: '#e0e0e0' }}
                                                onClick={() => navigate('/lostfound/report')}
                                            >
                                                Post Another Item
                                            </Button>
                                        </Col>
                                    </Row>
                                ) : (
                                    <Row className="g-2">
                                        <Col>
                                            <Button
                                                className="w-100 fw-bold border-0 py-3"
                                                style={{ backgroundColor: '#E0E000', color: '#0F172A', borderRadius: '6px' }}
                                                onClick={() => navigate(`/messages/${post.userId}`)}
                                            >
                                                ✉️ Contact Poster
                                            </Button>
                                        </Col>
                                    </Row>
                                )}

                                {/* Report */}
                                {!isOwner && (
                                    <div className="text-center mt-3">
                                        <Button
                                            variant="link"
                                            size="sm"
                                            className="text-muted text-decoration-none"
                                            onClick={() => reportMutation.mutate()}
                                            disabled={reported || reportMutation.isPending}
                                        >
                                            <BsFlag size={13} className="me-1" />
                                            {reported ? 'Reported' : 'Report this post'}
                                        </Button>
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