// Disable add button if out of stock, shows "Out of stock"

'use client';

export default function ProductCard({ product, onAdd }) {
  const outOfStock = product.stock <= 0;

  return (
  <div className="border rounded p-3  flex flex-col items-center justify-between w-48 h-52">
      <h3 className="font-semibold">{product.name}</h3>
      <p>{product.category}</p>
      <p>${product.price}</p>

      {outOfStock ? (
        <button className="mt-1 bg-red-800 text-white px-2 rounded cursor-not-allowed" disabled>Out of Stock</button>
      ) : (
        <button className= "mt-1 bg-cyan-600 text-white px-2 rounded cursor-pointer" onClick={() => onAdd(product)}>Add to Cart</button>
      )}
    </div>
  );
}