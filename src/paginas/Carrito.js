import {Button} from "react-bootstrap";
import "../Componentes/styles.css";
import {useContext} from "react";
import {ContextoCarrito} from '../ContextoCarrito.js';
import {TarjetaCarrito} from '../Componentes/TarjetaCarrito.js';

export default function Carrito() {
    const carrito = useContext(ContextoCarrito);
    const contadorProductos = carrito.items.reduce((suma, producto) => suma + producto.cantidad, 0);

    const compra = () => {
        carrito.items.map((productoActual, indice) => (
            carrito.deleteDelCarrito(productoActual.id)
        ))
    }

    return (
        <>
            <h1>Carrito</h1>
            {
                contadorProductos > 0 ?
                    <>
                        <p>Estos son tus objetos en el carrito: </p>
                        {carrito.items.map((productoActual, indice) => (
                            <TarjetaCarrito key={indice} id={productoActual.id} cantidad={productoActual.cantidad}></TarjetaCarrito>
                        ))}
                        <h3>Total: ${carrito.getCostoTotal().toFixed(2)}</h3>
                        <Button variant="success" onClick={compra}>
                            Comprar
                        </Button>
                    </>
                    :
                    <h2>Tu carrito esta vacío</h2>
            }
        </>
    );
}
