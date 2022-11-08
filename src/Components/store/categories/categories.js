
const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electronics' },
    { name: 'food', displayName: 'Food', description: 'Food' },
    { name: 'clothing', displayName: 'Clothing', description: 'Clothing' },
  ],
  activeCategory: ''
};

function categoryReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVATE':
      let active = payload;
      return { categories: state.categories, activeCategory: active };
    default:
      return state;
  }
}

export const selectCategory = (category) => {
  return {
    type: 'ACTIVATE',
    payload: category,
  };
}

export default categoryReducer;