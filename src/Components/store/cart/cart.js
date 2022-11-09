const initialState = [];

function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      let newItem = {
        product: payload.name,
        quantity: 1,
      }
      return [...state, newItem];
    case 'REMOVE':
      return state.filter(item => item !== payload);
    default:
      return state;
  }
}

export const addToCart = (item) => {
  return {
    type: 'ADD',
    payload: item,
  };
};

export const removeFromCart = (item) => {
  console.log('item', item);
    return {
    type: 'REMOVE',
    payload: item,
  };
};

export default cartReducer;