import React from "react";
import { alertShow } from "./actions";
import { POST_CREATE } from "./postsReducer";

const forbiddenWords = ["fuck", "spam", "php"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return (next) => (action) => {
    if (action.type === POST_CREATE) {
      const found = forbiddenWords.filter((w) => action.payload.title.includes(w));
      if (found.length) {
        return dispatch(alertShow("Do not use this words!"));
      }
    }
    return next(action);
  };
}
