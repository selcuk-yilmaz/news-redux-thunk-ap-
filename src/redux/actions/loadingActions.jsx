import { SET_LOADING, CLEAR_LOADING } from "../types/loadingTypes";

export const setLoading = () => ({
  type: SET_LOADING,
});

export const clearLoading = () => ({
  type: CLEAR_LOADING,
});
