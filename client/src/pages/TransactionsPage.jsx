import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Button, Spinner, Badge } from 'react-bootstrap'
import {
    BsBoxSeam, BsArrowUpCircle, BsArrowDownCircle,
    BsCheckCircle, BsXCircle, BsClock
} from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import LegalLinks from '../components/LegalLinks'
import useAuth from '../hooks/useAuth'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getTransactions, updateTransaction } from '../services/api'

export default function TransactionsPage() {
    const navigate = useNavigate()
    const { user } = useAuth()
    const queryClient = useQueryClient()
    const [activeTab, setActiveTab] = useState('all')
    const [activeStatus, setActiveStatus] = useState('all')

    const { data: transactions = [], isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: getTransactions,
        enabled: !!user
    })

    const updateMutation = useMutation({
        mutationFn: ({ id, status }) => updateTransaction(id, status),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['transactions'] })
    })

    const filtered = transactions.filter(t => {
        const roleMatch =
            activeTab === 'all' ||
            (activeTab === 'buying' && t.buyerId === user?.id) ||
            (activeTab === 'selling' && t.sellerId === user?.id)

        const statusMatch =
            activeStatus === 'all' || t.status === activeStatus

        return roleMatch && statusMatch
    })

    const totalSpent = transactions
        .filter(t => t.buyerId === user?.id && t.status === 'completed')
        .reduce((sum, t) => sum + t.price, 0)

    const totalEarned = transactions
        .filter(t => t.sellerId === user?.id && t.status === 'completed')
        .reduce((sum, t) => sum + t.price, 0)

    const pendingCount = transactions.filter(t => t.status === 'pending').length

    const getStatusBadge = (status) => {
        if (status === 'pending') return { bg: '#fef3c7', color: '#d97706', icon: <BsClock size={12} />, label: 'Pending' }
        if (status === 'completed') return { bg: '#dcfce7', color: '#16a34a', icon: <BsCheckCircle size={12} />, label: 'Completed' }
        if (status === 'cancelled') return { bg: '#fee2e2', color: '#ef4444', icon: <BsXCircle size={12} />, label: 'Cancelled' }
        return { bg: '#f3f4f6', color: '#6b7280', icon: null, label: status }
    }

    return (
        <>
            <AppNavbar bg="#FFFFFF" border={true} rightLinks={[
                { label: 'Marketplace', to: '/marketplace' },
                { label: 'Profile', to: '/profile' }
            ]} />

            <div className="transactions-page">
                <div className="transactions-container">

                    {/* Header */}
                    <div className="mb-4">
                        <h1 className="transactions-title">Transactions</h1>
                        <p className="transactions-subtitle">
                            Track all your buying and selling activity.
                        </p>
                    </div>

                    {/* Stats */}
                    <Row className="g-3 mb-4">
                        <Col xs={12} sm={4}>
                            <div className="transaction-stat-card">
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <div className="transaction-stat-icon" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>
                                        <BsArrowDownCircle size={18} />
                                    </div>
                                    <span className="transaction-stat-label">Total Spent</span>
                                </div>
                                <div className="transaction-stat-value">GH₵{totalSpent.toFixed(2)}</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className="transaction-stat-card">
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <div className="transaction-stat-icon" style={{ backgroundColor: '#fef9c3', color: '#ca8a04' }}>
                                        <BsArrowUpCircle size={18} />
                                    </div>
                                    <span className="transaction-stat-label">Total Earned</span>
                                </div>
                                <div className="transaction-stat-value">GH₵{totalEarned.toFixed(2)}</div>
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className="transaction-stat-card">
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <div className="transaction-stat-icon" style={{ backgroundColor: '#e0e7ff', color: '#4f46e5' }}>
                                        <BsClock size={18} />
                                    </div>
                                    <span className="transaction-stat-label">Pending</span>
                                </div>
                                <div className="transaction-stat-value">{pendingCount}</div>
                            </div>
                        </Col>
                    </Row>

                    {/* Filters */}
                    <div className="d-flex flex-wrap gap-3 mb-4 align-items-center">
                        <div className="activity-tabs-wrapper" style={{ minWidth: 'unset' }}>
                            <div className="activity-tabs">
                                {['all', 'buying', 'selling'].map(tab => (
                                    <button
                                        key={tab}
                                        className={`act-tab-btn ${activeTab === tab ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab)}
                                        style={{ padding: '0.6rem 1rem', textTransform: 'capitalize' }}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="d-flex gap-2 flex-wrap">
                            {['all', 'pending', 'completed', 'cancelled'].map(status => (
                                <button
                                    key={status}
                                    onClick={() => setActiveStatus(status)}
                                    className="transaction-filter-pill"
                                    style={{
                                        backgroundColor: activeStatus === status ? '#E0E000' : '#ffffff',
                                        borderColor: activeStatus === status ? '#E0E000' : '#e5e7eb',
                                        fontWeight: activeStatus === status ? 700 : 500
                                    }}
                                >
                                    {status.charAt(0).toUpperCase() + status.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Transactions List */}
                    {isLoading ? (
                        <div className="d-flex justify-content-center py-5">
                            <Spinner animation="border" style={{ color: '#E0E000' }} />
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="text-center py-5 text-muted">
                            <BsBoxSeam size={48} className="mb-3" />
                            <p className="fw-semibold">No transactions found.</p>
                            <Button
                                onClick={() => navigate('/marketplace')}
                                style={{ backgroundColor: '#E0E000', border: 'none', color: '#0F172A' }}
                            >
                                Browse Marketplace
                            </Button>
                        </div>
                    ) : (
                        <div className="d-flex flex-column gap-3">
                            {filtered.map(transaction => {
                                const isBuyer = transaction.buyerId === user?.id
                                const badge = getStatusBadge(transaction.status)
                                const imageUrl = transaction.listing?.images?.[0]?.url

                                return (
                                    <div key={transaction.id} className="transaction-card">
                                        <Row className="g-0 align-items-center">

                                            {/* Image */}
                                            <Col xs="auto">
                                                <div className="transaction-image-wrapper">
                                                    {imageUrl ? (
                                                        <img
                                                            src={imageUrl}
                                                            alt={transaction.listing?.title}
                                                            className="transaction-image"
                                                        />
                                                    ) : (
                                                        <div className="transaction-image d-flex align-items-center justify-content-center"
                                                            style={{ backgroundColor: '#F1F5F9', color: '#94A3B8', fontSize: '0.75rem' }}
                                                        >
                                                            No Image
                                                        </div>
                                                    )}
                                                </div>
                                            </Col>

                                            {/* Details */}
                                            <Col className="px-3">
                                                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                                                    <div>
                                                        <h4 className="transaction-item-title">
                                                            {transaction.listing?.title}
                                                        </h4>
                                                        <div className="d-flex align-items-center gap-2 flex-wrap mt-1">
                                                            <span
                                                                className="d-flex align-items-center gap-1 px-2 py-1 rounded-pill"
                                                                style={{
                                                                    backgroundColor: badge.bg,
                                                                    color: badge.color,
                                                                    fontSize: '0.72rem',
                                                                    fontWeight: 700
                                                                }}
                                                            >
                                                                {badge.icon} {badge.label}
                                                            </span>
                                                            <span
                                                                className="d-flex align-items-center gap-1"
                                                                style={{ fontSize: '0.75rem', color: '#6b7280' }}
                                                            >
                                                                {isBuyer
                                                                    ? <><BsArrowDownCircle size={12} color="#16a34a" /> Buying from {transaction.seller?.name}</>
                                                                    : <><BsArrowUpCircle size={12} color="#ca8a04" /> Selling to {transaction.buyer?.name}</>
                                                                }
                                                            </span>
                                                            <span style={{ fontSize: '0.72rem', color: '#9ca3af' }}>
                                                                {new Date(transaction.createdAt).toLocaleDateString()}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="text-end">
                                                        <div className="transaction-price">
                                                            GH₵{transaction.price?.toFixed(2)}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Actions */}
                                                {transaction.status === 'pending' && (
                                                    <div className="d-flex gap-2 mt-3 flex-wrap">
                                                        {transaction.sellerId === user?.id && (
                                                            <Button
                                                                size="sm"
                                                                className="border-0 fw-bold"
                                                                style={{ backgroundColor: '#E0E000', color: '#0F172A', borderRadius: '6px' }}
                                                                onClick={() => updateMutation.mutate({ id: transaction.id, status: 'completed' })}
                                                                disabled={updateMutation.isPending}
                                                            >
                                                                <BsCheckCircle size={14} className="me-1" />
                                                                Mark Completed
                                                            </Button>
                                                        )}
                                                        {transaction.buyerId === user?.id && (
                                                            <Button
                                                                size="sm"
                                                                variant="outline-danger"
                                                                className="fw-bold"
                                                                style={{ borderRadius: '6px' }}
                                                                onClick={() => updateMutation.mutate({ id: transaction.id, status: 'cancelled' })}
                                                                disabled={updateMutation.isPending}
                                                            >
                                                                <BsXCircle size={14} className="me-1" />
                                                                Cancel
                                                            </Button>
                                                        )}
                                                        <Button
                                                            size="sm"
                                                            variant="outline-secondary"
                                                            className="fw-bold"
                                                            style={{ borderRadius: '6px', borderColor: '#e0e0e0' }}
                                                            onClick={() => navigate(`/messages/${
                                                                isBuyer ? transaction.sellerId : transaction.buyerId
                                                            }`)}
                                                        >
                                                            Message
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="link"
                                                            className="text-muted text-decoration-none fw-semibold p-0"
                                                            onClick={() => navigate(`/listings/${transaction.listingId}`)}
                                                        >
                                                            View Listing
                                                        </Button>
                                                    </div>
                                                )}

                                                {transaction.status !== 'pending' && (
                                                    <Button
                                                        size="sm"
                                                        variant="link"
                                                        className="text-muted text-decoration-none fw-semibold p-0 mt-2"
                                                        onClick={() => navigate(`/listings/${transaction.listingId}`)}
                                                    >
                                                        View Listing
                                                    </Button>
                                                )}
                                            </Col>
                                        </Row>
                                    </div>
                                )
                            })}
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