// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound"; // Componente de la página 404

import { CartProvider } from "./context/CartContext";

const App = () => {
  

  

  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage />} />

             {/* Ruta 404 que maneja todas las demás rutas no encontradas */}
            <Route path="*" element={<NotFound />} />
        
        </Routes>
      </Router>
    </CartProvider>
  );
};


export default App;



