import React, { useContext, useState } from "react";
import './home.css';
import { Form, Button, Container } from 'react-bootstrap';
import { SearchContext } from "../Componentes/Search/search";

const Home = () => {
    const busca = useContext(SearchContext);
    const [input, setInput] = useState('');

    const pesquisar = (event) => {
        event.preventDefault();
        busca.search(input).then((data) => {
            console.log(data)
            busca.setInfo(data.data);
            //localStorage.setItem('myData', JSON.stringify(data.results))
            window.location.href = '/Busca';
        })

    }

    return (
        <Container fluid className="home-container">
            <div className="home-inner">
                <Form className="home-form" onSubmit={pesquisar}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Search for your favorite anime..."
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            className="home-input"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!input}>
                        Search
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default Home