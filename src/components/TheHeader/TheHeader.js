import React, { useState } from 'react';
import ProductsCart from '../ProductsCart/ProductsCart';
import './TheHeader.scss';

const TheHeader = () => {
  const [cart, openCart] = useState(false);

  let prodCart;
  if (cart) {
    prodCart = <ProductsCart />;
  }

  return (
    <header className="header">
      <h1 className="header__title">Ты сегодня покормил кота?</h1>
      <span onClick={() => openCart(!cart)}>
        <i className="fa fa-shopping-cart"></i>
      </span>
      {prodCart}
    </header>
  );
};

export default TheHeader;
