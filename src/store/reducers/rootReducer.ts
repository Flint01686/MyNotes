import {combineReducers} from "redux";
import { toggleReducer, ToggleState } from "./toggleReducer";


export const rootReducer = combineReducers({
    toggle: toggleReducer,
})

export interface RootState {
    toggle: ToggleState
}