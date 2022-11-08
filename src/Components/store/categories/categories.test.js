import categoryReducer from "./categories";
import { selectCategory } from "./categories";
import { legacy_createStore as createStore, combineReducers } from "redux";


describe("Category Reducer", () => {
  const reducers = combineReducers({
    categories: categoryReducer,
  })
  const store = createStore(reducers);
  it('should deliver initial state', () => {
    const state = store.getState();
    expect(state.categories.categories.length).toBe(3);
    expect(state.categories.categories[0].name).toBe('electronics');
    expect(state.categories.activeCategory).toBe('');
  });

  it('should activate a category', () => {
    store.dispatch(selectCategory({ name: 'food', displayName: 'Food', description: 'Food' }));
    const state = store.getState();
    expect(state.categories.activeCategory.name).toBe('food');
  });
});