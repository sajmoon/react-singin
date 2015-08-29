import {LOGIN_USER, LOGOUT_USER} from '../Constants';
import BaseStore from './BaseStore.js';
import Dispatcher from '../Dispatcher.js';

class LoginStore extends BaseStore {
  constructor() {
    super();
    this._loadFromLocalStorage();
    this.subscribe(() => this._registerToActions.bind(this));
  }

  _loadFromLocalStorage() {
    this._token = localStorage.getItem('token');
    this.emitChange();
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case  LOGIN_USER:
        this._token = action.token;
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._token = '';
        this.emitChange();
        break;
      default:
        break;
    }
  }

  isLoggedIn() {
    return !!this._token;
  }

  getToken() {
    return this._token;
  }
}

export default new LoginStore();
