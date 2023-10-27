import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './lista.css';
import Cartao from './Cartao';
import { Col, Row, Pagination } from 'react-bootstrap';

const Lista = ({ data, onPageChange }) => {
    return (
        <div>
            <div className='cardlist'>
                <Row xs={5} className="g-4">
                    {data.data.map((anime, idx) => (
                        <Col key={idx}>
                            <Cartao anime={anime.node} onPageChange={onPageChange} />
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="paginationDiv">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>
    )
}

export default Lista
