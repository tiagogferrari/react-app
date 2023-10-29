import React, { useContext, useState } from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { SearchContext } from "../Componentes/Search/search";


const Home = ({ onPageChange }) => {
    const search = useContext(SearchContext);
    const [input, setInput] = useState('');

    const pesquisar = (event) => {
        event.preventDefault();
        if (input.length < 3) {
            alert('Insira um termo com pelo menos 3 caracteres.')
        } else {
            search.search(input).then((data) => {
                if (data && data.data && data.data.length > 0) {
                    search.setInfo(data);
                    localStorage.setItem('myInfo', JSON.stringify(data))
                    onPageChange('busca');
                } else {
                    alert('Sua pesquisa não retornou nenhum resultado. Por favor, tente novamente com um termo de pesquisa diferente.');
                }
            })
        }

    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Por favor, insira algo para pesquisar.
        </Tooltip>
    );

    return (
        <Container fluid className="home-container">
            <div className="home-inner">
                <Form className="home-form" id="myForm">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Pesquise seus animes favoritos..."
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            className="home-input"
                            autoComplete="off"
                        />
                    </Form.Group>
                    {!input ? (
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <span className="d-inline-block">
                                <Button variant="primary" className="searchButton" type="submit" disabled={!input} onClick={pesquisar} style={{ pointerEvents: !input ? 'none' : 'auto' }}>
                                    Buscar
                                </Button>
                            </span>
                        </OverlayTrigger>
                    ) : (
                        <Button variant="primary" type="submit" className="searchButton" disabled={!input} onClick={pesquisar}>
                            Buscar
                        </Button>
                    )}
                </Form>
            </div>
        </Container>
    )
}

export default Home