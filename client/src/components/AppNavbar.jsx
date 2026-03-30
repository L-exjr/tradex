import { useState } from "react";
import { Navbar, Container, Nav, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import logo from "../assets/logo.png";

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

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchQuery);
        }
    };

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
                    {/* Search Bar */}
                    {showSearch && (
                        <Form
                            onSubmit={handleSearch}
                            className="mx-auto d-none d-lg-flex"
                            style={{ width: '100%', maxWidth: '400px' }}
                        >
                            <InputGroup>
                                <InputGroup.Text
                                    style={{
                                        backgroundColor: '#F8FAFC',
                                        borderColor: '#E2E8F0',
                                        borderRight: 'none'
                                    }}
                                >
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
                                <Nav.Link
                                    as={Link}
                                    to={link.to}
                                    key={link.to}
                                    onClick={() => setExpanded(false)}
                                >
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
                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: '#F8FAFC',
                                            borderColor: '#E2E8F0',
                                            borderRight: 'none'
                                        }}
                                    >
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
                            <Nav.Link
                                as={Link}
                                to={link.to}
                                key={link.to}
                                onClick={() => setExpanded(false)}
                            >
                                {link.label}
                            </Nav.Link>
                        ))}
                    </div>

                    {/* Right Links — desktop */}
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
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;