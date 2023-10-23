import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <header>
            <Navbar id="navbar">
                <Container>
                    <Navbar.Brand href="#home">MyAnimeList</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Animes</Nav.Link>
                        <Nav.Link href="#features">Mangás</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header