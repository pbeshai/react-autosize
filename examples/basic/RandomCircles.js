import React from 'react';

const RandomCircles = React.createClass({
  propTypes: {
    height: React.PropTypes.number,
    width: React.PropTypes.number
  },

  render() {
    const { width, height } = this.props;
    if (!width || !height) {
      return null;
    }

    const circles = [];
    for (let i = 0; i < 50; i++) {
      circles.push({
        cx: Math.random() * width,
        cy: Math.random() * height,
        r: 10,
        fill: '#27AABB'
      });
    }

    return (
      <svg width={width} height={height}>
        {circles.map((c, i) => <circle key={i} {...c} />)}
      </svg>
    );
  }
});

React.render(<RandomCircles />, document.getElementById('content'));

export default RandomCircles;
