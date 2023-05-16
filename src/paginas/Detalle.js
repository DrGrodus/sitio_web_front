import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import {items} from '../Productos.js';
import Tel1 from "../img/TelUno.jpg";
import "../Componentes/styles.css";

export default function Detalle() {

    return (
        <>
            <Row xs={2} md={3} lg={4}>
            <Card>
                <Card.Img
                    variant="top"
                    src={items[0].img}
                    bsPrefix="fotosInicio"
                />
                <Card.Body>
                    <Card.Title>{items[0].nombre}</Card.Title>
                    <Card.Text>{items[0].desc}</Card.Text>
                    <Card.Text>${items[0].precio}</Card.Text>
                    <Button>Agregar al carrito</Button>
                </Card.Body>
            </Card>
            </Row>
        </>
    );
}
