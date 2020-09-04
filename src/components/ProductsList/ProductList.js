import React, { Component } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';
import WithRestoService from '../Hoc/WithRestoService';
import { setCatFood, addedToCart, listProductsError } from '../../actions';
import { connect } from 'react-redux';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import './ProductList.scss';

class ProductList extends Component {
  componentDidMount() {
    const { RestoService } = this.props;
    RestoService.getlistCatFood()
      .then((res) => this.props.setCatFood(res))
      .catch((error) => this.props.listProductsError());
  }

  render() {
    const { listCatFood, loading, error } = this.props;

    if (error) {
      return <Error />;
    }
    if (loading) {
      return <Loading />;
    }

    const items = listCatFood.map((card) => {
      return (
        <ProductsCard
          key={card._id}
          card={card}
          addToCart={() => this.props.addedToCart(card._id)}
        />
      );
    });

    return (
      <div className="products">
        <div className="products__list">{items}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listCatFood: state.listCatFood,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  setCatFood,
  addedToCart,
  listProductsError,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(ProductList)
);
