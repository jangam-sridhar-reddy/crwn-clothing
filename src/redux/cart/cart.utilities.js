export const addItemToCart = (previousCartItems, cartItemtoAdd) => {
  const existingCartItem = previousCartItems.find(
    (previousCartItem) => previousCartItem.id === cartItemtoAdd.id
  );

  if (existingCartItem) {
    return previousCartItems.map((previousCartItem) => {
      return previousCartItem.id === cartItemtoAdd.id
        ? { ...previousCartItem, quantity: previousCartItem.quantity + 1 }
        : previousCartItem;
    });
  }

  return [...previousCartItems, { ...cartItemtoAdd, quantity: 1 }];
};

export const removeItemFromCart = (previousCartItems, cartItemToRemove) => {
  const existingCartItem = previousCartItems.find(
    (previousCartItems) => previousCartItems.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return previousCartItems.filter(
      (previousCartItem) => previousCartItem.id !== cartItemToRemove.id
    );
  }

  return previousCartItems.map((previousCartItem) =>
    previousCartItem.id === cartItemToRemove.id
      ? { ...previousCartItem, quantity: previousCartItem.quantity - 1 }
      : previousCartItem
  );
};
