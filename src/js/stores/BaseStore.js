import assign from 'object-assign';
import Constants from '../Constants';
import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher.js';

export default class BaseStore extends EventEmitter {
  constructor() {
    super();
  }

  subscribe(actionSubscribe) {
    this._dispatchToken = Dispatcher.register(actionSubscribe());
  }

  getDispatchToken() {
    return this._dispatchToken;
  }

  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }

  addChangeListener(cb) {
    this.on(Constants.CHANGE_EVENT, cb)
  }

  removeChangeListener(cb) {
    this.removeListener(Constants.CHANGE_EVENT, cb);
  }
};
