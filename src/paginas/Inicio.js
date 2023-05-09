import {Button, Card, Col, Row} from "react-bootstrap";
import {useState} from "react";
import Tel1 from "../img/TelUno.jpg";
import Tel2 from "../img/TelDos.jpg"
import Tel3 from "../img/TelTres.jpg"
import Tel4 from "../img/TelCuatro.jpg"
import Tel5 from "../img/TelCinco.jpg"
import Tel6 from "../img/TelSeis.jpg"
import "../Componentes/styles.css"

export default function Inicio() {

    //const [contador, setContador] = useState(0);
    //const [carrito, setCarrito] = useState[{id: "",}];

    const items = [
        {
            id: 1,
            nombre: "Teléfono 1",
            precio: 100,
            desc: "Este es el teléfono 1",
            img: Tel1
        },
        {
            id: 2,
            nombre: "Teléfono 2",
            precio: 150,
            desc: "Este es el teléfono 2",
            img: Tel2
        },
        {
            id: 3,
            nombre: "Teléfono 3",
            precio: 45,
            desc: "Este es el teléfono 3",
            img: Tel3
        },
        {
            id: 4,
            nombre: "Teléfono 4",
            precio: 1000,
            desc: "Este es el teléfono 4",
            img: Tel4
        },
        {
            id: 5,
            nombre: "Teléfono 5",
            precio: 120,
            desc: "Este es el teléfono 5",
            img: Tel5
        },
        {
            id: 6,
            nombre: "Teléfono 6",
            precio: 242,
            desc: "Este es el teléfono 6",
            img: Tel6
        }
    ];
    const listItems = items.map(producto =>
        <Col>
            <Card key={producto.id}>
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


    const update = (e) => {
        const value = e.target.value;
        //e.preventDefault();
        console.log("incremento");
    };


    return (
        <>
            <h1>Pagina Principal</h1>
            <div className="tienda" id="tienda">
                <Row xs={2} md={3} lg={4}>
                    {listItems}
                </Row>
            </div>
        </>
    );

}
