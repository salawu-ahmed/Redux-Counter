import { createContext, useReducer } from "react";

export const CounterContext = createContext()

// STATE
const initialState = {
    contextCount: 7,
    players: 9,
    refrees: 2
}

// ACTION CREATOR FUNCTIONS
export const increaseBy2 = (contextCount) => {
    return {
        type: "COUNT/INCREASEBY2",
        payload: {
            contextCount: contextCount + 2
        }
    }
}
export const decreaseBy2 = (contextCount) => {
    return {
        type: "COUNT/INCREASEBY2",
        payload: {
            contextCount: contextCount - 2
        }
    }
}

// REDUCER
const counterReducer = (state,action) => {
    switch (action.type) {
        case "COUNT/INCREASEBY2":
            console.log(state);
            return {...state, contextCount: action.payload.contextCount}
        case "COUNT/DECREASEBY2":
            console.log(state);
            return {...state, contextCount: action.payload.contextCount}    
        default:
            return state
    }
}

export const CounterContextProvider = (props) => {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    return (
    <CounterContext.Provider value={{
        contextCount: state.contextCount,
        refrees: state.refrees,
        dispatch
    }}>
        {props.children}
    </CounterContext.Provider>
)}