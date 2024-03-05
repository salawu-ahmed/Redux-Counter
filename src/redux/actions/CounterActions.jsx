export const increaseCount = (count) => {
    return {
        type: "COUNT/INCREASE",
        payload: {
            count: count + 1
        }
    }
}
export const decreaseCount = (count) => {
    return {
        type: "COUNT/DECREASE",
        payload: {
            count: count - 1
        }
    }
}