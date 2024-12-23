// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1>¡Vaya! Página no encontrada</h1>
      <p>La página que buscas no existe o ha sido movida.</p>
      <Link to="/" style={styles.link}>Volver a la página principal</Link>
    </div>
  );
};

// Estilos en línea para la página 404
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
    fontSize: '18px',
    marginTop: '20px',
    display: 'inline-block',
  }
};

export default NotFound;
