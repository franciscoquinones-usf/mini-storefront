// Disable add button if out of stock, shows "Out of stock"

'use client'

export default function ProductCard({ProductCard, onAdd}) {
    const outOfStock=ProductCard.stock <=0;
    return (
        <><><div>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
        </div>
            <div>
                {outOfStock ? (
                    <span>Out of Stock</span>
                ) : (
                    <span>{product.stock} in stock</span>
                )}
            </div></>
            <button onClick={onAdd} disabled={outOfStock}>Add</button></>
    );
}