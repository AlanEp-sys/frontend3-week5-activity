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
    document.body.style.backgroundColor = isDarkMode ? '#0f172a' : '#f8fafc';
    document.body.style.color = isDarkMode ? '#e2e8f0' : '#1e293b';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc',
        color: isDarkMode ? '#e2e8f0' : '#1e293b',
      }}
    >
      {/* El Navbar está FUERA de Routes para que se quede fijo siempre */}
      <Navbar />

      <button
        type="button"
        onClick={() => setIsDarkMode((prevMode) => !prevMode)}
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 999,
          border: 'none',
          borderRadius: '999px',
          padding: '10px 16px',
          cursor: 'pointer',
          fontWeight: 700,
          backgroundColor: isDarkMode ? '#38bdf8' : '#0f172a',
          color: isDarkMode ? '#0f172a' : '#ffffff',
          boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
        }}
      >
        {isDarkMode ? 'Modo claro' : 'Modo oscuro'}
      </button>

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
