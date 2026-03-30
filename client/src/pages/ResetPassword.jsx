import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { BsLock, BsEye, BsEyeSlash } from "react-icons/bs";
import AppNavbar from "../components/AppNavbar";
import FormInput from "../components/FormInput";
import useForm from "../hooks/useForm";
import { resetPassword } from "../services/api";

export default function ResetPassword() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const token = searchParams.get("token");

    const validate = (values) => {
        const newErrors = {};
        if (!values.password) newErrors.password = "Password is required";
        else if (values.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (!values.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
        else if (values.confirmPassword !== values.password) newErrors.confirmPassword = "Passwords do not match";
        return newErrors;
    };

    const { values, errors, handleChange, handleSubmit } = useForm(
        { password: "", confirmPassword: "" },
        validate
    );

    const onSubmit = async (values) => {
        setLoading(true);
        setError("");
        try {
            await resetPassword(token, values.password);
            navigate("/login");
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <AppNavbar bg="#FFFFFF" border />

            <Container
                fluid
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh", background: "#F8FAFC" }}
            >
                <Row className="w-100 justify-content-center">
                    <Col xs={12} md={6} lg={4} style={{ maxWidth: "440px" }}>
                        <Card className="p-4 border-0 shadow-sm">
                            <h4 className="fw-bold mb-1 text-center">Set New Password</h4>
                            <p className="text-muted small text-center mb-4">
                                Choose a strong password for your account.
                            </p>

                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <FormInput
                                    name="password"
                                    label="New Password"
                                    placeholder="Enter new password"
                                    type={showPassword ? "text" : "password"}
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    error={errors.password}
                                    leftIcon={<BsLock />}
                                    rightElement={
                                        <Button type="button" variant="link" className="p-0" onClick={() => setShowPassword(v => !v)}>
                                            {showPassword ? <BsEyeSlash /> : <BsEye />}
                                        </Button>
                                    }
                                />

                                <FormInput
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    placeholder="Confirm new password"
                                    type={showConfirm ? "text" : "password"}
                                    value={values.confirmPassword}
                                    onChange={handleChange("confirmPassword")}
                                    error={errors.confirmPassword}
                                    leftIcon={<BsLock />}
                                    rightElement={
                                        <Button type="button" variant="link" className="p-0" onClick={() => setShowConfirm(v => !v)}>
                                            {showConfirm ? <BsEyeSlash /> : <BsEye />}
                                        </Button>
                                    }
                                />

                                {error && (
                                    <div className="text-danger small mb-2 text-center">{error}</div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-100 mt-2 border-0"
                                    size="lg"
                                    style={{ backgroundColor: "#E0E000", color: "#111111" }}
                                    disabled={loading}
                                >
                                    {loading ? "Updating..." : "Update Password"}
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}