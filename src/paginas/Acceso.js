import React, {useState} from "react";
import UsuarioServicio from "../services/UsuarioServicio";
import {Button, Form} from "react-bootstrap";
import "../Componentes/styles.css"

const Acceso = () => {

    const [usuario, setUsuario] = useState({
        id: "",
        nombreUsuario: "",
        email: "",
        contrasena: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUsuario({...usuario, [e.target.name]: value});
    };

    const saveUsuario = (e) => {
        e.preventDefault();
        UsuarioServicio.saveUsuario(usuario).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
        alert("El usuario se ha registrado!");
    };

    const reset = (e) => {
        e.preventDefault();
        setUsuario({
            id: "",
            nombreUsuario: "",
            email: "",
            contrasena: ""
        });
    };


    return (
        <Form id={"FormAcceso"}>
            <Form.Group className="mb-2">
                <Form.Label>Registrar usuario</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="label">Nombre de usuario</Form.Label>
                <Form.Control id="campoUsuario"
                              name="nombreUsuario"
                              type="text"
                              onChange={(e) => handleChange(e)}
                              placeholder="Escribe tu nombre de usuario"
                              value={usuario.nombreUsuario}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="label">Correo electrónico</Form.Label>
                <Form.Control id="campoEmail"
                              type="email"
                              name="email"
                              value={usuario.email}
                              onChange={(e) => handleChange(e)}
                              placeholder="Escribe tu correo electrónico"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="label">Contraseña</Form.Label>
                <Form.Control id="campoPass"
                              type="password"
                              name="contrasena"
                              value={usuario.contrasena}
                              onChange={(e) => handleChange(e)}
                              placeholder="Escribe tu contraseña"/>
            </Form.Group>

            <center>
                <Button variant="primary" type="submit" className="botonesAcc"
                        onClick={saveUsuario}>
                    Registrarse
                </Button>
                <Button variant="danger" type="reset" className="botonesAcc"
                        onClick={reset}>
                    Limpiar
                </Button>
            </center>
        </Form>
    );
}

export default Acceso;