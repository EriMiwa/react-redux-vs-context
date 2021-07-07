import { ADD_PRODUCT_TO_CART } from './actions';
import { REMOVE_PRODUCT_FROM_CART } from './actions';

const initialState = {
  products: [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ],
  cart: [],
  cartSum: 0
};

const shopReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return addProductToCart(state, action);
    case REMOVE_PRODUCT_FROM_CART:
      return removeProductFromCart(state, action);
    default:
      return state;
  }

  function addProductToCart() {
    let updatedCart;
    let updatedItemIndex;

    updatedCart = [...state.cart];
    updatedItemIndex = updatedCart.findIndex(
      item => item.id === action.payload.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...action.payload, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
  }

  function removeProductFromCart(state, action) {
    let cartItems = state.cart;
    const itemId = action.payload;
    
    cartItems = cartItems.filter(item => {
      return item.id !== itemId
    })

    return {
      ...state,
      cart: cartItems
    }
  }

};

export default shopReducer;
