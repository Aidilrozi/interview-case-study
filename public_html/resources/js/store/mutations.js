import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS
  } from './mutation-types'
  export const cartMutations = {
    [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
    [REMOVE_FROM_CART]: (state, payload) => {
      const index = state.cart.findIndex(p => p._id === payload)
      state.cart.splice(index, 1)
      console.log(state.cart, state.cart.length, index)
    }
  }