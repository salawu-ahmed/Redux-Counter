
const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "COUNT/INCREASE":
            console.log(state);
            return {...state, count: action.payload.count};
        case "COUNT/DECREASE":
            return {...state, count: action.payload.count}
                
        default:
            return state;
    }
}