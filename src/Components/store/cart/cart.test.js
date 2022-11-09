import cartReducer from "./cart";
import { addToCart, removeFromCart } from "./cart";
import { legacy_createStore as createStore, combineReducers } from "redux";

describe("Cart Reducer", () => {

  const reducers = combineReducers({
    cart: cartReducer,
  });

  const store = createStore(reducers);

  it("should deliver initial state", () => {
    const state = store.getState();
    expect(state.cart.length).toBe(0);
  });

  it("should add an item to the cart", () => {
    const state = store.getState();
    console.log('state1', state);
    store.dispatch(addToCart({ 
      name: 'TV', 
      category: 'electronics', 
      price: 699.00, 
      inStock: 5 
    }));
    let state2 = store.getState();
    console.log('state2', state2);
    expect(state2.cart.length).toBe(1);
    expect(state2.cart[0].product).toBe('TV');
  });

  it("should remove an item from the cart", () => {
    const state3 = store.getState();
    console.log('state3', state3);
    store.dispatch(removeFromCart({ 
      product: 'TV',
      quantity: 1,
    }));
    const state4 = store.getState();
    console.log('state4', state4);
    expect(state4.cart.length).toBe(0);
  });
});