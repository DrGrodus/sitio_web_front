import {Button, Card, Col, Row} from "react-bootstrap";
import {useState} from "react";
import {items} from '../Productos.js'
import "../Componentes/styles.css";
import TarjetaProducto from "../Componentes/TarjetaProducto.js"

export default function Inicio() {

    //const [contador, setContador] = useState(0);
    //const [carrito, setCarrito] = useState[{id: "",}];

    
    const listItems = items.map((producto, indice) =>
        <Col key={indice}>
            <Card>
                <Card.Img
                    variant="top"
                    src={producto.img}
                    bsPrefix="fotosInicio"
                />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.desc}</Card.Text>
                    <Card.Text>${producto.precio}</Card.Text>
                </Card.Body>
                <div className="botonesInicio">
                    <Button variant="primary">Ver más</Button>
                    <Button variant="secondary">Agregar al carrito</Button>
                </div>
            </Card>
        </Col>
    );


    return (
        <>
            <h1>Pagina Principal</h1>
            <div className="tienda" id="tienda">
                <Row xs={2} md={3} lg={4}>
                    {items.map((producto, indice) => (
                        <Col key={indice}>
                            <TarjetaProducto producto={producto} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );

}
