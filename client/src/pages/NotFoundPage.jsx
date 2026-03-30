import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import AppNavbar from '../components/AppNavbar'
import LegalLinks from '../components/LegalLinks'

export default function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <>
            <AppNavbar bg="#FFFFFF" border={true} />

            <div
                className="d-flex flex-column align-items-center justify-content-center text-center"
                style={{ minHeight: 'calc(100vh - 70px)', background: '#F8FAFC', padding: '2rem' }}
            >
                <div
                    className="fw-black mb-3"
                    style={{ fontSize: '8rem', lineHeight: 1, color: '#E0E000', fontWeight: 900 }}
                >
                    404
                </div>

                <h1 className="fw-bold mb-2" style={{ fontSize: '1.75rem', color: '#0F172A' }}>
                    Page Not Found
                </h1>

                <p className="text-muted mb-4" style={{ maxWidth: 400, fontSize: '1rem' }}>
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="d-flex gap-3 flex-wrap justify-content-center">
                    <Button
                        onClick={() => navigate(-1)}
                        variant="outline-secondary"
                        style={{ borderRadius: '8px', borderColor: '#e0e0e0', fontWeight: 600 }}
                    >
                        Go Back
                    </Button>
                    <Button
                        onClick={() => navigate('/marketplace')}
                        className="border-0 fw-bold"
                        style={{ backgroundColor: '#E0E000', color: '#0F172A', borderRadius: '8px' }}
                    >
                        Browse Marketplace
                    </Button>
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