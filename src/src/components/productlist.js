import React from "react";

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

