import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  // 1. Extraemos el arreglo de productos y la función para limpiar del Contexto
  const { cart, clearCart } = useContext(CartContext);

  // 2. LÓGICA DE NEGOCIO: Calculamos el total usando .reduce()
  // Acumulamos el precio de cada item, empezando desde 0
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  // 3. RENDERIZADO CONDICIONAL: Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="container empty-cart">
        <h2>Tu carrito está vacío 😔</h2>
        <Link to="/" className="back-link">
          Ir a comprar
        </Link>
      </div>
    );
  }

  // 4. RENDERIZADO PRINCIPAL: Si hay productos
  return (
    <div className="container">
      <h2 className="title">Resumen de tu Compra</h2>

      <div className="cart-list">
        {/* Iteramos sobre el carrito para mostrar cada producto */}
        {cart.map((item, index) => (
          // Usamos index en la key porque un usuario podría agregar el mismo producto 2 veces
          <div key={index} className="cart-item">
            <img
              src={item.images[0]}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sección Financiera */}
      <div className="cart-summary">
        {/* Formateamos el total a 2 decimales */}
        <h3>Total a Pagar: ${total.toFixed(2)}</h3>

        <div className="cart-actions">
          <button className="clear-btn" onClick={clearCart}>
            Vaciar Carrito 🗑️
          </button>
          <button
            className="checkout-btn"
            onClick={() => alert('¡Compra simulada exitosa!')}
          >
            Pagar Ahora 💳
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
