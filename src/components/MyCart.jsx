import React from "react";
import Cards from "./Cards";
import { useAppState } from "../context/app";
export default function MyCart() {
  const { state } = useAppState();
  return (
    <>
      <h1>My Cart</h1>
      {state.myCart.length === 0 ? (
        <h2>There are no items in your cart</h2>
      ) : (
        <>
          <h2>
            Your purchase total is{" "}
            <span className="text-color1">
              {state.myCart
                .reduce((acc, val) => acc + Number(val.salePrice), 0)
                .toFixed(2)}
            </span>
          </h2>
          <Cards showCart={true} />

          <div className="mb-5">
            <button className="my-btn">Buy Now</button>
          </div>
        </>
      )}
    </>
  );
}
