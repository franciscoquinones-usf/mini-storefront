// Shows correct message based on state (loading, error, or empty)

'use client'

export default function CartSummary({cart={}, onDecrement, onReset}) {
    const items= Object.values(cart);
    const itemCount= items.reduce((s, it) => s + it.qty, 0);
    const total= items.reduce((s, it) => s + it.qty * it.product.price, 0);

    return (
    <div className="border rounded p-3  flex flex-col items-center justify-between w-48">
      <h4><b>Cart</b></h4>
      <p><b>Items:</b> {itemCount}</p>
      <p><b>Total:</b> ${total}</p>

      <div>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (items.map(it => (
                <div key={it.product.id} className="border rounded p-3 mb-2">
                <div>
                  <div className="font-semibold">{it.product.name}</div>
                  <div>Quantity: {it.qty}</div>
                </div>
                <div>
                    <div>${it.product.price * it.qty}</div>
                    <button className="mt-1 bg-red-800 text-white px-2" onClick={() => onDecrement(it.product.id)}>Remove from Cart</button>
                </div>
                </div>
            )))}
            {items.length > 0 && (
        <div>
          <button className="mt-1 bg-green-800 text-white px-2 rounded" onClick={onReset} disabled={items.length === 0}>Reset Cart</button>
        </div>
          )}
      </div>
    </div>
  );
}
