import { Note } from "../../components/Interfaces/Note";

interface Action {
    type: string
    ids?: Array<number>
    newNotes?: Array<Note>
    id?: number
    note: Note
}

const REMOVE_NOTE = 'remove';
const ADD_NOTE = 'add';
const SET_NOTE = 'setNote';
const UPD_NOTE = 'updNote';

export interface allNotesStateI {
  notes: Note[];
}

const initState: allNotesStateI = {
  notes: []
}

export function notesReducer(state = initState, action: Action): allNotesStateI {
  switch (action.type) {
    case REMOVE_NOTE:
      return {
        ...state,
        notes: action.ids ? state.notes.filter(
          ({id}) => id ? !action.ids?.includes(id) : true) : state.notes};
    case ADD_NOTE:
      return {
        ...state,
        notes: action.newNotes ? state.notes.concat(action.newNotes) : state.notes}
    case SET_NOTE:
      console.log("state", {
        ...state,
        notes: action.newNotes ?? []});
      
      return {
        ...state,
        notes: action.newNotes ?? []};
    case UPD_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => note.id === action.id ? action.note : note)};
    default:
      return state;
  }
}

export const removeNote = (ids?: Array<number>) => ({ type: REMOVE_NOTE, ids });
export const addNoteForStore = (newNotes?: Array<Note>) => ({ type: ADD_NOTE, newNotes });
export const setNote = (newNotes?: Array<Note>) => ({ type: SET_NOTE, newNotes });
export const updNote = (note?: Note, id?: number) => ({ type: UPD_NOTE, note, id });
