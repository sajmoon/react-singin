import Radium from 'radium';
import React, {PropTypes} from 'react';
import LoadIndicator from './LoadIndicator.jsx';

import Config from './Config.jsx';

import extra from "react/addons";


class Button extends React.Component {
  render() {
    let {working, text} = this.props;
    let ReactCSSTransitionGroup = extra.addons.CSSTransitionGroup;
    return (
      <ReactCSSTransitionGroup transitionName="example">
        <button onClick={this.props.onClick} className="button" style={style}>
          { working ? <LoadIndicator /> : null }
          {text}
        </button>
      </ReactCSSTransitionGroup>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  working: PropTypes.bool
};

module.exports = Radium(Button);

let style = {
  border: "0",
  borderRadius: Config.baseBorderRadius,
  backgroundColor: Config.actionColor,
  color: "#fff",
  padding: Config.baseSpacing,
  fontWeight: "600",
  WebkitTransition: "all",
  lineHeight: "1",
  ':hover': {
    backgroundColor: '#0074d9'
  },
  ':focus': {
    backgroundColor: '#0074d9'
  },
  fontSize: Config.baseFontSize
};

