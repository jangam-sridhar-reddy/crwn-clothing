import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatorQuantity, cartItems) =>
      accumulatorQuantity + cartItems.quantity,
    0
  )
);

export const selectCartPriceCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatorPrice, cartItems) =>
        accumulatorPrice + cartItems.quantity * cartItems.price,
      0
    )
);

export { selectCartItems, selectCartItemsCount };
