import { SET_LOADING, CLEAR_LOADING } from "../types/loadingTypes";

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case CLEAR_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default loadingReducer;
