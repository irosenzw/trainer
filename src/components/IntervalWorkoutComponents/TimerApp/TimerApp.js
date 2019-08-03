import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import IntervalRoundsInput from '../IntervalRoundsInput/IntervalRoundsInput';
import IntervalTimer from '../IntervalTimer/IntervalTimer';
import IntervalRestTimer from '../IntervalRestTimer/IntervalRestTimer';
import { ChangeMainPageTitle } from '../../TitleComponent/TitleComponentActions';
import { ChangeToIntervalWorkout } from './TimerAppActions';


class TimerApp extends Component {
  componentWillMount(){
    this.props.ChangeMainPageTitle("Interval Workout")
    this.props.ChangeToIntervalWorkout()
  }

  render() {
    return (
      <div className="container">
        <IntervalTimer />
        <IntervalRestTimer />
        <IntervalRoundsInput />
        <NavLink to="TimerClock">
          <button
              disabled={ this.props.intervalWorkoutSeconds > 0 ? false : true }
              className="btn btn-success btn-lg">
              START
          </button>
        </NavLink>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
    return {
      intervalWorkoutSeconds: state.ChangeIntervalTime.intervalWorkoutSeconds,
    };
}

const actions = {
  ChangeToIntervalWorkout,
  ChangeMainPageTitle
}

export default connect(mapStateToProps,actions)(TimerApp);
