// src/components/ItemCount.jsx
import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button onClick={handleDecrease} style={styles.button}>-</button>
        <span style={styles.count}>{count}</span>
        <button onClick={handleIncrease} style={styles.button}>+</button>
      </div>
      <button onClick={() => onAdd(count)} style={styles.addButton}>Agregar al carrito</button>
    </div>
  );
};

// Estilos para ItemCount
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  count: {
    margin: '0 10px',
    fontSize: '18px',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default ItemCount;
