import shopActionsType from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: shopActionsType.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionSuccess = (collectionsMap) => {
  return {
    type: shopActionsType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionFailure = (errorMessage) => {
  return {
    type: shopActionsType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionFailure(error.message));
      });
  };
};
