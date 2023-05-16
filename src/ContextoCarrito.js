import {createContext, useState} from "react";
import {items, getInfoDelProducto} from './Productos';

export const ContextoCarrito = createContext({
    items: [],
    getCantidadDeProducto: () => {
    },
    addUnoAlCarrito: () => {
    },
    removeUnoDelCarrito: () => {
    },
    deleteDelCarrito: () => {
    },
    getCostoTotal: () => {
    }
});

export function ProveedorCarrito({children}) {
    const [productosCarrito, setProductosCarrito] = useState([]);

    function getCantidadDeProducto(id) {
        const cantidad = productosCarrito.find(producto => producto.id === id)?.cantidad;

        if (cantidad === undefined) {
            return 0;
        }
        return cantidad;
    }

    function addUnoAlCarrito(id) {
        const cantidad = getCantidadDeProducto(id);

        if (cantidad === 0) {
            setProductosCarrito(
                [
                    ...productosCarrito,
                    {
                        id: id,
                        cantidad: 1
                    }
                ]
            );
        } else {
            setProductosCarrito(
                productosCarrito.map(
                    producto =>
                        producto.id === id
                            ? {...producto, cantidad: producto.cantidad + 1}
                            : producto
                )
            );
        }
    }

    function removeUnoDelCarrito(id) {
        const cantidad = getCantidadDeProducto(id);

        if (cantidad === 1) {
            deleteDelCarrito(id);
        } else {
            setProductosCarrito(
                productosCarrito.map(
                    producto =>
                        producto.id === id
                            ? {...producto, cantidad: producto.cantidad - 1}
                            : producto
                )
            );
        }

    }

    function deleteDelCarrito(id) {
        setProductosCarrito(
            productosCarrito =>
                productosCarrito.filter(productoActual => {
                    return productoActual.id !== id;
                })
        );
    }

    function getCostoTotal() {
        let costoTotal = 0;
        productosCarrito.map((itemCarrito) => {
            const infoProducto = getInfoDelProducto(itemCarrito.id);
            costoTotal += (infoProducto.precio * itemCarrito.cantidad);
        });
        return costoTotal;
    }

    const contextValue = {
        items: productosCarrito,
        getCantidadDeProducto,
        addUnoAlCarrito,
        removeUnoDelCarrito,
        deleteDelCarrito,
        getCostoTotal
    }

    return (
        <ContextoCarrito.Provider value={contextValue}>
            {children}
        </ContextoCarrito.Provider>
    );
}

export default ProveedorCarrito;
