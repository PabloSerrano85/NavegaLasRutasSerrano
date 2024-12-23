// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";  // Importar el logo

const NavBar = () => {
  const { cart } = useCart();

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <Link to="/" style={styles.logoText}>GeekStore</Link>  {/* Texto del logo */}
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.navLink}>Home</Link></li>
        <li><Link to="/cart" style={styles.navLink}>Carrito ({cart.length})</Link></li>
      </ul>
    </nav>
  );
};

// Estilos en línea (para simplicidad)
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '80px',  // Ajusta el tamaño según el logo
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default NavBar;
