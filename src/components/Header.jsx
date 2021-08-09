import React from "react";
import { NavLink as Link } from "react-router-dom";
import Cart from "../assets/images/cart.svg";
import Logo from "../assets/images/logo.svg";
import { useAppState } from "../context/app";
export default function Header() {
  const { state } = useAppState();

  return (
    <nav className="header">
      <Link to="/">
        <img src={Logo} alt="logo ms" width="150px" />
      </Link>

      <ul>
        <li>
          <Link exact activeStyle={{color:"var(--color1)"}} to="/">Home</Link>
        </li>
        <li>
          <Link exact activeStyle={{color:"var(--color1)"}} to="/my-cart">Browse</Link>
        </li>
        <li>
          <Link exact activeStyle={{color:"var(--color1)"}} to="/my-cart">
            <button className="my-btn position-relative">
              <img src={Cart} alt="cartera" width="30px" />
              <span>Cart</span>
              {state.myCart.length !== 0 && <span className="cart-count">{state.myCart.length}</span>}
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
