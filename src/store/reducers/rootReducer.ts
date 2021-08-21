import {combineReducers} from "redux";
import { Note } from "../../components/Interfaces/Note";
import { notesReducer } from "./allNotesReducer";
import { tagsReducer } from "./tagsReducer";
import { toggleReducer, ToggleState } from "./toggleReducer";


export const rootReducer = combineReducers({
    toggle: toggleReducer,
    notes: notesReducer,
    tags: tagsReducer
})

export interface RootState {
    toggle: ToggleState,
    notes: Array<Note>,
    tags: Array<string>
}