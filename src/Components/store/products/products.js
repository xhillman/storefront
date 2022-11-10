import axios from "axios";

// const initialState = {
//   products: [
//     { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
//     { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
//     { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
//     { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
//     { name: 'Apples', category: 'food', price: .99, inStock: 500 },
//     { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
//     { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
//   ]
// };

const initialState = {
  products: [],
  filteredProducts: [],
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVATE':
      let active = payload;
      let products = state.products.filter(product => product.category === active);
      return { ...state, filteredProducts: products };
    case 'SET_PRODUCTS':
      console.log(payload[0].inStock);
      return { products: payload, filteredProducts: payload };
    case 'UPDATE':
      let updatedItems = state.products.map(item => {
        if (item._id === payload._id) {
          item.inStock = payload.inStock;
        }
        return item;
      })
      return { ...state, products: updatedItems };
    default:
      return state;
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(response.data.results));
}

export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
}

export default productReducer;