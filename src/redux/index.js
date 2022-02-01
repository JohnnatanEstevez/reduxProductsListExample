import { createStore, combineReducers } from "redux";
import productsReducer from "./products/reducer";
const reducers = combineReducers({
  //aca metemos todos los reducers/estados globales
  products: productsReducer,
  //user: userReducers,// ejemplo de agrgar otro Reducer
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
