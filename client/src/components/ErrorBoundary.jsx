import { Component } from "react";
import { BsExclamationTriangle } from "react-icons/bs";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught:', error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    className="d-flex flex-column align-items-center justify-content-center text-center"
                    style={{ minHeight: '100vh', background: '#F8FAFC', padding: '2rem' }}
                >
                    <div
                        className="d-flex align-items-center justify-content-center rounded-circle mb-4"
                        style={{ width: 80, height: 80, backgroundColor: '#FEF9C3' }}
                    >
                        <BsExclamationTriangle size={36} color="#EAB308" />
                    </div>

                    <h2 className="fw-bold mb-2" style={{ color: '#0F172A' }} >
                        Something went wrong
                    </h2>

                    <p className="text-muted mb-4" style={{ maxWidth: 400 }}>
                        An unexpected error occured. Please try refreshing the page.
                    </p>

                    <div className="d-flex gap-3">
                        <button
                            onClick={() => window.location.reload()}
                            className="btn fw-bold border-0"
                            style={{ backgroundColor: '#E0E000', color: '#0F172A', borderRadius: '8px' }}
                        >
                            Refresh Page
                        </button>
                        <button
                            onClick={() => {
                                this.setState({ hasError: false, error: null })
                                window.location.href = '/'
                            }}
                            className="btn btn-outline-secondary fw-semibold"
                            style={{ borderRadius: '8px', borderColor: '#E0E000' }}
                        >
                            Go Home
                        </button>
                    </div>

                    {import.meta.env.DEV && this.state.error && (
                        <pre
                            className="mt-4 text-start text-danger small"
                            style={{
                                maxWidth: 600,
                                overflow: 'auto',
                                background: '#FEE2E2',
                                padding: '1rem',
                                borderRadius: '8px'
                            }}
                        >
                            {this.state.error.toString()}
                        </pre>
                    )}
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary;