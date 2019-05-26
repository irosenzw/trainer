import React, { Component } from 'react';
import TimerApp from './components/TimerApp/TimerApp';
import CountForMe from './components/CountForMeComponent/CountForMe'
import Wrapper from './components/Wrapper/Wrapper';

const MainApp = () => {
    return(
      <div>
        <Wrapper pageTitle="asd">
          <CountForMe />
        </Wrapper>
      </div>
    )
}

export default MainApp;
