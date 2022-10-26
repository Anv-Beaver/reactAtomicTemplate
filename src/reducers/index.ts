import {combineReducers} from "redux";
import { ExampleReducer } from "./ExampleReducer";

const rootReducer = combineReducers({
  ExampleReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
