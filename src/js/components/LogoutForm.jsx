import React from 'react';
import LoginStore from '../stores/LoginStore.js';
import Button from './Button.jsx';
import Auth from './AuthService.js';

class LogoutForm extends React.Component {
  constructor() {
    super();
    this.state = this._getLoginState();
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  _onChange() {
    console.log("on change");
    this.setState(this._getLoginState());
  }

  _getLoginState() {
    console.log("GetLoginState");
    return {
      userLoggedIn: LoginStore.isLoggedIn(),
      token: LoginStore.getToken()
    };
  }

  signout(e) {
    // this.setState({working: true});
    Auth.logout()
    .catch( (err) => {
      console.log("error", err);
    });
  }

  render() {
    return (
      <div className="authenticationBox" style={ !this.state.userLoggedIn ? { display: "none"} : null}>
        <p>Signed in</p>
        <Button working={this.state.working} onClick={this.signout} text="Signout" />
      </div>
    );
  }
};

export default LogoutForm;

