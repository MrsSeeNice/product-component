import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const initialProducts = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics", featured: false },
  { id: 2, name: "T-shirt", price: 19.99, category: "Clothing", featured: false },
  { id: 3, name: "Microwave", price: 89.99, category: "Home Essentials", featured: false },
  { id: 4, name: "Smartphone", price: 699.99, category: "Electronics", featured: false },
  { id: 5, name: "Jeans", price: 39.99, category: "Clothing", featured: false },
  { id: 6, name: "Blender", price: 49.99, category: "Home Essentials", featured: false },
  { id: 7, name: "Wireless Headphones", price: 159.99, category: "Electronics", featured: false },
  { id: 8, name: "Socks", price: 5.99, category: "Clothing", featured: false },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Management App</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;

