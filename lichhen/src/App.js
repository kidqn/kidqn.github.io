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
        <div className="header"><h2>Nha Khoa Kim</h2></div>
        <div className="sidebar"></div>
        <LichHen/>
      </div>
    );
  }
}

export default App;
