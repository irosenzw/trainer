import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimerInput from '../../GeneralComponents/TimerInput';

import {
    IntervalMinPlus,
    IntervalMinMinus,
    IntervalSecPlus,
    IntervalSecMinus,
} from './IntervalTimerActions';

class IntervalInput extends Component {
    render() {
        return(
            <TimerInput
                minusSecond={this.props.IntervalSecMinus}
                plusSecond={this.props.IntervalSecPlus}
                minusMinute={this.props.IntervalMinMinus}
                plusMinute={this.props.IntervalMinPlus}
                seconds={this.props.intervalWorkoutSeconds}
                title="Interval Time:"
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        intervalWorkoutSeconds: state.ChangeIntervalTime.intervalWorkoutSeconds,
    };
}

const actions = {
    IntervalMinPlus,
    IntervalMinMinus,
    IntervalSecPlus,
    IntervalSecMinus,
}

export default connect(mapStateToProps,actions)(IntervalInput);