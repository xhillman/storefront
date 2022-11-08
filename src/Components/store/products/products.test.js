import productReducer from "./products";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { selectCategory } from "../../store/categories/categories";

describe("Product Reducer", () => {
  it("should deliver initial state", () => {
    const reducers = combineReducers({
      products: productReducer,
    });
    const store = createStore(reducers);
    const state = store.getState();
    expect(state.products.products.length).toBe(7);
    expect(state.products.products[0].name).toBe("TV");
  });

  it('should filter the products when a category is activated', () => {
    const reducers = combineReducers({
      products: productReducer,
      categories: selectCategory,
    });
    const store = createStore(reducers);
    store.dispatch(selectCategory({ name: 'food', displayName: 'Food', description: 'Food' }));
    const state = store.getState();
    expect(state.products.products.length).toBe(3);
  });
});