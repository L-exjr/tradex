import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Button, Spinner } from 'react-bootstrap'
import {
    BsCheckCircle, BsClock, BsBoxSeam, BsBell
} from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import LegalLinks from '../components/LegalLinks'
import useAuth from '../hooks/useAuth'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getTransactions, updateTransaction } from '../services/api'

export default function ActivityCenterPage() {
    const navigate = useNavigate()
    const { user } = useAuth()
    const queryClient = useQueryClient()
    const [activeTab, setActiveTab] = useState('Notifications')

    const { data: transactions = [], isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: getTransactions,
        enabled: !!user
    })

    const updateMutation = useMutation({
        mutationFn: ({ id, status }) => updateTransaction(id, status),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['transactions'] })
    })

    const activeOrders = transactions.filter(t => t.status === 'pending')
    const completedOrders = transactions.filter(
        t => t.status === 'completed' || t.status === 'cancelled'
    )

    const totalSpent = transactions
        .filter(t => t.buyerId === user?.id && t.status === 'completed')
        .reduce((sum, t) => sum + t.price, 0)

    const getStatusColor = (status) => {
        if (status === 'pending') return '#d97706'
        if (status === 'completed') return '#16a34a'
        if (status === 'cancelled') return '#ef4444'
        return '#6b7280'
    }

    const getStatusLabel = (status) => status.toUpperCase()

    // Build real notifications from live data
    const notifications = []

    if (activeOrders.length > 0) {
        notifications.push({
            id: 'active-orders',
            icon: <BsCheckCircle size={20} />,
            iconBg: '#dcfce7',
            iconColor: '#16a34a',
            title: 'Active transactions',
            description: `You have ${activeOrders.length} pending order${activeOrders.length !== 1 ? 's' : ''} awaiting action.`,
            unread: true,
            action: () => setActiveTab('Orders')
        })
    }

    activeOrders.forEach(t => {
        if (t.sellerId === user?.id) {
            notifications.push({
                id: `sell-${t.id}`,
                icon: <BsCheckCircle size={20} />,
                iconBg: '#fef3c7',
                iconColor: '#d97706',
                title: 'Awaiting your confirmation',
                description: `"${t.listing?.title}" — mark as completed once the buyer has paid.`,
                unread: true,
                action: () => setActiveTab('Orders')
            })
        }
        if (t.buyerId === user?.id) {
            notifications.push({
                id: `buy-${t.id}`,
                icon: <BsClock size={20} />,
                iconBg: '#e0e7ff',
                iconColor: '#4f46e5',
                title: 'Purchase pending',
                description: `"${t.listing?.title}" — waiting for the seller to confirm.`,
                unread: false,
                action: () => setActiveTab('Orders')
            })
        }
    })

    return (
        <>
            <AppNavbar
                bg="#FFFFFF"
                border={true}
                rightLinks={[
                    { label: 'Marketplace', to: '/marketplace' },
                    { label: 'Lost & Found',  to: '/lostfound' },

                ]}
            />

            <div className="activity-page">
                <div className="activity-container">

                    <div className="mb-4">
                        <h1 className="activity-title">Activity Center</h1>
                        <p className="activity-subtitle">
                            Manage your deals, messages, and order history.
                        </p>
                    </div>

                    <div className="activity-tabs-wrapper mb-4">
                        <div className="activity-tabs">
                            <button
                                className={`act-tab-btn ${activeTab === 'Notifications' ? 'active' : ''}`}
                                onClick={() => setActiveTab('Notifications')}
                            >
                                Notifications
                            </button>
                            <button
                                className={`act-tab-btn ${activeTab === 'Orders' ? 'active' : ''}`}
                                onClick={() => setActiveTab('Orders')}
                            >
                                Orders
                            </button>
                        </div>
                    </div>

                    <Row className="g-4">

                        {/* Left Column */}
                        <Col xs={12} lg={8}>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <h2 className="fw-bold mb-0" style={{ fontSize: '1.1rem' }}>
                                    {activeTab === 'Notifications' ? 'Recent Updates' : 'Your Orders'}
                                </h2>
                                {activeTab === 'Notifications' && notifications.filter(n => n.unread).length > 0 && (
                                    <span className="activity-badge-new">
                                        {notifications.filter(n => n.unread).length} New
                                    </span>
                                )}
                            </div>

                            {activeTab === 'Notifications' && (
                                <div className="d-flex flex-column gap-3">
                                    {isLoading ? (
                                        <div className="d-flex justify-content-center py-5">
                                            <Spinner animation="border" style={{ color: '#E0E000' }} />
                                        </div>
                                    ) : notifications.length === 0 ? (
                                        <div
                                            className="notification-card"
                                            style={{ border: '1px dashed #e5e7eb', background: 'transparent', boxShadow: 'none' }}
                                        >
                                            <div className="notif-icon-wrapper" style={{ backgroundColor: '#f3f4f6', color: '#9ca3af' }}>
                                                <BsBell size={18} />
                                            </div>
                                            <p className="notif-desc mb-0" style={{ color: '#9ca3af' }}>
                                                No new notifications — you're all caught up!
                                            </p>
                                        </div>
                                    ) : (
                                        notifications.map(notif => (
                                            <div
                                                key={notif.id}
                                                className="notification-card"
                                                onClick={notif.action}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <div
                                                    className="notif-icon-wrapper"
                                                    style={{ backgroundColor: notif.iconBg, color: notif.iconColor }}
                                                >
                                                    {notif.icon}
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h4 className="notif-title mb-1">{notif.title}</h4>
                                                    <p className="notif-desc">{notif.description}</p>
                                                </div>
                                                {notif.unread && <div className="unread-dot" />}
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}

                            {activeTab === 'Orders' && (
                                <div className="d-flex flex-column gap-3">
                                    {isLoading ? (
                                        <div className="d-flex justify-content-center py-5">
                                            <Spinner animation="border" style={{ color: '#E0E000' }} />
                                        </div>
                                    ) : transactions.length === 0 ? (
                                        <div className="text-center text-muted py-5">
                                            <BsBoxSeam size={40} className="mb-3" />
                                            <p>No orders yet.</p>
                                            <Button
                                                onClick={() => navigate('/marketplace')}
                                                style={{ backgroundColor: '#E0E000', border: 'none', color: '#0F172A' }}
                                            >
                                                Browse Marketplace
                                            </Button>
                                        </div>
                                    ) : transactions.map(transaction => (
                                        <div key={transaction.id} className="order-card">
                                            {transaction.listing?.images?.[0]?.url && (
                                                <div style={{ height: 180, overflow: 'hidden' }}>
                                                    <img
                                                        src={transaction.listing.images[0].url}
                                                        alt={transaction.listing.title}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            )}
                                            <div className="p-3">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h4 className="order-name">{transaction.listing?.title}</h4>
                                                    <span className="order-price">GH₵{transaction.price?.toFixed(2)}</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 mb-3">
                                                    <span className="status-dot" style={{ backgroundColor: getStatusColor(transaction.status) }} />
                                                    <span className="status-text">{getStatusLabel(transaction.status)}</span>
                                                    <span className="text-muted small ms-auto">
                                                        {transaction.buyerId === user?.id ? 'You are buying' : 'You are selling'}
                                                    </span>
                                                </div>

                                                {transaction.status === 'pending' && (
                                                    <Row className="g-2">
                                                        {transaction.sellerId === user?.id && (
                                                            <Col>
                                                                <Button
                                                                    className="w-100 border-0 fw-bold"
                                                                    style={{ backgroundColor: '#E0E000', color: '#0F172A', borderRadius: '8px' }}
                                                                    onClick={() => updateMutation.mutate({ id: transaction.id, status: 'completed' })}
                                                                    disabled={updateMutation.isPending}
                                                                >
                                                                    Mark Completed
                                                                </Button>
                                                            </Col>
                                                        )}
                                                        {transaction.buyerId === user?.id && (
                                                            <Col>
                                                                <Button
                                                                    className="w-100 fw-bold"
                                                                    variant="outline-danger"
                                                                    style={{ borderRadius: '8px' }}
                                                                    onClick={() => updateMutation.mutate({ id: transaction.id, status: 'cancelled' })}
                                                                    disabled={updateMutation.isPending}
                                                                >
                                                                    Cancel
                                                                </Button>
                                                            </Col>
                                                        )}
                                                        <Col>
                                                            <Button
                                                                className="w-100 fw-bold"
                                                                variant="outline-secondary"
                                                                style={{ borderRadius: '8px', borderColor: '#e0e0e0' }}
                                                                onClick={() => navigate(`/messages/${
                                                                    transaction.buyerId === user?.id ? transaction.sellerId : transaction.buyerId
                                                                }`)}
                                                            >
                                                                Message
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Col>

                        {/* Right Column */}
                        <Col xs={12} lg={4}>
                            <h2 className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>Active Orders</h2>

                            {isLoading ? (
                                <div className="d-flex justify-content-center py-3">
                                    <Spinner animation="border" style={{ color: '#E0E000' }} />
                                </div>
                            ) : activeOrders.length === 0 ? (
                                <p className="text-muted small">No active orders.</p>
                            ) : (
                                <div className="d-flex flex-column gap-3 mb-3">
                                    {activeOrders.slice(0, 2).map(order => (
                                        <div
                                            key={order.id}
                                            className="order-card"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => navigate(`/listings/${order.listingId}`)}
                                        >
                                            {order.listing?.images?.[0]?.url && (
                                                <div style={{ height: 140, overflow: 'hidden' }}>
                                                    <img
                                                        src={order.listing.images[0].url}
                                                        alt={order.listing.title}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            )}
                                            <div className="p-3">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h4 className="order-name">{order.listing?.title}</h4>
                                                    <span className="order-price">GH₵{order.price?.toFixed(2)}</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="status-dot" style={{ backgroundColor: '#d97706' }} />
                                                    <span className="status-text">PENDING</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="trading-power-card">
                                <div className="tp-label">TRADING POWER</div>
                                <div className="tp-amount">GH₵{totalSpent.toFixed(2)}</div>
                                <div className="tp-trend">
                                    {completedOrders.length} completed trade{completedOrders.length !== 1 ? 's' : ''}
                                </div>
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
