interface Action {
    type: string
    tag: string
    tags? : Array<string> 
}

const DEL = 'remove';
const ADD = 'add';
const SET = 'set';

const defaultState: Array<string> = [];

export function tagsReducer(state = defaultState, action: Action): Array<string> {
  switch (action.type) {
    case DEL:
        return state.filter(tag => tag !== action.tag)
    case ADD:
        return state.concat([action.tag])
    case SET:
        return state = action.tags ?? []
    default:
        return state;
  }
}

export const del = (tag: string) => ({ type: DEL, tag });
export const addTagRedux = (tag: string) => ({ type: ADD, tag });
export const set = (tags: string[]) => ({ type: SET, tags });
