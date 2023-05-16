import './App.css';
import Navbar from "./Componentes/Navbar";
import Acceso from "./paginas/Acceso";
import Inicio from "./paginas/Inicio";
import Nosotros from "./paginas/Nosotros";
import Contacto from "./paginas/Contacto";
import Carrito from "./paginas/Carrito";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProveedorCarrito from './ContextoCarrito';

function App() {
    return (
        <>
            <ProveedorCarrito>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/nosotros" element={<Nosotros/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/login" element={<Acceso/>}/>
                    <Route path="/carrito" element={<Carrito/>}/>
                </Routes>
            </div>
            </ProveedorCarrito>
        </>

    );
}

export default App;
