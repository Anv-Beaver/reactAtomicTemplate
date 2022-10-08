import {combineReducers} from "redux";
import { BottomNavigationBarReducer } from "../common/BottomNavigationBar/BottomNavigationBarReducer";

const rootReducer = combineReducers({
  // adminReducer,
  // userNameReducer,
  // counterReducer,
  // BottomNavigationBarReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
