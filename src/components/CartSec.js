import React, { useState } from "react";
import CartItem from "./CartItem";

export default function CartSec() {
  
  const [products, setProducts] = useState([
    {
      id: 1,
      productname: "Phone",
      productprice: "9999",
      productqty: 0,
      productimage: `https://cdn-icons-png.flaticon.com/128/3415/3415074.png`,
    },
    {
      id: 2,
      productname: "Watch",
      productprice: "999",
      productqty: 0,
      productimage: `https://cdn-icons-png.flaticon.com/128/4305/4305522.png`,
    },
    {
      id: 3,
      productname: "Pen",
      productprice: "99",
      productqty: 0,
      productimage: `https://cdn-icons-png.flaticon.com/128/1250/1250615.png`,
    },
  ]);
  
  const updatedProducts = [...products];

  function plus(product) {
    const index = products.findIndex((p) => p.id === product.id);
    updatedProducts[index].productqty += 1;
    setProducts(updatedProducts);
  }

  function minus(product) {
    const index = products.findIndex((p) => p.id === product.id);
    updatedProducts[index].productqty -= 1;
    setProducts(updatedProducts);
  }
  function reset(product) {
    const index = products.findIndex((p) => p.id === product.id);
    updatedProducts[index].productqty = 0;
    setProducts(updatedProducts);
  }
  function cal() {
    let totalCost = 0;
    products.map((product) => {
     return totalCost += product.productprice * product.productqty;
    });
    return totalCost;
  }
  return (
    <>
      <div className='cartsec'>
        {products.map((product) => (
          <CartItem
          product={product}
          key={product.id}
          plus={plus}
          minus={product.productqty > 0 ? minus : reset}
          reset={reset}
        />
        ))}
      </div>
      <div className="container my-4" style={{ fontSize: 20 }}>
        Your Total Price: {cal()}
      </div>


  
    </>
  );
}
