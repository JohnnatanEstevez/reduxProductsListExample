import * as TYPES from "./types";
const initialState = [];
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_PRODUCT:
      return [...state, action.payload];
    case TYPES.EDIT_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });

    default:
      return state;
  }
}
