import Tel1 from "./img/TelUno.jpg";
import Tel2 from "./img/TelDos.jpg";
import Tel3 from "./img/TelTres.jpg";
import Tel4 from "./img/TelCuatro.jpg";
import Tel5 from "./img/TelCinco.jpg";
import Tel6 from "./img/TelSeis.jpg";

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

function getInfoDelProducto(id) {
    let productoInfo = items.find(producto => producto.id === id);

    if (productoInfo === undefined) {
        console.log("La información del producto no existe para el ID: " + id);
        return undefined;
    }
    return productoInfo;

}

export {items, getInfoDelProducto};
