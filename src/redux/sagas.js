import { call, put, takeEvery } from "redux-saga/effects";
import { alertShow, loaderHide, loaderShow } from "./actions";
import { POST_FETCH, POST_REQUEST } from "./postsReducer";

export function* sagaWatcher() {
  yield takeEvery(POST_REQUEST, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(loaderShow());
    const payload = yield call(fetchPosts);
    yield put({ type: POST_FETCH, payload });
    yield put(loaderHide());
  } catch (e) {
    yield put(loaderHide());
    yield put(alertShow("Something went wrong..."));
  }
}

async function fetchPosts() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  return await resp.json();
}
