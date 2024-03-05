import { combineReducers } from "redux";
import { counterReducer } from "./CounterReducer";

const reducers = combineReducers({
    counterReducer: counterReducer
})

export default reducers