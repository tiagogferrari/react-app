import React from "react";
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';

const Unico = ({ info }) => {

    const titulo = info.title;
    const urlImagem = info.main_picture.large;
    const sinopse = info.synopsis;
    const nota = info.mean;
    const status = info.status;
    const rating = info.rating;
    const ranking = info.rank;
    const popularidade = info.popularity;
    const tipo = info.media_type;
    const generos = info.genres;
    const generosString = generos.map(genero => genero.name).join(', ')
    const episodios = info.num_episodes;
    const source = info.source;
    const duracaoEp = (info.average_episode_duration / 60);

    return (
        <Container className="singleanime__container d-flex justify-content-center">
            <Row className="align-items-center">
                <Col xs lg="2">
                    <Image src={urlImagem} alt={titulo} className="singleanime__image" />
                </Col>
                <Col md="auto">
                    <Card className="singleanime__description" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{titulo}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Nota: {nota}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Status: {status}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Classificação: {rating}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Ranking: {ranking}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Popularidade: #{popularidade}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Tipo: {tipo}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Episódios: {episodios}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Tipo: {source}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Duração: {duracaoEp} min. por ep.</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Genero: {generosString}</Card.Subtitle>
                            <Button variant="primary">My Anime List</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Unico;