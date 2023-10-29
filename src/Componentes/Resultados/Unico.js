import React from "react";
import './unico.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Image, Card, Button } from 'react-bootstrap';

const Unico = ({ info, onPageChange }) => {

    const titulo = info.title;
    const urlImagem = info.main_picture.large;
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
    const duracaoEp = Math.floor(info.average_episode_duration / 60);

    const sinopse = info.synopsis.length > 850
        ? `${info.synopsis.substring(0, 850)}...`
        : info.synopsis;

    const voltar = (event) => {
        event.preventDefault();
        onPageChange('busca');
    }

return (
    <Container className="containerAnime">
        <Col xs lg="5" className="imgCol">
            <Image src={urlImagem} alt={titulo} className="imgUnica" />
        </Col>
        <Col xs lg="5" className="infoCol">
            <Card className="descAnime" style={{ width: '100%', height: '100%' }}>
                <Card.Body className="cardBody">
                    <Card.Title className="card-title">{titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" id="card-subtitle">Nota: {nota}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" id="card-subtitle">Status: {status}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" id="card-subtitle">Classificação: {rating}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" id="card-subtitle">Ranking: {ranking}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" id="card-subtitle">Popularidade: #{popularidade}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" id="card-subtitle">Tipo: {tipo}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" id="card-subtitle">Episódios: {episodios}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" id="card-subtitle">Tipo: {source}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" id="card-subtitle">Duração: {duracaoEp} min. por ep.</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" id="card-subtitle">Genero: {generosString}</Card.Subtitle>
                    <Card.Text>Sinopse: {sinopse}</Card.Text>
                    <Button variant="primary" className="botaoVoltar" onClick={voltar}>Voltar para a lista</Button>
                </Card.Body>
            </Card>
        </Col>
    </Container>
)
}

export default Unico;