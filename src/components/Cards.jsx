import React from "react";
import { useAppState } from "../context/app";
import CartLogo from "../assets/images/cart.svg";
import Star from "../assets/images/star.svg";
import VoidStar from "../assets/images/void-star.svg";

export default function Cards({ showCart = false }) {
  const { state } = useAppState();

  return (
    <section className="cards-wrapper">
      {showCart
        ? state.myCart.map((game) => (
            <Card key={game.gameID} data={{ ...game }} showCart={showCart} />
          ))
        : state.filtered.map((game) => (
            <Card key={game.gameID} data={{ ...game }} showCart={showCart} />
          ))}
    </section>
  );
}

function Card(props) {
  const { state, dispatch } = useAppState();
  const { salePrice, normalPrice, steamRatingPercent, title, thumb, id } =
    props.data;

  function addToCart() {
    const isInCart = state.myCart.some(
      (game) => game.gameID === props.data.gameID
    );

    if (isInCart) {
      dispatch({ type: "removeGame", payload: props.data.gameID });
    } else {
      dispatch({ type: "addGame", payload: props.data });
    }
  }
  return (
    <div className="card-game" tabIndex="10">
      <div>
        <img src={thumb} alt="" />
      </div>
      <div>
        <h3 className="mt-3">{title}</h3>
        <p className="text-center mt-4">Steam Review</p>

        <div className="rating">
          {
            [1,2,3,4,5].map(el => 
              <img src={(el*20-2.5)>steamRatingPercent?VoidStar:Star} alt="star" />
            )
          }
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button className="btn-price d-flex gap-3 align-items-center" onClick={addToCart}>
            <span className="sale-price ms-4">${salePrice}</span>
            <span className="normal-price">${normalPrice}</span>
          </button>
        </div>
      </div>

      {state.myCart.some((game) => game.gameID === props.data.gameID) && (
        <>
          <div className="is-to-buy">
            <img src={CartLogo} alt="carrito" width="10px" />
          </div>
          <button onClick={addToCart} className="remove-item">
            ✖
          </button>
        </>
      )}
      <div className="savings">
        <span>{Number(props.data.savings).toFixed(2)}%off</span>
      </div>
      {props.showCart && null}
    </div>
  );
}
