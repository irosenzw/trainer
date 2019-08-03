import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import TimerApp from './components/IntervalWorkoutComponents/TimerApp/TimerApp';
import CountForMe from './components/CountForMeConponents/CountForMe/CountForMe';
import TimerClock from './components/TimerClock/TimerClock';
import Wrapper from './components/Wrapper/Wrapper';

class MainApp extends Component {
  render() {
    return(
      <div>
        <Wrapper>
          <Route exact={true} path="/IntervalWorkout" component={TimerApp} />
          <Route exact={true} path="/CountForMe" component={CountForMe} />
          <Route exact={true} path="/TimerClock" component={TimerClock} />
        </Wrapper>
      </div>
    )
  }
}

export default MainApp;
