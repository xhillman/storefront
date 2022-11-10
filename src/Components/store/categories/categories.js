import axios from 'axios';

let initialState = {
  categories: [],
  activeCategory: '',
}

function categoryReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVATE':
      let active = payload;
      return { categories: state.categories, activeCategory: active };
    case 'SET_CATEGORIES':
      return { ...state, categories: payload }; 
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

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategories(response.data.results));
}

export const setCategories = (categories) => {
  return {
    type: 'SET_CATEGORIES',
    payload: categories,
  };
}

export default categoryReducer;