import {Container, Nav, Navbar} from "react-bootstrap";
import SearchForm from "../containers/SearchForm";




export function MovieNavbar() {
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Movie-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href="/seen">Watched movie</Nav.Link>
                    </Nav>
                    <SearchForm />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}