// src/components/ItemListContainer.jsx
import React from "react";

import { useCart } from "../context/CartContext";

const ItemListContainer = () => {
  const { addToCart } = useCart();

  const productos = [
    {
      id: 1,
      name: "Producto 1",
      price: "100",
      img: "./src/images/descarga (1).jpeg",
    },
    {
      id: 2,
      name: "Producto 2",
      price: "150",
      img: "./src/images/descarga (2).jpeg",
    },
    {
      id: 3,
      name: "Producto 3",
      price: "200",
      img: "./src/images/images3.jpeg",
    },
    {
      id: 4,
      name: "Producto 4",
      price: "100",
      img: "./src/images/images (4).jpeg",
    },
    {
      id: 5,
      name: "Producto 5",
      price: "150",
      img: "./src/images/images (5).jpeg",
    },
    {
      id: 6,
      name: "Producto 6",
      price: "200",
      img: "./src/images/images (7).jpeg",
    },
    {
      id: 7,
      name: "Producto 7",
      price: "100",
      img: "./src/images/images (8).jpeg",
    },
    {
      id: 8,
      name: "Producto 8",
      price: "150",
      img: "./src/images/D_NQ_NP_794029-MLA40207861128_122019-O.jpg",
    },
    
  ];

    return (

 
      <div>
        <h2>Lista de Productos</h2>
        <div className="productos-container">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.img} alt={producto.name} />
              <h3>{producto.name}</h3>
              <p>{producto.price}</p>
              <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
              <a href={`/product/${producto.id}`}>Ver detalles</a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ItemListContainer;