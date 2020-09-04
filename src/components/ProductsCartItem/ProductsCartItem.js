import React, { useState } from 'react';
import './ProductsCartItem.scss';

const ProductsCartItem = ({ itemCart }) => {
  const [counter, setCounter] = useState(1);

  function minusValue() {
    if (counter === 1) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  }
  function plusValue() {
    setCounter(counter + 1);
  }

  const { title, volume } = itemCart;

  return (
    <div className="cart__item">
      <span className="cart__title">Нямушка с {title}</span>
      <span className="cart__title">
        Целых <b>{volume * counter}</b> кг
      </span>
      <div className="cart__counter">
        <span onClick={() => minusValue()} className="cart__minus">
          <i className="fa fa-minus-circle"></i>
        </span>
        <span className="cart__value">{counter}</span>
        <span onClick={() => plusValue()} className="cart__plus">
          <i className="fa fa-plus-circle"></i>
        </span>
      </div>
    </div>
  );
};

export default ProductsCartItem;
