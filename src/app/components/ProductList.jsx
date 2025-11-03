import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  // Group products by category
  const grouped = products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  // If no products at all
  if (products.length === 0) {
    return <p className="text-center text-gray-600 mt-4">No products found.</p>;
  }

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-1">
            {category}
          </h2>

          <div className="flex flex-wrap gap-4">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAdd}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
