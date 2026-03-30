import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
            >
                <div
                    className="spinner-border"
                    style={{ color: "#E0E000" }}
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

    return children;
}

export default ProtectedRoute;