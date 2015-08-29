import Radium from 'radium';
import React from 'react';
import Spinner from 'react-spinkit';

class LoadIndicator extends React.Component {
  render() {
    return (
      <span>
        <Spinner style={spinnerStyle} spinnerName='wave' noFadeIn/>
      </span>
    );
  }
}

module.exports = Radium(LoadIndicator);

let spinnerStyle = {
  color: "white",
  paddingBottom: "10px"
};

