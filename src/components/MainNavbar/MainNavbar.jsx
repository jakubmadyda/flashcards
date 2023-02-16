import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import useLogout from "../../hooks/useLogout";

function MainNavbar() {

    const logout = useLogout();

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="">Azeno Flashcards</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to='/'>
                        <Nav.Link href="#home">Deck</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/flashcards'>
                        <Nav.Link>Flashcards</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/register'>
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                    <Nav.Link href="#pricing">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;