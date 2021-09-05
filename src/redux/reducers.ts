import { combineReducers, Reducer } from "redux";
import launchesReducer from "./modules/launches";

export default (): Reducer =>
  combineReducers({
    launches: launchesReducer,
  });
