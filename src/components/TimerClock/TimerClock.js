import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from '../GeneralComponents/Timer';
import RoundsPresentor from '../GeneralComponents/RoundsPresentor';
import { ChangeMainPageTitle } from '../TitleComponent/TitleComponentActions';

import {
    TimerClear,
    TimerPaused,
    TimerActive,
    WorkoutNone,
    RestTime,
    CurrentTime,
    ClearRounds,
    NextRound,
    SetTimerClockRounds,
    SetTimerClockWorkoutTime,
    SetTimerClockRestTime,
    SetTimerClockSpeed,
} from './TimerClockActions';

class TimerClock extends Component {
    constructor(props){
        super(props);
        this.intervalHandle = null;
        this.tickTime = 1000 // should be 1000 for production. change to 100 for testing
    }

    setTimerProps(rounds,workoutSeconds,restSeconds,speed){
        this.props.SetTimerClockRounds(rounds)
        this.props.SetTimerClockWorkoutTime(workoutSeconds)
        this.props.SetTimerClockRestTime(restSeconds)
        this.props.SetTimerClockSpeed(speed)
    }

    componentWillMount() {
        console.log("Countdown started")
        this.props.TimerActive()
        if (this.props.workoutType === "INTERVAL"){
            this.setTimerProps(
                this.props.intervalRounds,
                this.props.intervalWorkoutSeconds,
                this.props.intervalRestSeconds,
                1000
            )
        }
        if (this.props.workoutType === "COUNT_FOR_ME"){
            this.setTimerProps(
                this.props.counterRounds,
                this.props.countToNumber, //counter - not seconds
                this.props.counterRestSeconds,
                this.props.countSpeed

            )
        }
        this.props.CurrentTime(this.props.intervalSeconds)
        this.intervalHandle = setInterval(this.tick, this.tickTime);
    }

    nextRound = () => {
        console.log(this.props.rounds)
        console.log(this.props.currentRounds)
        if (this.props.rounds === this.props.currentRound){
          // Workout ended
          this.stopCountDown()
        } else {
          this.props.NextRound()
          this.props.CurrentTime(this.props.intervalSeconds) // updates 'this.props.remainingSeconds'
          this.props.WorkoutInterval()
        }
    }

    tick = () => {
        if (this.props.remainingSeconds > 0){
          this.props.CurrentTime(this.props.remainingSeconds - 1)
        } else if (this.props.restTime > 0 && this.props.workoutStatus === "INTERVAL") {
            this.props.WorkoutRest()
            this.props.CurrentTime(this.props.restTime)
        } else {
          this.nextRound()
        }
    }

    continueCountDown = () => {
        console.log("Countdown continued")
        this.props.TimerActive()
        this.intervalHandle = setInterval(this.tick, this.props.timerClockSpeed);
    }

    pauseCountDown = () => {
        console.log("Countdown stopped")
        clearInterval(this.intervalHandle)
        this.props.TimerPaused()
    }

    stopCountDown = () => {
        console.log("Countdown has been reset")
        clearInterval(this.intervalHandle)
        this.props.TimerClear()
        this.props.WorkoutNone()
        this.props.ClearRounds()
    }
    render(){
        return(
            <div className="container">
                <Timer
                    title={this.props.workoutStatus === "INTERVAL" ? "Workout" : "Rest"}
                    minutes={Math.floor(this.props.remainingSeconds / 60)}
                    seconds={this.props.remainingSeconds % 60}
                    //playSound={true}
                />
                <br/><br/>
                <RoundsPresentor
                    currentRound={this.props.currentRound}
                    totalRounds={this.props.rounds}
                />
                <br/><br/><br/>
                <div className="row justify-content-md-center">
                    <div className="col d-flex justify-content-center">
                        { this.props.timerStatus === "PAUSED" &&
                            <div>
                                <button
                                    className="btn btn-success btn-lg"
                                    onClick={this.continueCountDown}>
                                    CONTINUE
                                </button>
                                <button
                                    className="btn btn-warning btn-lg"
                                    onClick={this.stopCountDown}>
                                    STOP
                                </button>
                            </div>
                        }
                        { this.props.timerStatus === "ACTIVE" &&
                            <button
                                className="btn btn-danger btn-lg"
                                onClick={this.pauseCountDown}>
                                PAUSE
                            </button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        intervalWorkoutSeconds: state.ChangeIntervalTime.intervalWorkoutSeconds,
        intervalRestSeconds: state.ChangeIntervalRestTime.intervalRestSeconds,
        intervalRounds: state.IntervalRoundsCount.intervalRounds,

        countToNumber: state.CountTo.countToNumber,
        counterRestSeconds: state.ChangeCounterRestTime.counterRestSeconds,
        counterRounds: state.CounterRoundsCount.counterRounds,
        countSpeed: state.CountSpeed.countSpeed,

        timerClockRounds: state.TimerClockRounds.timerClockRounds,
        timerClockWorkoutSeconds: state.TimerClockWorkoutSeconds.timerClockWorkoutSeconds,
        timerClockRestSeconds: state.TimerClockRestSeconds.timerClockRestSeconds,
        timerClockSpeed: state.TimerClockSpeed.timerClockSpeed,

        timerStatus: state.TimerStatus.timerStatus, // active or paused
        workoutStatus: state.WorkoutStatus.workoutStatus, // rest or workout
        remainingSeconds: state.RemainingSeconds.remainingSeconds,
        currentRound: state.CurrentRound.currentRound,

        workoutType: state.WorkoutType.workoutType // interval or count-for-me
    }
}

const actions = {
  TimerClear,
  TimerPaused,
  TimerActive,
  WorkoutNone,
  RestTime,
  CurrentTime,
  ClearRounds,
  NextRound,
  ChangeMainPageTitle,
  SetTimerClockRounds,
  SetTimerClockWorkoutTime,
  SetTimerClockRestTime,
  SetTimerClockSpeed
}

export default connect(mapStateToProps,actions)(TimerClock);


