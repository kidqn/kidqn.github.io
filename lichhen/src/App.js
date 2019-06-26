import React from 'react';
import LichHen from './lichhen/lichhen';
import './index.scss';

class App extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div>
        <LichHen/>
      </div>
    );
  }
}

export default App;
