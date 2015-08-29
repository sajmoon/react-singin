import React, {PropTypes} from 'react';
import AuthenticationForm from './AuthenticationForm.jsx';
import LogoutForm from './LogoutForm.jsx';

export default React.createClass({
  propTypes: {
    currentUser: PropTypes.object,
    onAuthenticate: PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      tasks: []
    }
  },

  render() {
    let {onAuthenticate} = this.props;
    return (
      <div>
        <LogoutForm />
        <AuthenticationForm
          onAuthenticate={this.onAuthenticate}/>
      </div>
    );
  }
});
