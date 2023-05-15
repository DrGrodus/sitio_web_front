import {createContext, useState} from "react";
import {items} from './Productos';

export const ContextoCarrito = createContext({
    items: [],
    getCantidadDeProducto: () => {
    },
    addUnoAlCarrito: () => {
    },
    quitarUnoDelCarrito: () => {
    },
    borrarDelCarrito: () => {
    },
    getCostoTotal: () => {
    }
});

export function ProveedorCarrito({children}) {
    const [productosCarrito, setProductosCarrito] = useState([]);

    /*function getCantidadDeProducto(id) {
        productosCarrito.find(producto => producto.id === id)?.cantidad;

        if (getCantidadDeProducto === undefined) {
            return 0;
        }
        return cantidad;
    }*/

    const contextValue = {
        items: productosCarrito,
        getCantidadDeProducto,
        addUnoAlCarrito,
        quitarUnoDelCarrito,
        borrarDelCarrito,
        getCostoTotal
    }

    return (
        <ContextoCarrito value={contextValue}>
            {children}
        </ContextoCarrito>
    );
}
