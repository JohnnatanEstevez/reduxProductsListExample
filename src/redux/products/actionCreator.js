import * as TYPES from "./types";
export const createProductActionCreator = (producto) => ({
  type: TYPES.ADD_PRODUCT,
  payload: producto,
});

export const editProductActionCreator = (producto) => ({
  type: TYPES.EDIT_PRODUCT,
  payload: producto,
});
