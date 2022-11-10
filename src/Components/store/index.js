import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoryReducer from './categories/categories';
import productReducer from './products/products';
import cartReducer from './cart/cart';
import thunk from './middleware/thunk'

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}