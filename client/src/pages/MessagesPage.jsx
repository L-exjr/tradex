import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import { BsArrowLeft, BsSend, BsPersonCircle } from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import useAuth from '../hooks/useAuth'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getConversations, getMessages, sendMessage } from '../services/api'

export default function MessagesPage() {
    const navigate      = useNavigate()
    const { partnerId } = useParams()
    const { user }      = useAuth()
    const queryClient   = useQueryClient()
    const [message, setMessage]         = useState('')
    const [isTabVisible, setTabVisible] = useState(!document.hidden)
    const messagesEndRef = useRef(null)
    const inputRef       = useRef(null)

    // Pause polling when the browser tab is hidden — no wasted requests
    useEffect(() => {
        const handler = () => setTabVisible(!document.hidden)
        document.addEventListener('visibilitychange', handler)
        return () => document.removeEventListener('visibilitychange', handler)
    }, [])

    // Focus the input box whenever the active conversation changes
    useEffect(() => {
        if (partnerId) inputRef.current?.focus()
    }, [partnerId])

    // Poll conversations every 10 s (unread badge updates)
    const { data: conversations = [], isLoading: loadingConversations } = useQuery({
        queryKey:       ['conversations'],
        queryFn:        getConversations,
        enabled:        !!user,
        refetchInterval: isTabVisible ? 10000 : false
    })

    // Poll active thread every 5 s for incoming messages
    const { data: messages = [], isLoading: loadingMessages } = useQuery({
        queryKey:       ['messages', partnerId],
        queryFn:        () => getMessages(partnerId),
        enabled:        !!partnerId,
        refetchInterval: isTabVisible ? 5000 : false
    })

    // Auto-scroll to newest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const sendMutation = useMutation({
        mutationFn: () => sendMessage(partnerId, message),
        onSuccess: () => {
            setMessage('')
            queryClient.invalidateQueries({ queryKey: ['messages', partnerId] })
            queryClient.invalidateQueries({ queryKey: ['conversations'] })
        }
    })

    const handleSend = () => {
        if (!message.trim() || sendMutation.isPending) return
        sendMutation.mutate()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    const activePartner = conversations.find(c => c.partner?.id === partnerId)?.partner

    return (
        <>
            <AppNavbar bg="#FFFFFF" border={true} rightLinks={[
                { label: 'Marketplace', to: '/marketplace' },
                { label: 'Profile',     to: '/profile' }
            ]} />

            <Container fluid className="p-0" style={{ height: 'calc(100vh - 70px)', background: '#F8FAFC' }}>
                <Row className="g-0 h-100">

                    {/* ── Conversations Sidebar ─────────────────────────────── */}
                    <Col
                        xs={12} md={4} lg={3}
                        className={`border-end h-100 d-flex flex-column ${partnerId ? 'd-none d-md-flex' : 'd-flex'}`}
                        style={{ background: '#FFFFFF' }}
                    >
                        <div className="p-3 border-bottom">
                            <h5 className="fw-bold mb-0">Messages</h5>
                        </div>

                        <div className="overflow-auto flex-grow-1">
                            {loadingConversations ? (
                                <div className="d-flex justify-content-center py-5">
                                    <Spinner animation="border" style={{ color: '#E0E000' }} />
                                </div>
                            ) : conversations.length === 0 ? (
                                <div className="text-center text-muted py-5 px-3">
                                    <BsPersonCircle size={40} className="mb-3 text-muted" />
                                    <p className="small">No conversations yet. Message a seller from a listing!</p>
                                </div>
                            ) : (
                                conversations.map((conv) => (
                                    <div
                                        key={conv.partner?.id}
                                        className="conversation-item"
                                        style={{ backgroundColor: partnerId === conv.partner?.id ? '#F8FAFC' : 'transparent' }}
                                        onClick={() => navigate(`/messages/${conv.partner?.id}`)}
                                    >
                                        <div
                                            className="conversation-avatar"
                                            style={{ backgroundColor: '#E0E000', color: '#0F172A' }}
                                        >
                                            {conv.partner?.name?.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="conversation-info">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="fw-semibold" style={{ fontSize: '0.9rem' }}>
                                                    {conv.partner?.name}
                                                </span>
                                                <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                                                    {new Date(conv.lastMessage?.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mt-1">
                                                <span className="conversation-preview">
                                                    {conv.lastMessage?.content}
                                                </span>
                                                {conv.unreadCount > 0 && (
                                                    <span className="unread-badge">{conv.unreadCount}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </Col>

                    {/* ── Chat Area ─────────────────────────────────────────── */}
                    <Col
                        xs={12} md={8} lg={9}
                        className={`h-100 d-flex flex-column ${!partnerId ? 'd-none d-md-flex' : 'd-flex'}`}
                    >
                        {!partnerId ? (
                            <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted">
                                <BsPersonCircle size={60} className="mb-3" />
                                <p className="fw-semibold">Select a conversation to start messaging</p>
                            </div>
                        ) : (
                            <>
                                {/* Chat Header */}
                                <div
                                    className="d-flex align-items-center gap-3 p-3 border-bottom"
                                    style={{ background: '#FFFFFF' }}
                                >
                                    <Button
                                        variant="link"
                                        className="p-0 d-md-none text-dark"
                                        onClick={() => navigate('/messages')}
                                    >
                                        <BsArrowLeft size={20} />
                                    </Button>
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
                                        style={{ width: 40, height: 40, backgroundColor: '#E0E000', color: '#0F172A', flexShrink: 0 }}
                                    >
                                        {activePartner?.name?.charAt(0).toUpperCase() || '?'}
                                    </div>
                                    <div>
                                        <p className="fw-semibold mb-0" style={{ fontSize: '0.95rem' }}>
                                            {activePartner?.name || 'User'}
                                        </p>
                                        <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>
                                            {activePartner?.email || ''}
                                        </p>
                                    </div>
                                </div>

                                {/* Messages */}
                                <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-2">
                                    {loadingMessages ? (
                                        <div className="d-flex justify-content-center py-5">
                                            <Spinner animation="border" style={{ color: '#E0E000' }} />
                                        </div>
                                    ) : messages.length === 0 ? (
                                        <div className="text-center text-muted py-5">
                                            <p className="small">No messages yet. Say hello!</p>
                                        </div>
                                    ) : (
                                        messages.map((msg) => {
                                            const isMe = msg.senderId === user?.id
                                            return (
                                                <div
                                                    key={msg.id}
                                                    className={`d-flex ${isMe ? 'justify-content-end' : 'justify-content-start'}`}
                                                >
                                                    <div
                                                        className="message-bubble"
                                                        style={{
                                                            backgroundColor: isMe ? '#E0E000' : '#FFFFFF',
                                                            color:           '#0F172A',
                                                            alignSelf:       isMe ? 'flex-end' : 'flex-start'
                                                        }}
                                                    >
                                                        <p className="mb-0" style={{ fontSize: '0.9rem' }}>{msg.content}</p>
                                                        <span className="message-time">
                                                            {new Date(msg.createdAt).toLocaleTimeString([], {
                                                                hour: '2-digit', minute: '2-digit'
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )}
                                    {/* Scroll anchor */}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Message Input */}
                                <div className="p-3 border-top" style={{ background: '#FFFFFF' }}>
                                    <div className="d-flex gap-2">
                                        <Form.Control
                                            ref={inputRef}
                                            type="text"
                                            placeholder="Type a message..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            style={{
                                                borderRadius:    '20px',
                                                borderColor:     '#E2E8F0',
                                                backgroundColor: '#F8FAFC',
                                                fontFamily:      'Lexend, sans-serif',
                                                fontSize:        '0.9rem'
                                            }}
                                        />
                                        <Button
                                            onClick={handleSend}
                                            disabled={!message.trim() || sendMutation.isPending}
                                            className="d-flex align-items-center justify-content-center border-0 rounded-circle"
                                            style={{ width: 44, height: 44, backgroundColor: '#E0E000', color: '#0F172A', flexShrink: 0 }}
                                        >
                                            {sendMutation.isPending
                                                ? <Spinner animation="border" size="sm" />
                                                : <BsSend size={16} />
                                            }
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
