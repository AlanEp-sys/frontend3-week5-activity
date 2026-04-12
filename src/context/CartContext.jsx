import { createContext, useState } from 'react';

// 1. Creamos el contexto (El tubo de comunicación)
export const CartContext = createContext();

// 2. Creamos el Proveedor (El componente que envuelve a la app)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Iniciamos con el carrito vacío

  // Función para agregar un producto
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para vaciar el carrito (opcional para el botón de compra)
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
