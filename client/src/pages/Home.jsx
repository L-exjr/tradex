import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Nav } from "react-bootstrap";
import { BsArrowRight, BsLightningCharge, BsShieldCheck, BsWallet, } from "react-icons/bs";
import logo from "../assets/logo.png";
import AppNavbar from "../components/AppNavbar";

function Home() {

    return (
        <>
            <AppNavbar centerLinks={[
                { label: "Campus Safety", to: "/campus-safety" },
                { label: "Help", to: "/help" },
            ]} rightLinks={[
                { label: "Log In", to: "/login" },
                {
                    label: "Join Community", to: "/signup", className: "text-white rounded-pill px-3 fw-bold", style: { backgroundColor: "#111111" }
                }
            ]} bg="transparent" />
            <Container fluid className="py-4 mx-2" style={{ background: "#F4F7E8", minHeight: "100vh" }}>

                <Row className="justify-content-center text-center mb-4">
                    <Col md="auto">
                        <img src={logo} alt="Logo" className="img-fluid hero-logo" />

                        <p className="text-muted mt-3 fs-3">
                            The next-gen marketplace built exclusively
                            <br />
                            for the campus community.
                        </p>

                        <div className="d-flex justify-content-center gap-2 flex-wrap mt-3">
                            <Button as={Link} to="/login" variant="dark" size="lg" style={{ width: "220px", borderRadius: "16px" }}>
                                Get Started <BsArrowRight size={16} className="ms-2" />
                            </Button>

                            <Button as={Link} to="/marketplace" variant="light" size="lg" style={{ width: "220px", borderRadius: "16px" }}>
                                Browse Listings
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center g-5">

                    <Col md="auto">
                        <Card className="text-center h-100 mx-auto glass-card" style={{ maxWidth: "300px" }}>
                            <Card.Body>
                                <BsLightningCharge size={32} className="mb-3" />
                                <Card.Title className="fw-bold">Instant Trades</Card.Title>
                                <Card.Text className="text-muted">
                                    Buy or sell items in your dorm within minutes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md="auto">
                        <Card className="text-center h-100 mx-auto glass-card" style={{ maxWidth: "300px" }}>
                            <Card.Body>
                                <BsShieldCheck size={32} className="mb-3" />
                                <Card.Title className="fw-bold">Student Verified</Card.Title>
                                <Card.Text className="text-muted">
                                    Restricted to users with valid university emails.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md="auto">
                        <Card className="text-center h-100 mx-auto glass-card" style={{ maxWidth: "300px" }}>
                            <Card.Body>
                                <BsWallet size={32} className="mb-3" />
                                <Card.Title className="fw-bold">Secure Pay</Card.Title>
                                <Card.Text className="text-muted">
                                    Integrated fintech security for all payments.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

            <footer style={{ background: "#F4F7E8", padding: "1.5rem 0" }}>
                <Container fluid className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 gap-lg-0">

                    <Nav className="d-flex gap-3 flex-wrap align-items-center">
                        <Nav.Link as={Link} to="/privacy" className="text-dark">Privacy</Nav.Link>
                        <Nav.Link as={Link} to="/terms" className="text-dark">Terms</Nav.Link>
                        <Nav.Link as={Link} to="/cookies" className="text-dark">Cookies</Nav.Link>
                    </Nav>

                    <div className="text-center text-dark flex-lg-grow-1 d-flex justify-content-center">
                        &copy; {new Date().getFullYear()} TradeX. DESIGNED FOR THE FUTURE.
                    </div>

                </Container>
            </footer>

        </>
    );
}

export default Home;