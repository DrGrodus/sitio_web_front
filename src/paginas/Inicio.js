import {Col, Row} from "react-bootstrap";
import {items} from '../Productos.js'
import "../Componentes/styles.css";
import TarjetaProducto from "../Componentes/TarjetaProducto.js"

export default function Inicio() {

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
