import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
import './Cart.css';

class CartPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={this.props.cartItemCount} />
        <main className="cart">
          <div>Please get the cartItems from the redux store</div>
          {/* {this.props.cartItems.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.props.cartItems.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button>
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul> */}
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
