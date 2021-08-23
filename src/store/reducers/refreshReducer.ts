const REFRESH = "refresh"

export interface RefresherState {
    refresher: boolean;
}

const initState: RefresherState = {
    refresher: false
}

export const refreshReducer = (state: RefresherState = initState, action: any): RefresherState => {
    switch (action.type) {
        case REFRESH:
            return {
                ...state,
                refresher: !state.refresher
            }
        default: 
            return state;
    }
} 

export const refresh = () => ({type: REFRESH}) 