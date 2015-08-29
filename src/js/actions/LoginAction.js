import Dispatcher from '../Dispatcher'
import {LOGIN_USER, LOGOUT_USER} from '../Constants';

export default {
  loginUser: (token) => {
    console.log("login user");
    localStorage.setItem('token', token);

    Dispatcher.dispatch({
      actionType: LOGIN_USER,
      token: token
    });
  },

  logout: () => {
    localStorage.setItem('token', '');
    Dispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
} 

