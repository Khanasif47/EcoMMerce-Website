import React from "react";
import { Link } from "react-router-dom";
import products from "../products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">
          Welcome to EcoTableware 🌍
        </h1>
        <p className="text-lg mt-2 text-gray-700">
          Sustainable, eco-friendly tableware for a greener tomorrow.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Shop Now
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
