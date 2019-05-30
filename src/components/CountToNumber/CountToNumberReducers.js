export const CountTo = (state = { countToNumber: 10 } ,action) => {
    switch (action.type){
        case "PLUS_NUMBER":
            return { countToNumber: state.countToNumber + 1}
        case "MINUS_NUMBER":
            return { countToNumber: state.countToNumber - 1}
        default:
            return state
    }
}