import "./styles.css"
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';
import logo from '../img/iconLogoEmpresa.png'

export default function Navbar() {
    return (
        <nav className="nav">
            <ul id="navbar">
                <Linko to="/nosotros">Acerca de nosotros</Linko>
                <Linko to="/contacto">Contacto</Linko>
                <Linko to="/"><img
                    alt="Logo de la empresa"
                    src={logo}/>
                </Linko>
                <Linko to="/login">
                    <center>
                        <FontAwesomeIcon icon={faUser}/>
                        <p>Iniciar sesión</p>
                    </center>
                </Linko>
                <Linko to="/carrito">
                    <center>
                        <div className="carrito">
                            <FontAwesomeIcon icon={faCartShopping}/>
                            <p>Carrito</p>
                            <p className="cantidadCarrito">0</p>
                        </div>
                    </center>
                </Linko>
            </ul>
        </nav>
    );
}

function Linko({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
