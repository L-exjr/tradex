import { Link, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { BsHeart, BsHeartFill, BsChatDots } from 'react-icons/bs'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { saveListing, unsaveListing } from '../services/api'
import useAuth from '../hooks/useAuth'

// savedItems is passed from the parent (fetched once) to avoid N duplicate queries.
export default function ProductCard({ product, savedItems = [] }) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const queryClient = useQueryClient()

  const isSaved = savedItems.some(s => s.listingId === product.id)
  const isOwner = user?.id === product.userId

  const saveMutation = useMutation({
    mutationFn: () => isSaved ? unsaveListing(product.id) : saveListing(product.id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['saved-listings'] })
  })

  const imageUrl = product.images?.[0]?.url || null

  return (
    <Link to={`/listings/${product.id}`} className="text-decoration-none text-dark d-block h-100">
      <Card
        className="h-100 border-0 shadow-sm"
        style={{ borderRadius: '6px', overflow: 'hidden', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = ''
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', backgroundColor: '#F1F5F9', overflow: 'hidden' }}>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.title}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div className="product-image-placeholder">No Image</div>
          )}

          {!isOwner && (
            <button
              className="favorite-btn"
              aria-label={isSaved ? 'Unsave' : 'Save'}
              onClick={(e) => {
                e.preventDefault()
                saveMutation.mutate()
              }}
              disabled={saveMutation.isPending}
            >
              {isSaved
                ? <BsHeartFill size={18} color="#ef4444" />
                : <BsHeart size={18} />
              }
            </button>
          )}
        </div>

        {/* Info */}
        <Card.Body className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-uppercase fw-semibold" style={{ fontSize: '0.72rem', color: '#64748B', letterSpacing: '0.5px' }}>
              {product.category?.name || 'Uncategorized'}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
              {product.user?.name || ''}
            </span>
          </div>

          <Card.Title className="fw-semibold mb-2" style={{ fontSize: '0.95rem', lineHeight: 1.3 }}>
            {product.title}
          </Card.Title>

          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold" style={{ fontSize: '1.05rem' }}>
              GHS {product.price?.toFixed(2)}
            </span>
            <Button
              variant="outline-secondary"
              size="sm"
              className="p-0 d-flex align-items-center justify-content-center"
              style={{ width: 32, height: 32, borderRadius: '6px', borderColor: '#e0e0e0' }}
              onClick={(e) => {
                e.preventDefault()
                navigate(`/messages/${product.user?.id}`)
              }}
            >
              <BsChatDots size={16} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Link>
  )
}
