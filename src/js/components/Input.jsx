import Radium from 'radium';
import React from 'react';
import Label from './Label.jsx';

var RP = React.PropTypes;

class Input extends React.Component {
  render() {
    return (
      <div>
        <Label text={this.props.text} />
        <input type={this.props.type} onChange={this.props.onChange} value={this.props.value} className="input" style={style} />
      </div>
    );
  }
};

Input.propTypes = {
  type: RP.string,
  text: RP.string
};

Input.defaultProps = {
  type: "text",
  text: ""
};

let style = {
  lineHeight: "2.5em",
  paddingLeft: "1em",
  fontSize: "1em"
};

module.exports = Radium(Input);
