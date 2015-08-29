import Config from './Config.jsx';
import when from 'when';
import request from 'reqwest';
import LoginAction from '../actions/LoginAction';

class AuthService {

  login(email, password) {
    return request({
      url: Config.url.authUrl,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        email, password
      }
    }).then( (res) => {
      let token = res.token;
      LoginAction.loginUser(token);
    });
  }

  logout() {
    return when(LoginAction.logout());
  }
}

export default new AuthService();
