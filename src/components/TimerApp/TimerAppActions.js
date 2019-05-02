export const TimerClear = () => {
    return {
        type: 'CLEAR'
    };
};

export const TimerStopped = () => {
    return {
        type: 'STOPPED'
    };
};

export const TimerActive = () => {
    return {
        type: 'ACTIVE'
    }
}

export const WorkoutFinished = () => {
    return {
        type: 'WORKOUT_FINISHED'
    }
}

export const WorkoutStarted = () => {
    return {
        type: 'WORKOUT_STARTED'
    }
}

export const WorkoutNotStarted = () => {
    return {
        type: 'WORKOUT_NOT_STARTED'
    }
}

export const WorkoutNone = () => {
    return {
        type: 'NONE'
    };
};

export const WorkoutInterval = () => {
    return {
        type: 'INTERVAL'
    };
};

export const WorkoutRest = () => {
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