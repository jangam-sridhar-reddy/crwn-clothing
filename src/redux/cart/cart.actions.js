import cartActionTypes from "./cart.types";

const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

const addItem = (items) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: items,
  };
};

export const removeItem = (items) => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    payload: items,
  };
};

export const clearItemFromCart = (items) => {
  return {
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: items,
  };
};

export { toggleCartHidden, addItem };
