const SWITCH_TOGGLE = "SWITCH_TOGGLE"

export interface ToggleState {
    isToggleOn: boolean;
}

const initState: ToggleState = {
    isToggleOn: false
}

export const toggleReducer = (state: ToggleState = initState, action: any): ToggleState => {
    switch (action.type) {
        case SWITCH_TOGGLE:
            return {
                ...state,
                isToggleOn: action.isToggleOn
            }
        default: 
            return state;
    }
} 

export const switchToggle = 
    (currentToggleState: boolean) => ({type: SWITCH_TOGGLE, isToggleOn: currentToggleState}) 