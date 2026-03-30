import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, Nav } from "react-bootstrap";
import { BsLock, BsEye, BsEyeSlash, BsPersonCircle } from "react-icons/bs";
import AppNavbar from "../components/AppNavbar";
import FormInput from "../components/FormInput";
import useForm from "../hooks/useForm";
import { loginUser } from "../services/api";
import useAuth from "../hooks/useAuth";
function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const location = useLocation()
    const from = location.state?.from?.pathname || '/marketplace'


    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.email) errors.email = "Email is required";
        else if (!emailRegex.test(values.email)) errors.email = "Enter a valid email";
        else if (!values.email.endsWith("@st.knust.edu.gh")) errors.email = "Use your student email";
        if (!values.password) errors.password = "Password is required";
        return errors;
    };

    const { values, errors, handleChange, handleSubmit } = useForm(
        { email: "", password: "" },
        validate
    );

    const onSubmit = async (values) => {
        setLoading(true);
        setError("");
        try {
            const data = await loginUser(values.email, values.password);
            await login(data.token);
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <AppNavbar
                bg="#FFFFFF"
                border={true}
                rightLinks={[
                    { label: "Marketplace", to: "/marketplace" },
                    { label: "Support", to: "/support" },
                    {
                        label: "Sign Up",
                        to: "/signup",
                        className: "round-pill px-4 fw-bold",
                        style: { border: "1px solid #E2E8F0" }
                    }
                ]}
            />

            <Container
                fluid
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh", background: "#F8FAFC" }}
            >
                <Row className="w-100 justify-content-center">
                    <Col xs={12} sm={10} md={6} lg={4} style={{ maxWidth: "440px" }}>
                        <Card className="p-4 border-0 shadow-sm">

                            <div className="text-center mb-4">
                                <BsPersonCircle size={28} />
                                <h2 className="fw-bold mt-3">Welcome!</h2>
                                <p className="text-muted small">
                                    Enter your credentials to access your student account
                                </p>
                            </div>

                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <FormInput 
                                    name="email"
                                    label="Student Email"
                                    placeholder="username@st.knust.edu.gh"
                                    value={values.email}
                                    onChange= {handleChange("email")}
                                    error={errors.email}
                                    leftIcon="@"
                                    required
                                />

                                <FormInput
                                    name="password"
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    error={errors.password}
                                    leftIcon={<BsLock />}
                                    rightElement={
                                        <Button
                                            type="button"
                                            variant="link"
                                            className="p-0"
                                            onClick={() => setShowPassword(v => !v)}
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            {showPassword ? <BsEyeSlash /> : <BsEye />}
                                        </Button>
                                    }
                                    required
                                />

                                <div className="text-end mb-2">
                                    <Link
                                        to="/forgot-password"
                                        className="small text-decoration-none"
                                        style={{ color: "#E0E000" }}
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                                {error && (
                                    <div className="text-danger small mb-2 text-center">{error}</div>
                                )}

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-100 rounded-3 border-0"
                                    style={{
                                        color: "#0F172A",
                                        backgroundColor: "#E0E000"
                                    }}
                                >
                                    {loading ? "Logging in..." : "Get Started"}
                                </Button>

                            </Form>

                            <div className="d-flex align-items-center my-4">
                                <hr className="flex-grow-1" />
                                <span className="mx-2 small text-muted">OR CONTINUE WITH</span>
                                <hr className="flex-grow-1" />
                            </div>

                            <Button variant="light" className="w-100 border" disabled title="Not available yet">
                                Google
                            </Button>

                            <p className="text-center small mt-4">
                                New to TradeX?{" "}
                                <Link to="/signup" className="fw-semibold text-decoration-none" style={{ color: "#E0E000" }}>
                                    Create an account
                                </Link>
                            </p>

                        </Card>
                    </Col>
                </Row>
            </Container>

            <footer
                style={{
                    background: "#FFFFFF",
                    borderTop: "1px solid #f1F5F9",
                    padding: "1.5rem 1rem",
                }}
            >
                <Container
                    fluid
                    className="d-flex flex-column align-items-center"
                    style={{ width: "100%", maxWidth: "440px"}}
                >
                    <div
                        className="text-dark text-center mb-2"
                        style={{
                            fontSize: "0.875rem",
                            lineHeight: 1.4,
                            width: "100%",
                        }}
                    >
                        &copy; {new Date().getFullYear()} TradeX. Student verification required for all listings.
                    </div>

                    <Nav className="d-flex gap-3 justify-content-center flex-wrap">
                        <Nav.Link as={Link} to="/privacy" className="text-dark small" style={{ textDecoration: "underline" }}>
                            Privacy Policy
                        </Nav.Link>
                        <Nav.Link as={Link} to="/terms" className="text-dark small" style={{ textDecoration: "underline" }}>
                            Terms of Service
                        </Nav.Link>
                    </Nav>
                </Container>
            </footer>
        </>
    );
}

export default LoginPage;