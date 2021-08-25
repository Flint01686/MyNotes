import { Note } from "../../components/Interfaces/Note";

interface Action {
    type: string
    ids?: Array<number>
    newNotes?: Array<Note>
    id?: number
    note: Note
}

const REMOVE_PIN_NOTE = 'removePinNote';
const ADD_PIN_NOTE = 'addPinNoteForStore';
const SET_PIN_NOTE = 'setPinNote';
const UPD_PIN_NOTE = 'updPinNote';

export interface pinNotesStateI {
  pinnedNotes: Note[];
}

const initState: pinNotesStateI = {
  pinnedNotes: []
}

export function pinnedNotesReducer(state = initState, action: Action): pinNotesStateI {
  switch (action.type) {
    case REMOVE_PIN_NOTE:
      return {
        ...state,
        pinnedNotes: action.ids ? state.pinnedNotes.filter(
          ({id}) => id ? !action.ids?.includes(id) : true) : state.pinnedNotes};
    case ADD_PIN_NOTE:
      return {
        ...state,
        pinnedNotes: action.newNotes ? state.pinnedNotes.concat(action.newNotes) : state.pinnedNotes}
    case SET_PIN_NOTE:
      return {
        ...state,
        pinnedNotes: action.newNotes ?? []};
    case UPD_PIN_NOTE:
      return {
        ...state,
        pinnedNotes: state.pinnedNotes.map(note => note.id === action.id ? action.note : note)};
    default:
      return state;
  }
}

export const removePinNote = (ids?: Array<number>) => ({ type: REMOVE_PIN_NOTE, ids });
export const addPinNoteForStore = (newNotes?: Array<Note>) => ({ type: ADD_PIN_NOTE, newNotes });
export const setPinNote = (newNotes?: Array<Note>) => ({ type: SET_PIN_NOTE, newNotes });
export const updPinNote = (note?: Note, id?: number) => ({ type: UPD_PIN_NOTE, note, id });
