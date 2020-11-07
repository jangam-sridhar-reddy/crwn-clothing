import shopActionsType from "./shop.types";

export const updateCollections = (collections) => {
  return {
    type: shopActionsType.UPDATE_COLLECTIONS,
    payload: collections,
  };
};
