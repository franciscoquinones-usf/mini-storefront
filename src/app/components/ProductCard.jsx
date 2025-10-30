// Disable add button if out of stock, shows "Out of stock"

'use client'

export default function ProductCard({[ProductCard, onAdd]}) {
    const outOfStock=ProductCard.stock <=0;
    return (
        
    )
}