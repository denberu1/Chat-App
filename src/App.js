import React, { PureComponent } from 'react';

import AppLayout from './layout';
import { DebugInfo } from './components';

class App extends PureComponent {
  render() {
    return (
      <div className='mainWrap'>
        <div className='appTitle'>Real-Time Chat App v.0.0.1</div>
        <AppLayout />
        <DebugInfo />
        <div className='appCredits'>Just for Fun! By Sviatoslav Kuzhelev. 2019</div>
      </div>
    );
  }
}

export default App;
