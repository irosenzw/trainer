import React, {Component} from 'react';
import { connect } from 'react-redux';
import TimerInput from '../../GeneralComponents/TimerInput';

import {
    CounterRestMinPlus,
    CounterRestMinMinus,
    CounterRestSecPlus,
    CounterRestSecMinus,
} from './CounterRestTimerActions';

class CounterRestInput extends Component {
    render(){
        return(
            <TimerInput
                minusSecond={this.props.CounterRestSecMinus}
                plusSecond={this.props.CounterRestSecPlus}
                minusMinute={this.props.CounterRestMinMinus}
                plusMinute={this.props.CounterRestMinPlus}
                seconds={this.props.CounterRestSeconds}
                title="Rest Time"
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        CounterRestSeconds: state.ChangeCounterRestTime.counterRestSeconds
    };
}

const actions = {
    CounterRestMinPlus,
    CounterRestMinMinus,
    CounterRestSecPlus,
    CounterRestSecMinus,
}

export default connect(mapStateToProps,actions)(CounterRestInput);