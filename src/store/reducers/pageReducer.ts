interface PageI {
    page?: number;
    type: string
}

const SET_PAGE = 'setPageStore';
const NEXT_PAGE = 'nextPageStore';
const PREV_PAGE = 'prevPageStore';

export interface pageStateI {
  page: number;
}

const initState: pageStateI = {
    page: 0,
}

export function pageReducer(state = initState, action: PageI): pageStateI {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page ?? 0
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    case PREV_PAGE:
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
}

export const setPageStore = (page: number) => ({ type: SET_PAGE, page });
export const nextPageStore = () => ({ type: NEXT_PAGE });
export const prevPageStore = () => ({ type: PREV_PAGE });