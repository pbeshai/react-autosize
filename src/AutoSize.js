import React from 'react/addons';

/**
 * Component for automatically setting a width prop to the DOM node of the first child
 */
const AutoSize = React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  getInitialState() {
    return {
      width: null,
      height: null
    };
  },

  componentDidMount() {
    this._updateWidth();
  },

  componentDidUpdate() {
    // need this here to auto resize when window size changes
    if (this._shouldUpdateWidth()) {
      this._updateWidth();
    }
  },

  // Returns true if width prop is auto and the dom node width is different than the stored state width
  _shouldUpdateWidth() {
    const domWidth = this._getDOMDimensions().width;
    return this.state.width !== domWidth;
  },

  // When we update width, we need to recalculate the chart components
  _updateWidth() {
    this.setState(this._getDOMDimensions());
  },

  _getDOMDimensions() {
    const node = React.findDOMNode(this);
    // we need to use parentNode to get the effective height, otherwise we could just use node.offsetWidth
    const { parentNode } = node;

    // take offset dimensions minus padding
    const padding = {
      top: paddingToNumber(parentNode.style.paddingTop),
      right: paddingToNumber(parentNode.style.paddingRight),
      bottom: paddingToNumber(parentNode.style.paddingBottom),
      left: paddingToNumber(parentNode.style.paddingLeft)
    };

    function paddingToNumber(padding) {
      return !padding ? 0 : parseInt(padding, 10);
    }

    /* note there is a bug when the parent is position absolute top:0, bottom:0
     * setting the dimensions of the inside causes a scrollbar to be added if
     * the relative parent of the absolutely positioned element is the body
     */
    return {
      width: parentNode.offsetWidth - padding.left - padding.right,
      height: parentNode.offsetHeight - padding.top - padding.bottom
    };
  },

  render() {
    if (React.Children.count(this.props.children) > 1) {
      console.warn('AutoSize only works with a single child element.');
    }

    const { width, height } = this.state;
    const child = this.props.children;
    const newChild = React.addons.cloneWithProps(child, { width, height });
    return <div className='react-autosize'>{newChild}</div>;
  }
});

export default AutoSize;
