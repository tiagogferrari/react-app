import React from "react";
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {

    return (
        <Container fluid style={{
            backgroundImage: `url("https://c.wallhere.com/photos/5f/7c/Son_Goku_Monkey_D_Luffy_Uzumaki_Naruto_Gon_Freecss_Dragneel_Natsu_Elric_Edward_Kurosaki_Ichigo_Toriko-1394185.jpg!d")`,
            backgroundSize: 'cover',
            height: '100vh',
            width: '100%'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

export default Home