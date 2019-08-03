import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountSpeed from '../CountSpeed/CountSpeed';
import CounterRoundsInput from '../CounterRoundsInput/CounterRoundsInput';
import CountToNumber from '../CountToNumber/CountToNumber';
import { StartButton } from '../../GeneralComponents/StartButton';
import CounterRestTimer from '../CounterRestTimer/CounterRestTimer';
import { ChangeMainPageTitle } from '../../TitleComponent/TitleComponentActions';
import { ChangeToCountForMeWorkout } from './CountForMeActions';

class CountForMe extends Component {
    componentWillMount(){
        this.props.ChangeMainPageTitle("Count For Me")
        this.props.ChangeToCountForMeWorkout()
    }
    render(){
        return(
            <div className="container">
                <CountToNumber />
                <CountSpeed />
                <CounterRoundsInput />
                <CounterRestTimer />
                <StartButton onClick={() => console.log("clicked!")} value="START" />
            </div>
        );
    }
}

const actions = {
    ChangeToCountForMeWorkout,
    ChangeMainPageTitle
}

export default connect(null,actions)(CountForMe);