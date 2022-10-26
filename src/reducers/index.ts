import {combineReducers} from "redux";

const rootReducer = combineReducers({
  // adminReducer,
  // userNameReducer,
  // counterReducer,
  // BottomNavigationBarReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
