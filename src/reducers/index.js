import { combineReducers } from "redux";
import usersReducers from "./usersReducer";

const rootReducer = () =>
  combineReducers({
    all_users: usersReducers,
  });

export default rootReducer;
