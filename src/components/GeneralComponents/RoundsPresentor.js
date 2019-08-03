import React from 'react';

const RoundsPresentor = (props) => {
    return(
        <div className="row justify-content-md-center">
            <div className="col d-flex justify-content-center">
                <h2>{props.currentRound} / {props.totalRounds}</h2>
            </div>
        </div>
    )
}

export default RoundsPresentor;
