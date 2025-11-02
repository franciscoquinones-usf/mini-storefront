// Shows correct message based on state (loading, error, or empty)

'use client'

export default function CartSummary({cart={}, onDecrement, onReset}) {
    const items= Object.values(cart);
    const itemCount= items.reduce((s, it) => s + it.qty, 0);
    const total= items.reduce((s, it) => s + it.qty * it.product.price, 0);

    return (
    <div>
      <h4>Cart</h4>
      <p>Items: {itemCount}</p>
      <p>Total: ${total}</p>

      <div>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (items.map(it => (
                <div key={it.product.id}>
                <div>
                    <div>{it.product.name}</div>
                    <div>Quantity: {it.qty}</div>
                </div>
                <div>
                    <div>${it.product.price * it.qty}</div>
                    <button onClick={() => onDecrement(it.product.id)}>Remove from Cart</button>
                </div>
                </div>
            ))
            )}

        <div>
          <button onClick={onReset} disabled={items.length === 0}>Reset Cart</button>
        </div>
      </div>
    </div>
  );
}
