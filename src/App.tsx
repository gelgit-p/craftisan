import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar cartItemCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  ✕
                </button>
              </div>
              <Cart
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;