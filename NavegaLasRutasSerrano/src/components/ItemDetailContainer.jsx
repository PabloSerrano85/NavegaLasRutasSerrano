// src/components/ItemDetailContainer.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount"; // Importa el componente ItemCount


const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Aquí simulamos un producto. Puedes obtener estos datos desde una API.
  const producto = {
    id,
    name: `Producto ${id}`,
    description: `Descripción detallada del Producto ${id}. Este es un producto muy especial.`,
    price: 100,  // Asegúrate de que el precio sea un número para los cálculos
    img: `https://via.placeholder.com/600x400?text=Detalle+Producto+${id}`,
    stock: 10,  // Definimos un stock de 10 unidades
  };

  // Función que maneja la adición al carrito
  const handleAddToCart = (quantity) => {
    const itemToAdd = { 
      ...producto, 
      quantity, 
      img: producto.img  // Añadir la imagen al carrito
    };
    addToCart(itemToAdd);
  };




  return (
    <div style={styles.container}>
      <div style={styles.detailContainer}>
        <img src={producto.img} alt={producto.name} style={styles.productImage} />
        <div style={styles.productDetails}>
          <h2>{producto.name}</h2>
          <p>{producto.description}</p>
          <p style={styles.price}>${producto.price}</p>

          {/* Componente ItemCount */}
          <ItemCount stock={producto.stock} onAdd={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};




// Estilos en línea para esta página
const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#f4f4f4',
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '1200px',
    width: '100%',
  },
  productImage: {
    maxWidth: '100%', // Ajusta la imagen al tamaño disponible
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Agrega sombra a la imagen
  },
  productDetails: {
    flex: 1,
    paddingLeft: '20px',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
};

export default ItemDetailContainer;
