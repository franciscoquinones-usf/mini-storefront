// Disable add button if out of stock, shows "Out of stock"

'use client';

export default function ProductCard({ product, onAdd }) {
  const outOfStock = product.stock <= 0;

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>

      {outOfStock ? (
        <button disabled>Out of Stock</button>
      ) : (
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      )}
    </div>
  );
}