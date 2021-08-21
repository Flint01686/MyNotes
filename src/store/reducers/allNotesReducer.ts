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

const defaultState: Note[] = [];

export function notesReducer(state = defaultState, action: Action): Array<Note> {
  switch (action.type) {
    case REMOVE_NOTE:
      return action.ids ? state.filter(
          ({id}) => id ? !action.ids?.includes(id) : true) : state;
    case ADD_NOTE:
      return action.newNotes ? state.concat(action.newNotes) : state;
    case SET_NOTE:
      return action.newNotes ?? [];
    case UPD_NOTE:
      return state.map(note => note.id === action.id ? action.note : note);
    default:
      return state;
  }
}

export const removeNote = (ids?: Array<number>) => ({ type: REMOVE_NOTE, ids });
export const addNoteForStore = (newNotes?: Array<Note>) => ({ type: ADD_NOTE, newNotes });
export const setNote = (newNotes?: Array<Note>) => ({ type: SET_NOTE, newNotes });
export const updNote = (note?: Note, id?: number) => ({ type: UPD_NOTE, note, id });
