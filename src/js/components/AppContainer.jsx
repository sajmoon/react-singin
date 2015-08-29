import React from 'react';
import App from './App.jsx';

export default React.createClass({
  _onChange() {
    // this.setState(TodoStore.getAll());
  },

  getInitialState() {
    return {}; //TodoStore.getAll();
  },

  componentDidMount() {
    // TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    // TodoStore.removeChangeListener(this._onChange);
  },

  handleAuthentication(e) {
  },

  handleClear(e) {
    ActionCreator.clearList();
  },

  render() {
    return (
      <App
        onAuthenticate={this.handleAuthentication} />
    );
  }
});
