import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './lista.css';
import Cartao from './Cartao';
import { Col, Row } from 'react-bootstrap';

const Lista = ({ data, onPageChange }) => {
    return (
        <div className='cardlist'>
            <Row xs={5} className="g-4">
                {data.data.map((anime, idx) => (
                    <Col key={idx}>
                        <Cartao anime={anime.node} onPageChange={onPageChange}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Lista
