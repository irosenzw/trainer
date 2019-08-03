export const TimerClear = () => {
    return {
        type: 'CLEAR'
    };
};

export const TimerPaused = () => {
    return {
        type: 'PAUSED'
    };
};

export const TimerActive = () => {
    return {
        type: 'ACTIVE'
    }
}

export const WorkoutNone = () => {
    return {
        type: 'NONE'
    };
};

export const WorkoutTime = () => {
    return {
        type: 'WORKOUT'
    };
};

export const RestTime = () => {
    return {
        type: 'REST'
    }
}

export const CurrentTime = (remainingSeconds) => {
    return {
        type: 'REMAINING_SECONDS',
        payload: remainingSeconds
    }
}

export const NextRound = () => {
    return {
        type: 'NEXT_ROUND'
    }
}

export const ClearRounds = () => {
    return {
        type: 'CLEAR_ROUNDS'
    }
}

export const SetTimerClockRounds = (rounds) => {
    return {
        type: 'TIMER_CLOCK_ROUNDS',
        payload: rounds
    }
}

export const SetTimerClockWorkoutTime = (workoutTime) => {
    return {
        type: 'TIMER_CLOCK_WORKOUT_TIME',
        payload: workoutTime
    }
}

export const SetTimerClockRestTime = (restTime) => {
    return {
        type: 'TIMER_CLOCK_REST_TIME',
        payload: restTime
    }
}

export const SetTimerClockSpeed = (speed) => {
    return {
        type: 'TIMER_CLOCK_SPEED',
        payload: speed
    }
}