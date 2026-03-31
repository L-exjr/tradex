import { useState } from "react";
import { Navbar, Container, Nav, Form, InputGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";

function AppNavbar({
    centerLinks = [],
    rightLinks = [],
    bg = "transparent",
    border = false,
    showSearch = false,
    searchPlaceholder = "Search...",
    onSearch
}) {
    const [expanded, setExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { user } = useAuth();
    const location = useLocation();

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(searchQuery);
    };

    const shouldHideAvatar =
        location.pathname === "/" ||
        location.pathname.startsWith("/login") ||
        location.pathname.startsWith("/signup") ||
        location.pathname.startsWith("/forgot-password") ||
        location.pathname.startsWith("/reset-password") ||
        location.pathname.startsWith("/profile");

    return (
        <Navbar
            expand="lg"
            expanded={expanded}
            className="px-4"
            style={{
                background: bg,
                borderBottom: border ? "1px solid #E2E8F0" : "none",
            }}
        >
            <Container fluid className="d-flex justify-content-between align-items-center">

                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Logo" style={{ maxHeight: "50px" }} />
                </Navbar.Brand>

                <Navbar.Toggle onClick={() => setExpanded(!expanded)} />

                <Navbar.Collapse>
                    {/* Search Bar — desktop */}
                    {showSearch && (
                        <Form
                            onSubmit={handleSearch}
                            className="mx-auto d-none d-lg-flex"
                            style={{ width: '100%', maxWidth: '400px' }}
                        >
                            <InputGroup>
                                <InputGroup.Text style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0', borderRight: 'none' }}>
                                    <BsSearch size={14} color="#94A3B8" />
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder={searchPlaceholder}
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        if (onSearch) onSearch(e.target.value);
                                    }}
                                    style={{
                                        backgroundColor: '#F8FAFC',
                                        borderColor: '#E2E8F0',
                                        borderLeft: 'none',
                                        fontFamily: 'Lexend, sans-serif',
                                        fontSize: '0.9rem',
                                        boxShadow: 'none'
                                    }}
                                />
                            </InputGroup>
                        </Form>
                    )}

                    {/* Center Links — desktop */}
                    {!showSearch && (
                        <Nav className="mx-auto d-none d-lg-flex gap-3 fw-bold">
                            {centerLinks.map(link => (
                                <Nav.Link as={Link} to={link.to} key={link.to} onClick={() => setExpanded(false)}>
                                    {link.label}
                                </Nav.Link>
                            ))}
                        </Nav>
                    )}

                    {/* Mobile menu */}
                    <div className="d-lg-none d-flex flex-column gap-2 mt-3">
                        {showSearch && (
                            <Form onSubmit={handleSearch}>
                                <InputGroup>
                                    <InputGroup.Text style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0', borderRight: 'none' }}>
                                        <BsSearch size={14} color="#94A3B8" />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder={searchPlaceholder}
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            if (onSearch) onSearch(e.target.value);
                                        }}
                                        style={{
                                            backgroundColor: '#F8FAFC',
                                            borderColor: '#E2E8F0',
                                            borderLeft: 'none',
                                            fontFamily: 'Lexend, sans-serif',
                                            fontSize: '0.9rem',
                                            boxShadow: 'none'
                                        }}
                                    />
                                </InputGroup>
                            </Form>
                        )}
                        {centerLinks.concat(rightLinks).map(link => (
                            <Nav.Link as={Link} to={link.to} key={link.to} onClick={() => setExpanded(false)}>
                                {link.label}
                            </Nav.Link>
                        ))}
                        {/* Mobile profile link */}
                        {user && (
                            <Nav.Link as={Link} to="/profile" onClick={() => setExpanded(false)}>
                                Profile
                            </Nav.Link>
                        )}
                    </div>

                    {/* Right Links + avatar — desktop */}
                    <Nav className="ms-auto d-none d-lg-flex gap-3 align-items-center">
                        {rightLinks.map(link => (
                            <Nav.Link
                                as={Link}
                                to={link.to}
                                key={link.to}
                                className={link.className}
                                style={link.style}
                                onClick={() => setExpanded(false)}
                            >
                                {link.label}
                            </Nav.Link>
                        ))}

                        {/* Avatar — only shown when a user is logged in */}
                        {user && !shouldHideAvatar &&(
                            <Link
                                to="/profile"
                                title={user.name}
                                style={{ textDecoration: 'none', flexShrink: 0 }}
                            >
                                {user.avatarUrl ? (
                                    <img
                                        src={user.avatarUrl}
                                        alt={user.name}
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '2px solid #E2E8F0'
                                        }}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: '50%',
                                            backgroundColor: '#E0E000',
                                            color: '#0F172A',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 800,
                                            fontSize: '0.9rem',
                                            border: '2px solid #E2E8F0'
                                        }}
                                    >
                                        {(user.name?.[0] || "U").toUpperCase()}
                                    </div>
                                )}
                            </Link>
                        )}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
