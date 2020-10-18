const initState = {
  loading: false,
  alert: null,
};

export const LOADER_SHOW = "APP/LOADER_SHOW";
export const LOADER_HIDE = "APP/LOADER_HIDE";

export const ALERT_SHOW = "APP/ALERT_SHOW";
export const ALERT_HIDE = "APP/ALERT_HIDE";

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADER_SHOW:
      return { ...state, loading: true };
    case LOADER_HIDE:
      return { ...state, loading: false };
    case ALERT_SHOW:
      return { ...state, alert: action.payload };
    case ALERT_HIDE:
      return { ...state, alert: null };
    default:
      return state;
  }
};
