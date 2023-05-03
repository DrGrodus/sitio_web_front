import React, {useState} from "react";
import ContactoServicio from "../services/ContactoServicio";
import {Button, Form} from "react-bootstrap";
import "../Componentes/styles.css"

const Contacto = () => {

    const [contacto, setContacto] = useState({
        id: "",
        nombrePersona: "",
        email: "",
        numeroTel: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setContacto({...contacto, [e.target.name]: value});
    };

    const saveContacto = (e) => {
        e.preventDefault();
        ContactoServicio.saveContacto(contacto).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
        alert("Tu mensaje ha sido enviado, te enviaremos una respuesta a la brevedad");
    };

    const reset = (e) => {
        e.preventDefault();
        setContacto({
            id: "",
            nombrePersona: "",
            email: "",
            numeroTel: "",
            mensaje: ""
        });
    };

    return (
        <Form id="FormContacto">
            <Form.Group className="mb-2">
                <Form.Label>Como contactarnos</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="label">Nombre</Form.Label>
                <Form.Control id="campoNombre"
                              name="nombrePersona"
                              type="text"
                              onChange={(e) => handleChange(e)}
                              placeholder="Escribe tu nombre"
                              value={contacto.nombrePersona}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="label">Correo electrónico de contacto</Form.Label>
                <Form.Control id="campoEmail"
                              type="email"
                              name="email"
                              value={contacto.email}
                              onChange={(e) => handleChange(e)}
                              placeholder="Escribe un correo de contacto"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="label">Número de teléfono</Form.Label>
                <Form.Control id="campoTel"
                              type="tel"
                              name="numeroTel"
                              value={contacto.numeroTel}
                              onChange={(e) => handleChange(e)}
                              placeholder="Escribe tu número de teléfono"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Dejanos un mensaje</Form.Label>
                <Form.Control id="campoMsg"
                              name="mensaje"
                              as="textarea"
                              value={contacto.mensaje}
                              onChange={(e) => handleChange(e)}
                              placeholder="Escríbenos tu mensaje"/>
            </Form.Group>

            <center>
                <Button variant="primary" type="submit" className="botonContacto"
                        onClick={saveContacto}>
                    Enviar
                </Button>
                <Button variant="danger" type="reset" className="botonesAcc"
                        onClick={reset}>
                    Limpiar
                </Button>
            </center>
        </Form>
    );
}

export default Contacto;