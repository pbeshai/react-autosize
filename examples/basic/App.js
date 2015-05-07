import React from 'react';
import AutoSize from 'src/AutoSize';
import RandomCircles from './RandomCircles';

const App = React.createClass({

  getInitialState() {
    return {
      width: 500,
      height: 400
    };
  },

  _handleClick() {
    this.setState({
      width: Math.random() * 200 + 400,
      height: Math.random() * 100 + 350
    });
  },

  render() {
    const { width, height } = this.state;

    return (
      <div>
        <button onClick={this._handleClick}>Change Size</button>
        <div style={{ width, height }}>
          <AutoSize>
            <RandomCircles />
          </AutoSize>
        </div>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content'));

export default App;
