
const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "COUNT/INCREASE":
            return {...state, count: count+1}
        case "COUNT/DECREASE":
            return {...state, count: count-1}
                
        default:
            return state;
    }
}