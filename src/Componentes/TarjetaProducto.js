import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import {ContextoCarrito} from '../ContextoCarrito.js';
import {useContext} from 'react';
import Detalle from '../paginas/Detalle.js';
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function TarjetaProducto(props) {
    const producto = props.producto;
    const carrito = useContext(ContextoCarrito);
    const cantidadDeProducto = carrito.getCantidadDeProducto(producto.id);

    return (
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
                <div className="botonesInicio">
                    <div hidden={true}>
                        <Detalle productoID={producto}></Detalle>
                    </div>
                    <Button variant="primary" href="/detalles">Ver más</Button>

                    {cantidadDeProducto > 0 ?
                        <>
                            <Form as={Row}>
                                <Form.Label column="true" sm="6">En el carrito: {cantidadDeProducto}</Form.Label>
                                <Col sm="6">
                                    <Button className="mx-7" onClick={() => carrito.addUnoAlCarrito(producto.id)} sm="6">+</Button>
                                    <Button className="mx-10" onClick={() => carrito.removeUnoDelCarrito(producto.id)} sm="6">-</Button>
                                </Col>
                            </Form>
                            <Button className="my-2"  onClick={() => carrito.deleteDelCarrito(producto.id)} variant="danger">Eliminar del carrito</Button>
                        </> :
                        <Button onClick={() => carrito.addUnoAlCarrito(producto.id)} variant="secondary">Agregar al
                            carrito</Button>
                    }
                </div>
            </Card.Body>
        </Card>
    );
}

export default TarjetaProducto;
