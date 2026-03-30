import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";

export default function StaticInfoPage({ title, children }) {
    return (
        <>
            <AppNavbar
                bg="#FFFFFF"
                border
                rightLinks={[
                    { label: "Home", to: "/" },
                    { label: "Log In", to: "/login" },
                ]}
            />
            <Container className="py-5 px-4" style={{ maxWidth: 720 }}>
                <h1 className="fw-bold mb-4">{title}</h1>
                <div className="text-dark" style={{ lineHeight: 1.75 }}>
                    {children}
                </div>
                <p className="mt-4">
                    <Link to="/">← Back to home</Link>
                </p>
            </Container>
        </>
    );
}
