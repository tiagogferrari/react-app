import React from "react";
import './navegacao.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navegacao = ({ onPageChange }) => {
    return (
        <div className="divNav">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#" onClick={() => onPageChange('home')}>MyAnimeList</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => onPageChange('animes')}>Animes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navegacao