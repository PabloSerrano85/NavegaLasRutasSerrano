// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  // Función para calcular el total
  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const price = Number(item.price); // Asegúrate de convertir `price` a número
      const quantity = Number(item.quantity); // Asegúrate de convertir `quantity` a número

      // Comprobamos si el precio y la cantidad son números válidos
      if (!isNaN(price) && !isNaN(quantity)) {
        return acc + (price * quantity); // Si son números, los sumamos
      }
      console.warn(`Error con los valores: precio (${item.price}) o cantidad (${item.quantity}) no es válido.`);
      return acc; // Si alguno no es válido, no lo sumamos
    }, 0);
  };

  return (
    <div style={styles.container}>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.img} alt={item.name} style={styles.productImage} />
              <div style={styles.productDetails}>
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div style={styles.total}>
            <h3>Total: ${calculateTotal()}</h3> {/* Mostrar el total calculado */}
          </div>
        </div>
      )}
    </div>
  );
};

// Estilos en línea para esta página
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  cartItem: {
    display: 'flex',
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '20px',
  },
  productImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginRight: '20px',
  },
  productDetails: {
    flex: 1,
  },
  removeButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    marginTop: '10px',
    borderRadius: '5px',
  },
  total: {
    marginTop: '30px',
    fontWeight: 'bold',
  },
};

export default CartPage;
