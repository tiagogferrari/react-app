import React from "react";
import './unico.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Image, Card, Button } from 'react-bootstrap';

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
        <Container className="containerAnime">
            <Col xs lg="5" className="imgCol">
                <Image src={urlImagem} alt={titulo} className="imgUnica" />
            </Col>
            <Col xs lg="6" className="infoCol">
                <Card className="descAnime" style={{ width: '100%', height: '100%' }}>
                    <Card.Body className="cardBody">
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
                        <Button variant="primary">Caralho</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}

export default Unico;