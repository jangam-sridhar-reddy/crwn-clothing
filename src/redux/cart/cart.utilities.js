const addItemToCart = (previousCartItems, cartItemtoAdd) => {
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

export { addItemToCart };
