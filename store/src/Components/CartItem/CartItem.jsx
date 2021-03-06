import React from "react";

import "./CartItem.css";

import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/slices/gameSlice";

function CartItem({ price, title, id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="cart__wrapper">
      <span className="cart__title">{title}</span>
      <div className="close">
        <span className="cart__price">{price} $</span>
        <svg
          onClick={handleClick}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          path
          fill="#fff"
        >
          <g data-name="Layer 2">
            <g data-name="close">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />
              <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default CartItem;
