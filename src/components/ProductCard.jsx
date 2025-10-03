import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition">
      <img
  src={product.image}
  alt={product.name}
  className="w-full h-40 object-cover rounded"
/>
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-700 font-bold mt-2">₹{product.price}</p>
      <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
