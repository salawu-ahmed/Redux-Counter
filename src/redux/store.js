import { createStore, legacy_createStore } from "redux";
import reducers from "./reducers";

export const store = createStore(reducers)