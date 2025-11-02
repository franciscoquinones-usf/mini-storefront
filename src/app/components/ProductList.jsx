// Maps products to cards (key={id})

'use client'

import ProductCard from './ProductCard';
export default function ProductList({products, onAdd}) {
    return (
    <div>{products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={() => onAdd(product)}/>
      ))}
    </div>
    );
}