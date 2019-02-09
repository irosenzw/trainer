import React, { Component } from 'react';


class TimerInput extends Component {

    render() {
        return (
            <div style={{marginLeft:100}}>
                <h3>Insert Time for a round</h3>
                <input type="number" onChange={this.props.handleChange} required />
            </div>
        );
    }
}

export default TimerInput;