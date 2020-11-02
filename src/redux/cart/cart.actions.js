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

export { toggleCartHidden, addItem };
