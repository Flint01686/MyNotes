import {combineReducers} from "redux";
import { Note } from "../../components/Interfaces/Note";
import { allNotesStateI, notesReducer } from "./allNotesReducer";
import { pinnedNotesReducer, pinNotesStateI } from "./pinnedNotes";
import { RefresherState, refreshReducer } from "./refreshReducer";
import { tagsReducer } from "./tagsReducer";
import { toggleReducer, ToggleState } from "./toggleReducer";


export const rootReducer = combineReducers({
    toggle: toggleReducer,
    notes: notesReducer,
    tags: tagsReducer,
    refresher: refreshReducer,
    pinnedNotes: pinnedNotesReducer
})

export interface RootState {
    toggle: ToggleState,
    refresher: RefresherState,
    notes: allNotesStateI,
    pinnedNotes: pinNotesStateI,
    tags: Array<string>
}