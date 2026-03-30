import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import AppNavbar from "../components/AppNavbar";
import FormInput from "../components/FormInput";
import useForm from "../hooks/useForm";
import { forgotPassword, getAuthPublicConfig } from "../services/api";

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailConfigured, setEmailConfigured] = useState(null);

  useEffect(() => {
    getAuthPublicConfig()
      .then((c) => setEmailConfigured(!!c.forgotPasswordEmailEnabled))
      .catch(() => setEmailConfigured(false));
  }, []);

  const validate = (values) => {
    const newErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      newErrors.email = "Enter a valid email";
    } else if (!values.email.endsWith("@st.knust.edu.gh")) {
      newErrors.email = "Use your student email";
    }
    return newErrors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: "" },
    validate
  );

  const onSubmit = async (values) => {
    setLoading(true);
    setError("");
    try {
      await forgotPassword(values.email);
      setSubmitted(true);
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

              {!submitted ? (
                <>
                  <h4 className="fw-bold mb-3 text-center">Reset Password</h4>
                  <p className="text-muted small text-center mb-4">
                    Enter your student email and we'll send you a reset link.
                  </p>
                  {emailConfigured === false && (
                    <Alert variant="warning" className="small">
                      Password reset by email is not configured on this server yet. You can still submit
                      your email; the server will acknowledge the request, but no message will be sent until mail is enabled.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                      name="email"
                      label="Student Email"
                      placeholder="username@st.knust.edu.gh"
                      value={values.email}
                      onChange={handleChange("email")}
                      error={errors.email}
                      leftIcon="@"
                    />

                    {error && (
                      <div className="text-danger small mb-2 text-center">{error}</div>
                    )}

                    <Button
                      type="submit"
                      className="w-100 mt-3 border-0"
                      style={{ backgroundColor: "#E0E000", color: "#111111" }}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Reset Link"}
                    </Button>
                  </Form>

                  <p className="text-center small mt-4">
                    Remember your password?{" "}
                    <Link to="/login" className="fw-semibold text-decoration-none" style={{ color: "#E0E000" }}>
                      Log In
                    </Link>
                  </p>
                </>
              ) : (
                <div className="text-center">
                  <h5 className="fw-bold">
                    {emailConfigured === false ? "Request recorded" : "Check your email"}
                  </h5>
                  <p className="text-muted small">
                    {emailConfigured === false ? (
                      <>
                        Outbound email is not set up, so no reset link was sent. If you need access,
                        contact your project administrator or use an account you can still sign in with.
                      </>
                    ) : (
                      <>
                        We’ve sent a password reset link to <strong>{values.email}</strong>. Check your inbox
                        and follow the instructions.
                      </>
                    )}
                  </p>
                  <Link to="/login">
                    <Button className="mt-2 border-0" style={{ backgroundColor: "#E0E000", color: "#111111" }}>
                      Back to Login
                    </Button>
                  </Link>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}