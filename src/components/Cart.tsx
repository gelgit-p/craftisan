import React from 'react';
import { CartItem } from '../types';
import { Minus, Plus, ShoppingCart, X } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, change: number) => void;
  onRemoveItem: (id: number) => void;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center gap-2 text-gray-500">
          <ShoppingCart size={24} />
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      <div className="divide-y">
        {items.map((item) => (
          <div key={item.id} className="py-4 flex items-center gap-4">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity(item.id, -1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Minus size={20} />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, 1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Plus size={20} />
              </button>
            </div>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="p-1 hover:text-red-600"
            >
              <X size={20} />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax (5%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}