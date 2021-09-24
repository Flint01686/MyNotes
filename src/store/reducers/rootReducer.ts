import {combineReducers} from "redux";
import { allNotesStateI, notesReducer } from "./allNotesReducer";
import { pinnedNotesReducer, pinNotesStateI } from "./pinnedNotes";
import { RefresherState, refreshReducer } from "./refreshReducer";
import { toggleReducer, ToggleState } from "./toggleReducer";


export const rootReducer = combineReducers({
    toggle: toggleReducer,
    notes: notesReducer,
    refresher: refreshReducer,
    pinnedNotes: pinnedNotesReducer
})

export interface RootState {
    toggle: ToggleState,
    refresher: RefresherState,
    notes: allNotesStateI,
    pinnedNotes: pinNotesStateI,
}