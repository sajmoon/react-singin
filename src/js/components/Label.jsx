import React from 'react';

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      text: "Enter something"
    }
  },

  style: {
    textTransform: "uppercase",
    fontSize: "12px",
    marginBottom: "2px"
  },

  render() {
    return (
      <label style={this.style}>{this.props.text}</label>
    );
  }
});
