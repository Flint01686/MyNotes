import {combineReducers} from "redux";
import { Note } from "../../components/Interfaces/Note";
import { allNotesStateI, notesReducer } from "./allNotesReducer";
import { RefresherState, refreshReducer } from "./refreshReducer";
import { tagsReducer } from "./tagsReducer";
import { toggleReducer, ToggleState } from "./toggleReducer";


export const rootReducer = combineReducers({
    toggle: toggleReducer,
    notes: notesReducer,
    tags: tagsReducer,
    refresher: refreshReducer,
})

export interface RootState {
    toggle: ToggleState,
    refresher: RefresherState,
    notes: allNotesStateI,
    tags: Array<string>
}