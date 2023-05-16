import {Button, Card, Row, Col} from "react-bootstrap";
import {ContextoCarrito} from '../ContextoCarrito.js';
import {useContext} from 'react';
import {getInfoDelProducto} from '../Productos.js';

export function TarjetaCarrito(props) {
    const carrito = useContext(ContextoCarrito);
    const id = props.id;
    const cantidad = props.cantidad;
    const infoDeProducto = getInfoDelProducto(id);

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{infoDeProducto.nombre}</Card.Title>
                    <Card.Text>Total: {cantidad}</Card.Text>
                    <Card.Text>${(cantidad * infoDeProducto.precio).toFixed(2)}</Card.Text>
                    <Button size="sm" onClick={() => carrito.deleteDelCarrito(id)}>Eliminar</Button>
                    <hr></hr>
                </Card.Body>
            </Card>
        </>
    );
}
