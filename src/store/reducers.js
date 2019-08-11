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
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
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

    case REMOVE_PRODUCT_FROM_CART:
        updatedCart = [...state.cart];
        updatedItemIndex = updatedCart.findIndex(
          item => item.id === action.payload.id
        );
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        if(updatedItem.quantity == 0) {
          const Cart = updatedCart.filter(updatedItem => updatedItem.quantity >= 1);
          updatedCart = Cart;
        } else {
          updatedItem.quantity--;
          updatedCart[updatedItemIndex] = updatedItem;
        }
        return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

export default shopReducer;
