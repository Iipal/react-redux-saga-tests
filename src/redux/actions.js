import { ALERT_HIDE, ALERT_SHOW, LOADER_HIDE, LOADER_SHOW } from "./appReducer";
import { POST_CREATE, POST_REQUEST } from "./postsReducer";

export function createPost(post) {
  return (dispatch) => {
    if (!post.title.trim()) {
      dispatch(alertShow("Post can not be empty!"));
      setTimeout(() => {
        dispatch(alertHide());
      }, 2500);
    } else {
      dispatch({ type: POST_CREATE, payload: post });
    }
  };
}

export const fetchPost = () => ({ type: POST_REQUEST });

export const loaderShow = () => ({ type: LOADER_SHOW });
export const loaderHide = () => ({ type: LOADER_HIDE });

export const alertShow = (text) => {
  return (dispatch) => {
    dispatch({ type: ALERT_SHOW, payload: text });
    setTimeout(() => {
      dispatch(alertHide());
    }, 2500);
  };
};
export const alertHide = () => ({ type: ALERT_HIDE });
