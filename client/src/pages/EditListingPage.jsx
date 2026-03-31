import { useState, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import { BsCameraFill, BsXCircleFill, BsTrash } from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import LegalLinks from '../components/LegalLinks'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getListing, updateListing, getCategories } from '../services/api'
import useForm from '../hooks/useForm'
import useAuth from '../hooks/useAuth'

export default function EditListingPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { user } = useAuth()
    const queryClient = useQueryClient()
    const fileInputRef = useRef(null)
    const [newImages, setNewImages] = useState([])
    const [error, setError] = useState('')
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

    const { data: listing, isLoading: loadingListing } = useQuery({
        queryKey: ['listing', id],
        queryFn: () => getListing(id)
    })

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
    })

    const listingCategories = categories.filter(c => c.type === 'listing' || c.type === 'both')

    const validate = (values) => {
        const errors = {}
        if (!values.title.trim()) errors.title = 'Item name is required'
        if (!values.price || isNaN(values.price) || parseFloat(values.price) <= 0)
            errors.price = 'Enter a valid price'
        if (!values.categoryId) errors.categoryId = 'Please select a category'
        if (!values.description.trim()) errors.description = 'Description is required'
        return errors
    }

    const { values, errors, handleChange, handleSubmit, setValues } = useForm({
        title: '',
        price: '',
        categoryId: '',
        description: '',
        pickupLocation: '',
        status: 'active'
    }, validate)

    useEffect(() => {
        if (listing) {
            if (listing.userId !== user?.id) {
                navigate(`/listings/${id}`)
                return
            }
            setValues({
                title: listing.title || '',
                price: listing.price?.toString() || '',
                categoryId: listing.categoryId?.toString() || '',
                description: listing.description || '',
                pickupLocation: listing.pickupLocation || '',
                // Clamp to safe values — never pre-select 'deleted' in the UI
                status: listing.status === 'sold' ? 'sold' : 'active'
            })
        }
    }, [listing, user, id, navigate, setValues])

    const updateMutation = useMutation({
        mutationFn: (formData) => updateListing(id, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['listing', id] })
            queryClient.invalidateQueries({ queryKey: ['listings'] })
            queryClient.invalidateQueries({ queryKey: ['my-listings'] })
            navigate(`/listings/${id}`)
        },
        onError: (err) => setError(err.message)
    })

    const onSubmit = (values) => {
        const formData = new FormData()
        formData.append('title', values.title)
        formData.append('price', values.price)
        formData.append('categoryId', values.categoryId)
        formData.append('description', values.description)
        formData.append('pickupLocation', values.pickupLocation)
        formData.append('status', values.status)
        newImages.forEach(img => formData.append('images', img.file))
        updateMutation.mutate(formData)
    }

    const handleDelete = () => {
        const formData = new FormData()
        formData.append('status', 'deleted')
        updateMutation.mutate(formData)
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        const existingCount = listing?.images?.length || 0
        const remaining = 5 - existingCount - newImages.length
        const toAdd = files.slice(0, remaining).map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }))
        setNewImages(prev => [...prev, ...toAdd])
    }

    const removeNewImage = (index) => {
        setNewImages(prev => {
            URL.revokeObjectURL(prev[index].preview)
            return prev.filter((_, i) => i !== index)
        })
    }

    if (loadingListing) {
        return (
            <>
                <AppNavbar bg="#FFFFFF" border />
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                    <Spinner animation="border" style={{ color: '#E0E000' }} />
                </div>
            </>
        )
    }

    const totalImages = (listing?.images?.length || 0) + newImages.length

    return (
        <>
            <AppNavbar bg="#FFFFFF" border={true} rightLinks={[
                { label: 'Marketplace', to: '/marketplace' },
                { label: 'Lost & Found', to: '/lost-found' },
            ]} />

            <div className="list-item-page">

                <div className="text-center mb-4">
                    <h1 className="list-item-title">Edit Listing</h1>
                    <p className="list-item-subtitle">Update the details of your listing.</p>
                </div>

                <div className="list-item-form-container">
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        {/* Existing Images */}
                        {listing?.images?.length > 0 && (
                            <Form.Group className="mb-3">
                                <Form.Label className="form-field-label">CURRENT IMAGES</Form.Label>
                                <Row className="g-2">
                                    {listing.images.map((img, index) => (
                                        <Col key={index} xs={4} sm={3}>
                                            <div className="upload-preview-wrapper">
                                                <img src={img.url} alt={`Image ${index + 1}`} className="upload-preview-img" />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Form.Group>
                        )}

                        {/* New Images */}
                        <Form.Group className="mb-4">
                            <Form.Label className="form-field-label">
                                {listing?.images?.length > 0 ? 'ADD MORE PHOTOS' : 'ITEM PHOTOS'}
                            </Form.Label>

                            {newImages.length > 0 && (
                                <Row className="g-2 mb-3">
                                    {newImages.map((img, index) => (
                                        <Col key={index} xs={4} sm={3}>
                                            <div className="upload-preview-wrapper">
                                                <img src={img.preview} alt={`New ${index + 1}`} className="upload-preview-img" />
                                                <button type="button" className="upload-remove-btn" onClick={() => removeNewImage(index)}>
                                                    <BsXCircleFill size={18} />
                                                </button>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            )}

                            {totalImages < 5 && (
                                <div className="photo-upload-area" onClick={() => fileInputRef.current.click()}>
                                    <div className="upload-icon-wrapper">
                                        <BsCameraFill size={24} color="#EAB308" />
                                    </div>
                                    <p className="fw-semibold small mb-1">Click to upload photos</p>
                                    <p className="text-muted" style={{ fontSize: '0.75rem' }}>
                                        {5 - totalImages} slot{5 - totalImages !== 1 ? 's' : ''} remaining
                                    </p>
                                    <input ref={fileInputRef} type="file" accept="image/*" multiple className="d-none" onChange={handleFileChange} />
                                </div>
                            )}
                        </Form.Group>

                        {/* Title */}
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
                            <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
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
                                        <span className="currency-label">GH₵</span>
                                    </div>
                                    {errors.price && <div className="text-danger small mt-1">{errors.price}</div>}
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
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">{errors.categoryId}</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Description */}
                        <Form.Group className="mb-3">
                            <Form.Label className="form-field-label">DESCRIPTION</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Tell us more about the item..."
                                value={values.description}
                                onChange={handleChange('description')}
                                isInvalid={!!errors.description}
                                className="form-field-input"
                                style={{ resize: 'vertical' }}
                            />
                            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                        </Form.Group>

                        {/* Pickup Location */}
                        <Form.Group className="mb-3">
                            <Form.Label className="form-field-label">PICKUP LOCATION</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Student Union or Library"
                                value={values.pickupLocation}
                                onChange={handleChange('pickupLocation')}
                                className="form-field-input"
                            />
                        </Form.Group>

                        {/* Status */}
                        <Form.Group className="mb-4">
                            <Form.Label className="form-field-label">STATUS</Form.Label>
                            <Form.Select
                                value={values.status}
                                onChange={handleChange('status')}
                                className="form-field-input"
                            >
                                <option value="active">Active</option>
                                <option value="sold">Mark as Sold</option>
                            </Form.Select>
                        </Form.Group>

                        {error && <div className="text-danger small mb-3 text-center">{error}</div>}

                        <div className="d-flex flex-column gap-2">
                            <Button
                                type="submit"
                                disabled={updateMutation.isPending}
                                className="w-100 border-0 fw-bold py-3"
                                style={{ backgroundColor: '#E0E000', color: '#0F172A', borderRadius: '8px' }}
                            >
                                {updateMutation.isPending ? 'Saving...' : 'Save Changes'}
                            </Button>
                            <Button
                                type="button"
                                variant="link"
                                className="text-muted fw-semibold text-decoration-none"
                                onClick={() => navigate(`/listings/${id}`)}
                            >
                                Cancel
                            </Button>
                        </div>

                    </Form>

                    {/* Delete Section */}
                    <div className="mt-4 pt-4 border-top">
                        {!showDeleteConfirm ? (
                            <Button
                                variant="link"
                                className="text-danger text-decoration-none fw-semibold w-100 d-flex align-items-center justify-content-center gap-2"
                                onClick={() => setShowDeleteConfirm(true)}
                            >
                                <BsTrash size={16} />
                                Delete Listing
                            </Button>
                        ) : (
                            <div className="text-center">
                                <p className="text-danger fw-semibold mb-3">Are you sure? This cannot be undone.</p>
                                <div className="d-flex gap-2 justify-content-center">
                                    <Button
                                        variant="outline-secondary"
                                        style={{ borderRadius: '8px', borderColor: '#e0e0e0' }}
                                        onClick={() => setShowDeleteConfirm(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="danger"
                                        style={{ borderRadius: '8px' }}
                                        onClick={handleDelete}
                                        disabled={updateMutation.isPending}
                                    >
                                        {updateMutation.isPending ? 'Deleting...' : 'Yes, Delete'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                <div className="d-flex align-items-center gap-2 mt-4 text-muted small">
                    All changes are saved immediately and visible to buyers.
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
