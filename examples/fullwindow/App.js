import React from 'react';
import AutoSize from 'src/AutoSize';
import RandomCircles from './RandomCircles';

const App = React.createClass({
  render() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <AutoSize>
          <RandomCircles />
        </AutoSize>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content'));

export default App;
