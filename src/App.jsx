import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.body.style.transition = 'background-color 0.2s ease, color 0.2s ease';
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={`app-shell ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* El Navbar está FUERA de Routes para que se quede fijo siempre */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prevMode) => !prevMode)}
      />

      {/* Routes funciona como un Switch/Case. Lee la URL y muestra 1 vista */}
      <Routes>
        <Route path="/" element={<Catalog />} />
        {/* Usamos :id para crear una ruta dinámica que atrape el ID del producto */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
