import React from 'react';
import { useSelector } from 'react-redux';
import './ProductsCart.scss';
import ProductsCartItem from '../ProductsCartItem/ProductsCartItem';

const ProductsCart = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);

  const itemCart = selectedProduct.map((item) => {
    return <ProductsCartItem key={item._id} itemCart={item} />;
  });

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {selectedProduct.length === 0 && <div>Пустенько</div>}
      <div>{itemCart}</div>
    </div>
  );
};

export default ProductsCart;
