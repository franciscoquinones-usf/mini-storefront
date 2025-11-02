import Catalog from './components/Catalog';

export default function Page() {
  return (
    <main>
      <div>
        <header>
          <h1>Mini Storefront</h1>
          <p>For demonstration purposes, stock levels update randomly every 20 seconds.</p>
        </header>
        <Catalog/>
      </div>
    </main>
  );
}