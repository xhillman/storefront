import axios from "axios";

const initialState = [];

function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      console.log('about to add');
      let newItem = {
        product: payload,
        quantity: 1,
      }
      return [...state, newItem];
    case 'REMOVE':
      return state.filter(item => item !== payload);
    default:
      return state;
  }
}

export const addToCart = (item) => async (dispatch, getState) => {
  console.log('item add', item);
  let updatedItem = {
    _id: item._id,
    name: item.name,
    category: item.category,
    price: item.price,
    inStock: item.inStock - 1,
  }
  let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${item._id}`, updatedItem);
  dispatch(updateItem(response.data));
  dispatch(addAnItem(item));
};

export const addAnItem = (item) => {
  return {
    type: 'ADD',
    payload: item,
  }
}

export const removeFromCart = (item) => async (dispatch, getState) => {
  console.log('item remove', item);
  let updatedItem = {
    _id: item.product._id,
    name: item.product.name,
    category: item.product.category,
    price: item.product.price,
    inStock: item.product.inStock + 1,
  }
  let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${item.product._id}`, updatedItem);
  dispatch(updateItem(response.data));
  dispatch(removeAnItem(item));
};

export const removeAnItem = (item) => {
  return {
    type: 'REMOVE',
    payload: item,
  }
}

export const updateItem = (item) => {
  return {
    type: 'UPDATE',
    payload: item,
  };
};

export default cartReducer;