import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './lista.css';
import Cartao from './Cartao';
import { Col, Row } from 'react-bootstrap';

const Lista = (props) => {
    return (
        <div className='cardlist'>
            <Row xs={5} className="g-4">
                {props.data.map((anime, idx) => (
                    <Col key={idx}>
                        <Cartao key={anime.anime_id} anime={anime}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Lista