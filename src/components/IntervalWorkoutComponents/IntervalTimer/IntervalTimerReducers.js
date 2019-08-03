export const ChangeIntervalTime = (state = {intervalWorkoutSeconds: 0}, action) => {
    switch (action.type) {
        case 'INTERVAL_MIN_PLUS':
            return {intervalWorkoutSeconds: state.intervalWorkoutSeconds + 60}
        case 'INTERVAL_MIN_MINUS':
            return {intervalWorkoutSeconds: state.intervalWorkoutSeconds - 60}
        case 'INTERVAL_SEC_PLUS':
            return {intervalWorkoutSeconds: state.intervalWorkoutSeconds + 1}
        case 'INTERVAL_SEC_MINUS':
            return {intervalWorkoutSeconds: state.intervalWorkoutSeconds - 1}
        case 'INTERVAL_SEC_CLEAR':
            return {intervalWorkoutSeconds: Math.floor(state.intervalWorkoutSeconds / 60)}
        case 'INTERVAL_MIN_CLEAR':
            return {intervalWorkoutSeconds: state.intervalWorkoutSeconds % 60}
        case 'INTERVAL_CLEAR':
            return {intervalWorkoutSeconds: 0}
        default:
            return state;
    }
};