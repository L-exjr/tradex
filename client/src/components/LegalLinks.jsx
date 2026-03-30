import { Link } from "react-router-dom";

export default function LegalLinks({ className = "text-muted small text-decoration-none" }) {
    return (
        <div className="d-flex gap-3">
            <Link to="/privacy" className={className}>
                Privacy
            </Link>
            <Link to="/terms" className={className}>
                Terms
            </Link>
        </div>
    );
}
