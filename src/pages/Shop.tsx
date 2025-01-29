import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export function Shop({ onAddToCart }: ShopProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}