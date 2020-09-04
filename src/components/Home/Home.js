import React, { Component } from 'react';
import ProductsList from '../ProductsList/ProductList';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <ProductsList />
      </div>
    );
  }
}

export default Home;
