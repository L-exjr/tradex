import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { BsShieldCheck, BsCameraFill, BsXCircleFill } from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import LegalLinks from '../components/LegalLinks'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getCategories, createListing } from '../services/api'
import useForm from '../hooks/useForm'

export default function ListNewItemPage() {
    const navigate = useNavigate()
    const fileInputRef = useRef(null)
    const [images, setImages] = useState([])
    const [error, setError] = useState('')

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
    })

    const listingCategories = categories.filter(c => c.type === 'listing')

    const validate = (values) => {
        const errors = {}
        if (!values.title.trim()) errors.title = 'Item name is required'
        if (!values.price || isNaN(values.price) || parseFloat(values.price) <= 0)
            errors.price = 'Enter a valid price'
        if (!values.categoryId) errors.categoryId = 'Please select a category'
        if (!values.description.trim()) errors.description = 'Description is required'
        return errors
    }

    const { values, errors, handleChange, handleSubmit } = useForm({
        title: '',
        price: '',
        categoryId: '',
        description: '',
        pickupLocation: ''
    }, validate)

    const mutation = useMutation({
        mutationFn: createListing,
        onSuccess: () => navigate('/profile'),
        onError: (err) => setError(err.message)
    })

    const onSubmit = (values) => {
        const formData = new FormData()
        formData.append('title', values.title)
        formData.append('price', values.price)
        formData.append('categoryId', values.categoryId)
        formData.append('description', values.description)
        formData.append('pickupLocation', values.pickupLocation)
        images.forEach(img => formData.append('images', img.file))
        mutation.mutate(formData)
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        const remaining = 5 - images.length
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
                { label: 'Marketplace', to: '/marketplace' },
            ]} />

            <div className="list-item-page">

                <div className="text-center mb-4">
                    <h1 className="list-item-title">List New Item</h1>
                    <p className="list-item-subtitle">
                        Enter the details of the item you want to sell to the campus community.
                    </p>
                </div>

                <div className="list-item-form-container">
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        {/* Photo Upload */}
                        <Form.Group className="mb-4">
                            <Form.Label className="form-field-label">ITEM PHOTOS</Form.Label>

                            {images.length > 0 && (
                                <Row className="g-2 mb-3">
                                    {images.map((img, index) => (
                                        <Col key={index} xs={4} sm={3}>
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

                            {images.length < 5 && (
                                <div
                                    className="photo-upload-area"
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    <div className="upload-icon-wrapper">
                                        <BsCameraFill size={24} color="#EAB308" />
                                    </div>
                                    <h3 className="fw-semibold fs-6 mb-1">Upload Photos</h3>
                                    <p className="text-muted small mb-3">
                                        Drag and drop up to {5 - images.length} more image{5 - images.length !== 1 ? 's' : ''}, or click to browse.
                                    </p>
                                    <Button
                                        type="button"
                                        variant="outline-secondary"
                                        size="sm"
                                        style={{ borderColor: '#E2E8F0', fontWeight: 600 }}
                                    >
                                        Select Files
                                    </Button>
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

                        {/* Item Name */}
                        <Form.Group className="mb-3">
                            <Form.Label className="form-field-label">ITEM NAME</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Sony WH-1000XM4 Headphones"
                                value={values.title}
                                onChange={handleChange('title')}
                                isInvalid={!!errors.title}
                                className="form-field-input"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/* Price and Category */}
                        <Row className="g-3 mb-3">
                            <Col xs={12} sm={6}>
                                <Form.Group>
                                    <Form.Label className="form-field-label">PRICE</Form.Label>
                                    <div className="price-input-wrapper">
                                        <Form.Control
                                            type="number"
                                            placeholder="0.00"
                                            value={values.price}
                                            onChange={handleChange('price')}
                                            isInvalid={!!errors.price}
                                            className="form-field-input"
                                            min="0"
                                            step="0.01"
                                        />
                                        <span className="currency-label">GHS</span>
                                    </div>
                                    {errors.price && (
                                        <div className="text-danger small mt-1">{errors.price}</div>
                                    )}
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
                                        {listingCategories.map(cat => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.categoryId}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Description */}
                        <Form.Group className="mb-3">
                            <Form.Label className="form-field-label">DESCRIPTION</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Tell us more about the item's condition, age, and why you are selling it..."
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

                        {/* Pickup Location */}
                        <Form.Group className="mb-4">
                            <Form.Label className="form-field-label">PICKUP LOCATION</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Student Union or Library"
                                value={values.pickupLocation}
                                onChange={handleChange('pickupLocation')}
                                className="form-field-input"
                            />
                        </Form.Group>

                        {error && (
                            <div className="text-danger small mb-3 text-center">{error}</div>
                        )}

                        {/* Actions */}
                        <div className="d-flex flex-column gap-2">
                            <Button
                                type="submit"
                                disabled={mutation.isPending}
                                className="w-100 border-0 fw-bold py-3"
                                style={{ backgroundColor: '#E0E000', color: '#0F172A', borderRadius: '8px' }}
                            >
                                {mutation.isPending ? 'Posting...' : 'Post Item Now'}
                            </Button>
                            <Button
                                type="button"
                                variant="link"
                                className="text-muted fw-semibold text-decoration-none"
                                onClick={() => navigate('/profile')}
                            >
                                Save as Draft
                            </Button>
                        </div>

                    </Form>
                </div>

                <div className="d-flex align-items-center gap-2 mt-4 text-muted small">
                    <BsShieldCheck size={16} />
                    All listings are reviewed for safety according to campus guidelines.
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