import React from 'react';
import Input from './Input.jsx';

export default React.createClass({
  render() {
    return (
      <Input value={this.props.value} onChange={this.props.onChange} text="Password:" type="password"/>
    );
  }
});
