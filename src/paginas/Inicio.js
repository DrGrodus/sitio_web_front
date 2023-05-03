import {Carousel} from "react-bootstrap";
import Tel1 from "../img/TelefonoUno.jpg";
import Tel2 from "../img/TelefonoDos.jpg"
import Tel3 from "../img/TelefonoTres.jpg"
import "../Componentes/styles.css"

export default function Inicio(){
    return (
        <>
            <h1>Pagina Principal</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="fotosInicio"
                        src={Tel1}
                        alt="Primer producto"
                    />
                    <Carousel.Caption className="Caption">
                        <h3>Primer producto</h3>
                        <p>Este es el primer producto</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="fotosInicio"
                        src={Tel2}
                        alt="Segundo producto"
                    />
                    <Carousel.Caption className="Caption">
                        <h3>Segundo producto</h3>
                        <p>Este es el segundo producto</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="fotosInicio"
                        src={Tel3}
                        alt="Tercer producto"
                    />
                    <Carousel.Caption className="Caption">
                        <h3>Tercer producto</h3>
                        <p>Este es el tercer producto</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
