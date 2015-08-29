import React, {PropTypes} from 'react';
import Button from './Button.jsx';
import Input from './Input.jsx';
import Password from './Password.jsx';
import Auth from './AuthService.js'
import when from 'when';
import LoginStore from '../stores/LoginStore.js';

export default React.createClass({
  getInitialState() {
    return {
      working: false,
      currentUser: null,
      email: '',
      password: '',
      userLoggedIn: LoginStore.isLoggedIn()
    }
  },

  componentDidMount() {
    this.changeListener = this._onChange;
    LoginStore.addChangeListener(this.changeListener);
  },

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  },

  _onChange() {
    this._updateState();
  },

  _updateState() {
    this.setState({userLoggedIn: LoginStore.isLoggedIn()});
  },

  login(e) {
    e.preventDefault();

    this.setState({working: true});
    Auth.login(this.state.email, this.state.password)
    .then( () => {
      this.setState({working: false});
    })
    .catch( (err) => {
      console.log("error", err);
    });
  },

  handleChangeEmail(e) {
    this.setState({email: e.target.value});
  },
  handleChangePassword(e) {
    this.setState({password: e.target.value});
  },

  render() {
    let {onAuthenticate} = this.props;

    return (
      <div style={ this.state.userLoggedIn ? { display: "none" } : null } className="authenticationBox">
        <h1>Autheticate</h1>{this.state.isLoggedIn}
        <form>
          <Input onChange={this.handleChangeEmail} value={this.state.email} text="Email:" />
          <Password onChange={this.handleChangePassword} value={this.state.password} />
        </form>
        <Button working={this.state.working} onClick={this.login} text="Submit" />
      </div>
    );
  }
});
