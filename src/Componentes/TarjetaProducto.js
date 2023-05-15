import {Card, Button} from 'react-bootstrap'

function TarjetaProducto(props) {
    const producto = props.producto;

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
                    <Button variant="primary">Ver más</Button>
                    <Button variant="secondary">Agregar al carrito</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default TarjetaProducto;
