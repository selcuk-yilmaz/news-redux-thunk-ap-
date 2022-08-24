import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  appLoading: loadingReducer,
  news: newsReducer,
  auth: authReducer,
});
export default rootReducer;
