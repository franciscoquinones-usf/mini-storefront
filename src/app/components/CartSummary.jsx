// Shows correct message based on state (loading, error, or empty)

'use client'

export default function CartSummary({cart={}, onDecrement, onReset}) {
    const items= Object.values(cart);
    const itemCount= items.reduce((s, it) => s + it.qty, 0);
    const total= items.reduce((s, it) => s + it.qty * it.product.price, 0);

    return ( 
    
    )
}