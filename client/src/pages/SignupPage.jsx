import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, Nav } from "react-bootstrap";
import { BsLock, BsEye, BsEyeSlash } from "react-icons/bs";
import AppNavbar from "../components/AppNavbar";
import FormInput from "../components/FormInput";
import useForm from "../hooks/useForm";
import { registerUser } from "../services/api";
import useAuth from "../hooks/useAuth";

function SignupPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const validate = (values) => {
        const newErrors = {};
        if (!values.fullName.trim()) newErrors.fullName = "Full name is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.email) newErrors.email = "Email is required";
        else if (!emailRegex.test(values.email)) newErrors.email = "Enter a valid email address";
        else if (!values.email.toLowerCase().endsWith("@st.knust.edu.gh")) newErrors.email = "Use your student email";
        if (!values.password) newErrors.password = "Password is required";
        else if (values.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (!values.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
        else if (values.confirmPassword !== values.password) newErrors.confirmPassword = "Passwords do not match";
        if (!values.agreedToTerms) newErrors.agreedToTerms = "You must agree to continue";
        return newErrors;
    };

    const { values, errors, handleChange, handleSubmit } = useForm({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreedToTerms: false
    }, validate);

    const onSubmit = async (values) => {
        setLoading(true);
        setError("");
        try {
            const data = await registerUser(values.fullName, values.email, values.password);
            await login(data.token)
            navigate("/marketplace");
        } catch (err) {
            setError(err.message || "Registration failed");
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
                                <h2 className="fw-bold mt-3">Create Account</h2>
                                <p className="text-muted small">
                                    Join the campus marketplace and start trading.
                                </p>
                            </div>

                            <Form onSubmit={handleSubmit(onSubmit)}>

                                <FormInput
                                    name="fullName"
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    value={values.fullName}
                                    onChange={handleChange("fullName")}
                                    error={errors.fullName}
                                    required
                                />

                                <FormInput
                                    name="email"
                                    label="Student Email"
                                    placeholder="username@st.knust.edu.gh"
                                    value={values.email}
                                    onChange={handleChange("email")}
                                    error={errors.email}
                                    leftIcon="@"
                                    required
                                />

                                <FormInput
                                    name="password"
                                    label="Password"
                                    placeholder="Create a password"
                                    type={showPassword ? "text" : "password"}
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
                                />

                                <FormInput
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    placeholder="Confirm your password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={values.confirmPassword}
                                    onChange={handleChange("confirmPassword")}
                                    error={errors.confirmPassword}
                                    leftIcon={<BsLock />}
                                    rightElement={
                                        <Button
                                            type="button"
                                            variant="link"
                                            className="p-0"
                                            onClick={() => setShowConfirmPassword(v => !v)}
                                            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                        >
                                            {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                                        </Button>
                                    }
                                />

                                <Form.Check
                                    type="checkbox"
                                    label="I agree to the Terms of Service and Privacy Policy"
                                    className="my-3"
                                    checked={values.agreedToTerms}
                                    onChange={handleChange("agreedToTerms")}
                                    isInvalid={!!errors.agreedToTerms}
                                />

                                {errors.agreedToTerms && (
                                    <div className="text-danger small mt-1">
                                        {errors.agreedToTerms}
                                    </div>
                                )}

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
                                    disabled={loading}
                                >
                                    {loading ? "Creating account..." : "Create Account"}
                                </Button>
                            </Form>

                            <div className="d-flex align-items-center my-4">
                                <hr className="flex-grow-1" />
                                <span className="mx-2 small text-muted">OR CONTINUE WITH</span>
                                <hr className="flex-grow-1" />
                            </div>

                            <Button variant="light" className="w-100 border">
                                Google
                            </Button>

                            <p className="text-center small mt-4">
                                Already have an account?{" "}
                                <Link to="/login" className="fw-semibold text-decoration-none" style={{ color: "#E0E000" }}>
                                    Log In
                                </Link>
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <footer style={{ background: "#FFFFFF", borderTop: "1px solid #F1F5F9", padding: "1.5rem 1rem" }}>
                <Container fluid className="d-flex flex-column align-items-center" style={{ width: "100%", maxWidth: "440px" }}>
                    <div className="text-dark text-center mb-2" style={{ fontSize: "0.875rem", lineHeight: 1.4 }}>
                        &copy; {new Date().getFullYear()} TradeX. Student verification required for all listings.
                    </div>
                    <Nav className="d-flex gap-3 justify-content-center flex-wrap">
                        <Nav.Link as={Link} to="/privacy" className="text-dark small" style={{ textDecoration: "underline" }}>Privacy Policy</Nav.Link>
                        <Nav.Link as={Link} to="/terms" className="text-dark small" style={{ textDecoration: "underline" }}>Terms of Service</Nav.Link>
                    </Nav>
                </Container>
            </footer>
        </>
    );
}

export default SignupPage;