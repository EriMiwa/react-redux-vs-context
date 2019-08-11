import React, { Component } from 'react';
import { connect } from 'react-redux';


import MainNavigation from '../components/MainNavigation';
import { removeProductFromCart } from '../store/actions';
import './Cart.css';

class CartPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={this.props.cartItemCount} />
        <main className="cart">
          <ul>
            {this.props.cartItems.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button onClick={this.props.removeProductFromCart.bind(this, cartItem)}>
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

//getter:read state
const mapStateToProps = state => {
  return {
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

//function / action
const mapDispatchToProps = dispatch => {
  return { 
    removeProductFromCart: cartItem => dispatch(removeProductFromCart(cartItem))
   };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
