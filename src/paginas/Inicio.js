import {Button, Card, Col, Row} from "react-bootstrap";
import Tel1 from "../img/TelUno.jpg";
import Tel2 from "../img/TelDos.jpg"
import Tel3 from "../img/TelTres.jpg"
import Tel4 from "../img/TelCuatro.jpg"
import Tel5 from "../img/TelCinco.jpg"
import Tel6 from "../img/TelSeis.jpg"
import "../Componentes/styles.css"

export default function Inicio() {
    return (
        <>
            <h1>Pagina Principal</h1>
            <div className="tienda" id="tienda">
                <Row xs={2} md={3} lg={3} style={{padding: "10%"}}>
                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={Tel1}
                                bsPrefix="fotosInicio"
                                alt="Primer producto tarjeta"/>
                            <Card.Body>
                                <Card.Title>Titulo de tarjeta</Card.Title>
                                <Card.Text>Texto de ejemplo</Card.Text>
                                <div className="botonesInicio">
                                    <Button variant="primary">Ver más</Button>
                                    <Button variant="secondary">Agregar al carrito</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={Tel2}
                                bsPrefix="fotosInicio"
                                alt="Segundo producto tarjeta"/>
                            <Card.Body>
                                <Card.Title>Titulo de tarjeta</Card.Title>
                                <Card.Text>Texto de ejemplo</Card.Text>
                                <div className="botonesInicio">
                                    <Button variant="primary">Ver más</Button>
                                    <Button variant="secondary">Agregar al carrito</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={Tel3}
                                bsPrefix="fotosInicio"
                                alt="Tercer producto tarjeta"/>
                            <Card.Body>
                                <Card.Title>Titulo de tarjeta</Card.Title>
                                <Card.Text>Texto de ejemplo</Card.Text>
                                <div className="botonesInicio">
                                    <Button variant="primary">Ver más</Button>
                                    <Button variant="secondary">Agregar al carrito</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    );
}
