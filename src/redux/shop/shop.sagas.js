import { call, put, takeLatest } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

import shopActionsType from "./shop.types";

export function* fetchColletionsStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionsType.FETCH_COLLECTIONS_START,
    fetchColletionsStartAsync
  );
}
