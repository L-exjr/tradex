import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { BsGrid } from 'react-icons/bs'
import AppNavbar from '../components/AppNavbar'
import ProductCard from '../components/ProductCard'
import useAuth from '../hooks/useAuth'
import { getListings, getCategories, getSavedListings } from '../services/api'
import LegalLinks from '../components/LegalLinks'
import { useQuery } from '@tanstack/react-query'

function Marketplace() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('newest')
  const [visibleCount, setVisibleCount] = useState(8)

  const { data: categoriesData = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  const { data: listings = [], isLoading } = useQuery({
    queryKey: ['listings', selectedCategory, searchQuery],
    queryFn: () => getListings({
      ...(selectedCategory !== 'All' && {
        categoryId: categoriesData.find(c => c.name === selectedCategory)?.id
      }),
      ...(searchQuery && { search: searchQuery }),
      status: 'active'
    }),
    enabled: selectedCategory === 'All' || categoriesData.length > 0
  })

  // Fetched once here — passed to every ProductCard as a prop.
  // TanStack Query deduplicates this with ProfilePage's identical query key.
  const { data: savedItems = [] } = useQuery({
    queryKey: ['saved-listings'],
    queryFn: getSavedListings,
    enabled: !!user
  })

  const sorted = [...listings].sort((a, b) => {
    if (sortOrder === 'newest') return new Date(b.createdAt) - new Date(a.createdAt)
    if (sortOrder === 'price_asc') return a.price - b.price
    if (sortOrder === 'price_desc') return b.price - a.price
    return 0
  })

  const visible = sorted.slice(0, visibleCount)
  const hasMore = visibleCount < sorted.length
  const categories = ['All', ...categoriesData.filter(c => c.type === 'listing').map(c => c.name)]

  return (
    <>
      <AppNavbar
        bg="#FFFFFF"
        border={true}
        showSearch={true}
        searchPlaceholder="Search textbooks, tech..."
        onSearch={(q) => { setSearchQuery(q); setVisibleCount(8); }}
        rightLinks={[
          { label: 'Lost & Found',  to: '/lostfound' },
          {
            label: 'Sell Item',
            to: '/listings/create',
            className: 'fw-bold rounded-1 px-3 py-2',
            style: { backgroundColor: '#E0E000', color: '#0F172A' }
          },
        ]}
      />

      <Container fluid className="px-4 px-md-5" style={{ minHeight: '100vh', background: '#F8FAFC' }}>

        {/* Quick Categories */}
        <Row className="py-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fw-bold fs-5 mb-0">Quick Categories</h2>
            </div>
            <div className="d-flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  onClick={() => { setSelectedCategory(category); setVisibleCount(8); }}
                  style={{
                    backgroundColor: selectedCategory === category ? '#E0E000' : 'white',
                    borderColor:     selectedCategory === category ? '#E0E000' : '#e0e0e0',
                    color:           '#0F172A',
                    fontWeight:      selectedCategory === category ? 600 : 500,
                    borderRadius:    '4px',
                    transition:      'all 0.2s ease'
                  }}
                >
                  {category === 'All' && <BsGrid className="me-1" />}
                  {category}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Recently Added */}
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fw-bold fs-5 mb-0">Recently Added</h2>
              <Form.Select
                size="sm"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                style={{ width: 'auto', borderColor: '#e0e0e0', borderRadius: '4px' }}
              >
                <option value="newest">Newest First</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </Form.Select>
            </div>

            {isLoading ? (
              <div className="text-center py-5 text-muted">Loading listings...</div>
            ) : visible.length === 0 ? (
              <div className="text-center py-5 text-muted">
                No listings found. Be the first to{' '}
                <span
                  className="fw-semibold"
                  style={{ color: '#E0E000', cursor: 'pointer' }}
                  onClick={() => navigate('/listings/create')}
                >
                  sell something!
                </span>
              </div>
            ) : (
              <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
                {visible.map((listing) => (
                  <Col key={listing.id}>
                    <ProductCard product={listing} savedItems={savedItems} />
                  </Col>
                ))}
              </Row>
            )}

            {hasMore && (
              <div className="d-flex justify-content-center py-4">
                <Button
                  variant="outline-secondary"
                  onClick={() => setVisibleCount(v => v + 8)}
                  style={{ borderRadius: '4px', fontWeight: 600, borderColor: '#e0e0e0' }}
                >
                  Load More Items
                </Button>
              </div>
            )}
          </Col>
        </Row>

      </Container>

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

export default Marketplace
