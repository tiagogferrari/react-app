import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './lista.css';
import Cartao from './Cartao';
import { Col, Row, Pagination } from 'react-bootstrap';

const Lista = ({ data, onPageChange }) => {
    const [pagAtual, setPagAtual] = useState(1);
    const [animesPorPag] = useState(10);

    const indiceUltimo = pagAtual * animesPorPag;
    const indicePrimeiro = indiceUltimo - animesPorPag;
    const animesAtual = data.data.slice(indicePrimeiro, indiceUltimo);

    const paginar = numPag => setPagAtual(numPag);

    const paginasTotal = Math.ceil(data.data.length / animesPorPag);

    return (
        <div>
            <div className='cardlist'>
                <Row xs={5} className="g-4">
                    {animesAtual.map((anime, idx) => (
                        <Col key={idx}>
                            <Cartao anime={anime.node} onPageChange={onPageChange} />
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="paginationDiv">
                <Pagination>
                    <Pagination.First onClick={() => paginar(1)}  disabled={pagAtual === 1} />
                    <Pagination.Prev onClick={() => paginar(pagAtual - 1)}  disabled={pagAtual === 1} />
                    {Array(Math.ceil(data.data.length / animesPorPag)).fill().map((_, idx) => (
                        <Pagination.Item key={idx} active={idx + 1 === pagAtual} onClick={() => paginar(idx + 1)}>
                            {idx + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginar(pagAtual + 1)} disabled={pagAtual === paginasTotal} />
                    <Pagination.Last onClick={() => paginar(Math.ceil(data.data.length / animesPorPag))} disabled={pagAtual === paginasTotal} />
                </Pagination>
            </div>
        </div>
    )
}

export default Lista
