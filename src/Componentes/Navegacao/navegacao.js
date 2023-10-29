import React from "react";
import './navegacao.css';
import { Navbar, Container } from 'react-bootstrap';

//Barra de navegação
const Navegacao = ({ onPageChange }) => {
    return (
        <div className="divNav">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#" onClick={() => onPageChange('home')}>MyAnimeList</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navegacao