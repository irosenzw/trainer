// return timerStatus as followes :
// CLEAR : no workout taking place - start button wasn't pressed, or workout ended
// STOPPED : stop button was pushed
// ACTIVE : workout is active - timer is on countdown
export const TimerStatus = (state = {timerStatus: "CLEAR"}, action) => {
    if (action.type !== "CLEAR" && action.type !== "PAUSED" && action.type !== "ACTIVE"){
        return state
    }

    return {timerStatus: action.type }
}

// return workoutStatus as followes :
// NONE : no workout taking place - start button wasn't pressed, or workout ended
// INTERVAL : workout time
// REST : rest time
export const WorkoutStatus = (state = {workoutStatus: "NONE"}, action) => {
    if (action.type !== "NONE" && action.type !== "INTERVAL" && action.type !== "REST"){
        return state
    }

    return { workoutStatus: action.type }
}

export const RemainingSeconds = ( state = { remainingSeconds: 0 }, action) => {
    if (action.type === 'REMAINING_SECONDS'){
        return { remainingSeconds: action.payload }
    }

    return state
}

export const CurrentRound = (state = { currentRound: 1}, action) => {
    switch (action.type){
        case "CLEAR_ROUNDS":
            return { currentRound: 1 }
        case "NEXT_ROUND":
            return { currentRound: state.currentRound + 1}
        default:
            return state
    }
}

export const WorkoutType = (state = { workoutType: null}, action) => {
    switch (action.type){
        case "NO_WORKOUT":
            return { workoutType: null}
        case "INTERVAL_WORKOUT":
            return { workoutType: "INTERVAL"}
        case "COUNT_FOR_ME_WORKOUT":
            return { workoutType: "COUNT_FOR_ME"}
        default:
            return state
    }
}

export const TimerClockRounds = (state = { timerClockRounds: 1}, action) => {
    if (action.type === "TIMER_CLOCK_ROUNDS"){
        return { timerClockRounds: action.payload}
    }
    return state
}

export const TimerClockWorkoutSeconds = (state = { timerClockWorkoutSeconds: 1}, action) => {
    if (action.type === "TIMER_CLOCK_WORKOUT_TIME"){
        return { timerClockWorkoutSeconds: action.payload}
    }
    return state
}

export const TimerClockRestSeconds = (state = { timerClockRestSeconds: 0}, action) => {
    if (action.type === "TIMER_CLOCK_REST_TIME"){
        return { timerClockRestSeconds: action.payload}
    }
    return state
}

export const TimerClockSpeed = (state = { timerClockSpeed: 1000 }, action) => {
    if (action.type === "TIMER_CLOCK_SPEED") {
        return { timerClockSpeed: action.payload}
    }
    return state
}