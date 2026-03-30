import { useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { BsCameraFill, BsGeoAlt, BsXCircleFill, BsShieldCheck } from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getCategories, createLostFoundPost } from '../services/api'
import useForm from '../hooks/useForm'

export default function ReportLostItemPage() {
    const navigate = useNavigate()
    const fileInputRef = useRef(null)
    const [images, setImages] = useState([])
    const [error, setError] = useState('')
    const [postType, setPostType] = useState('lost')

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
    })

    const lfCategories = categories.filter(c => c.type === 'lostfound')

    const validate = (values) => {
        const errors = {}
        if (!values.title.trim()) errors.title = 'Item name is required'
        if (!values.categoryId) errors.categoryId = 'Please select a category'
        if (!values.dateLostFound) errors.dateLostFound = 'Date is required'
        if (!values.locationText.trim()) errors.locationText = 'Location is required'
        if (!values.description.trim()) errors.description = 'Description is required'
        return errors
    }

    const { values, errors, handleChange, handleSubmit } = useForm({
        title: '',
        categoryId: '',
        dateLostFound: '',
        locationText: '',
        description: ''
    }, validate)

    const mutation = useMutation({
        mutationFn: createLostFoundPost,
        onSuccess: () => navigate('/lostfound'),
        onError: (err) => setError(err.message)
    })

    const onSubmit = (values) => {
        const formData = new FormData()
        formData.append('title', values.title)
        formData.append('categoryId', values.categoryId)
        formData.append('dateLostFound', values.dateLostFound)
        formData.append('locationText', values.locationText)
        formData.append('description', values.description)
        formData.append('type', postType)
        images.forEach(img => formData.append('images', img.file))
        mutation.mutate(formData)
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        const remaining = 3 - images.length
        const toAdd = files.slice(0, remaining).map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }))
        setImages(prev => [...prev, ...toAdd])
    }

    const removeImage = (index) => {
        setImages(prev => {
            URL.revokeObjectURL(prev[index].preview)
            return prev.filter((_, i) => i !== index)
        })
    }

    return (
        <>
            <AppNavbar bg="#FFFFFF" border={true} rightLinks={[
                { label: 'Lost & Found', to: '/lostfound' },
                { label: 'Profile', to: '/profile' }
            ]} />

            <div className="report-lost-page">
                <div className="report-container">

                    <div className="mb-4">
                        <h1 className="report-title">Report Item</h1>
                        <p className="report-subtitle">
                            Fill out the details below to notify the TradeX community.
                        </p>
                    </div>

                    <div className="report-form-card">

                        {/* Lost or Found toggle */}
                        <div className="profile-tabs-wrapper mb-4" style={{ maxWidth: '100%' }}>
                            <div className="profile-tabs">
                                <button
                                    type="button"
                                    className={`tab-btn ${postType === 'lost' ? 'active' : ''}`}
                                    onClick={() => setPostType('lost')}
                                >
                                    I Lost Something
                                </button>
                                <button
                                    type="button"
                                    className={`tab-btn ${postType === 'found' ? 'active' : ''}`}
                                    onClick={() => setPostType('found')}
                                >
                                    I Found Something
                                </button>
                            </div>
                        </div>

                        <Form onSubmit={handleSubmit(onSubmit)}>

                            {/* Photo Upload */}
                            <Form.Group className="mb-4">
                                <Form.Label className="form-field-label">ITEM PHOTO</Form.Label>

                                {images.length > 0 && (
                                    <Row className="g-2 mb-3">
                                        {images.map((img, index) => (
                                            <Col key={index} xs={4}>
                                                <div className="upload-preview-wrapper">
                                                    <img
                                                        src={img.preview}
                                                        alt={`Preview ${index + 1}`}
                                                        className="upload-preview-img"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="upload-remove-btn"
                                                        onClick={() => removeImage(index)}
                                                    >
                                                        <BsXCircleFill size={18} />
                                                    </button>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                )}

                                {images.length < 3 && (
                                    <div
                                        className="photo-upload-area"
                                        onClick={() => fileInputRef.current.click()}
                                    >
                                        <div className="upload-icon-wrapper">
                                            <BsCameraFill size={22} color="#EAB308" />
                                        </div>
                                        <p className="fw-semibold small mb-1">Click to upload or drag and drop</p>
                                        <p className="text-muted" style={{ fontSize: '0.75rem' }}>PNG, JPG up to 10MB</p>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            className="d-none"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                )}
                            </Form.Group>

                            {/* Name and Category */}
                            <Row className="g-3 mb-3">
                                <Col xs={12} sm={6}>
                                    <Form.Group>
                                        <Form.Label className="form-field-label">ITEM NAME</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="e.g. Silver AirPods Pro"
                                            value={values.title}
                                            onChange={handleChange('title')}
                                            isInvalid={!!errors.title}
                                            className="form-field-input"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.title}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Form.Group>
                                        <Form.Label className="form-field-label">CATEGORY</Form.Label>
                                        <Form.Select
                                            value={values.categoryId}
                                            onChange={handleChange('categoryId')}
                                            isInvalid={!!errors.categoryId}
                                            className="form-field-input"
                                        >
                                            <option value="">Select Category</option>
                                            {lfCategories.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.categoryId}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Date and Location */}
                            <Row className="g-3 mb-3">
                                <Col xs={12} sm={6}>
                                    <Form.Group>
                                        <Form.Label className="form-field-label">
                                            DATE {postType === 'lost' ? 'LOST' : 'FOUND'}
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={values.dateLostFound}
                                            onChange={handleChange('dateLostFound')}
                                            isInvalid={!!errors.dateLostFound}
                                            className="form-field-input"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.dateLostFound}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Form.Group>
                                        <Form.Label className="form-field-label">LOCATION LAST SEEN</Form.Label>
                                        <div className="position-relative">
                                            <span
                                                className="position-absolute"
                                                style={{ left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#6b7280', zIndex: 5 }}
                                            >
                                                <BsGeoAlt size={14} />
                                            </span>
                                            <Form.Control
                                                type="text"
                                                placeholder="e.g. Main Library Floor 2"
                                                value={values.locationText}
                                                onChange={handleChange('locationText')}
                                                isInvalid={!!errors.locationText}
                                                className="form-field-input"
                                                style={{ paddingLeft: '2.25rem' }}
                                            />
                                        </div>
                                        {errors.locationText && (
                                            <div className="text-danger small mt-1">{errors.locationText}</div>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Description */}
                            <Form.Group className="mb-4">
                                <Form.Label className="form-field-label">DETAILED DESCRIPTION</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Describe unique markings, serial numbers, or specific circumstances..."
                                    value={values.description}
                                    onChange={handleChange('description')}
                                    isInvalid={!!errors.description}
                                    className="form-field-input"
                                    style={{ resize: 'vertical' }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.description}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {error && (
                                <div className="text-danger small mb-3 text-center">{error}</div>
                            )}

                            <Row className="g-2">
                                <Col xs={12} sm={4}>
                                    <Button
                                        type="button"
                                        variant="outline-secondary"
                                        className="w-100 fw-semibold"
                                        style={{ borderColor: '#e5e7eb', borderRadius: '8px' }}
                                        onClick={() => navigate('/lostfound')}
                                    >
                                        Save as Draft
                                    </Button>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <Button
                                        type="submit"
                                        className="w-100 fw-bold border-0 d-flex align-items-center justify-content-center gap-2"
                                        style={{ backgroundColor: '#E0E000', color: '#111827', borderRadius: '8px', padding: '0.75rem' }}
                                        disabled={mutation.isPending}
                                    >
                                        {mutation.isPending ? 'Submitting...' : '➢ Submit Report'}
                                    </Button>
                                </Col>
                            </Row>

                        </Form>
                    </div>

                    <div className="text-center mt-4 text-muted small">
                        Found something instead?{' '}
                        <span
                            className="fw-semibold text-dark"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setPostType('found')}
                        >
                            Switch to Found Item
                        </span>
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