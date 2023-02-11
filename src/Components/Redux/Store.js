import { createStore,combineReducers } from "redux";
import {birdReducer,likeReducer} from "./Reducer"

const rootReducer=combineReducers({birdReducer,likeReducer})
export const store=createStore(rootReducer)