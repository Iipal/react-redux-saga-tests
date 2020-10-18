const initState = {
  posts: [],
  fetchedPosts: [],
};

export const POST_CREATE = "POST/CREATE";
export const POST_FETCH = "POST/FETCH";
export const POST_REQUEST = "POST/REQUEST";

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case POST_FETCH:
      return { ...state, fetchedPosts: action.payload };
    default:
      return state;
  }
};
