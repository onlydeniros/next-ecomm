/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function ProductItem({ product }) {
  return (
    <div className="card mb-5 black rounded-lg border border-gray-200 shadow-md">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button bg-amber-300 py-2 px-4 rounded shawdow hover:bg-amber-400 active:bg"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
 