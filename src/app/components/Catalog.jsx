// Fetch API data (initial load), shared state for filters + cart, interval stock updates with cleanup

'use client'

import { useEffect, useState, useRef } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog () {
    const [products, setProducts] = useState ([]);
    const [originalProducts, setOriginalProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('All');
    const [maxPrice, setMaxPrice] = useState(2000);
    const [cart, setCart] = useState({});
    const intervalRef=useRef(null);

// Fetching products

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        fetch('/api/products')
        .then((res) => {
            if(!res.ok) throw new Error (`Api error: ${res.status}`);
            return res.json();
        })
        .then((data) => {
            if(!mounted) return;
            setProducts(data);
            setOriginalProducts(data);
            const maxP= data.reduce((m, p) => Math.max(m, p.price), 0);
            setMaxPrice(maxP);
            setLoading(false);
        })
        .catch((err) => {
            if (!mounted) return;
            setError(err.message || 'Failed to load');
            setLoading(false);
        });
    return () => {mounted = false;};
    }, []);

// Setting filters

    const filtered = products.filter(p => {
        const passCategory = category === 'All' || p.category === category;
        const passPrice = p.price <= maxPrice;
        return passCategory && passPrice;
    });

// Interval stock updates

  useEffect(() => {
    if (products.length === 0) return;

    intervalRef.current = setInterval(() => {
      setProducts(prev => {
        return prev.map(p => {
          const r = Math.random();
          let newStock = p.stock;
          if (r < 0.15 && p.stock > 0) {
            newStock = Math.max(0, p.stock - 1);
          } else if (r >= 0.15 && r < 0.24) {
            newStock = p.stock + 1;
          }
          if (newStock === p.stock) return p;
          return { ...p, stock: newStock };
        });
      });
    }, 20000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [products.length]);

  // Cart helpers
  function addToCart(product) {
    if (product.stock <= 0) return;
    setCart(prev => {
      const prevItem = prev[product.id];
      const qty = prevItem ? prevItem.qty + 1 : 1;
      return { ...prev, [product.id]: { product, qty } };
    });
    setProducts(prev => prev.map(p => p.id === product.id ? { ...p, stock: Math.max(0, p.stock - 1) } : p));
  }

  function decrementItem(productId) {
    setCart(prev => {
      const item = prev[productId];
      if (!item) return prev;
      if (item.qty <= 1) {
        const { [productId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productId]: { ...item, qty: item.qty - 1 } };
    });
    setProducts(prev => prev.map(p => p.id === productId ? { ...p, stock: p.stock + 1 } : p));
  }

  function resetCart() {

    setProducts(prev => {
      const copy = prev.map(p => {
        const inCart = cart[p.id];
        return inCart ? { ...p, stock: p.stock + inCart.qty } : p;
      });
      return copy;
    });
    setCart({});
  }

  const categories = ['All', ...Array.from(new Set(originalProducts.map(p => p.category)))];
  
  const maxAvailableForCategory = category === 'All'
  ? originalProducts.reduce((m, p) => Math.max(m, p.price), 0)
  : originalProducts
      .filter(p => p.category === category)
      .reduce((m, p) => Math.max(m, p.price), 0);


  return (
  <section className="p-6">
    <div className="bg-white shadow-md rounded-lg p-4 mb-8 border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-center">Mini Storefront</h1>

      <div className="flex flex-wrap justify-between items-start gap-6">
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <CategoryFilter categories={categories} value={category} onChange={setCategory}/>
          <PriceFilter maxAvailable={maxAvailableForCategory || 1000} value={maxPrice} onChange={setMaxPrice}/>
          <CartSummary cart={cart} onDecrement={decrementItem} onReset={resetCart}/>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4 italic"> * For demonstration purposes, product stock changes randomly every 20 seconds.</p>
    </div>

    <div>
      <StatusMessage loading={loading} error={error} empty={!loading && filtered.length === 0}/>
      {!loading && !error && filtered.length > 0 && (
        <ProductList products={filtered} onAdd={addToCart}/>
      )}
    </div>
  </section>
)}
