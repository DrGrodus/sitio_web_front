import {Table} from "react-bootstrap";
import "../Componentes/styles.css";
import {createContext, useState} from 'react';

export default function Carrito() {
    


    return (
        <>
            <h1>Carrito</h1>
            <ContextoCarrito.Provider value={contextValue}>
                {children}
            </ContextoCarrito.Provider>
        </>
    );
}
