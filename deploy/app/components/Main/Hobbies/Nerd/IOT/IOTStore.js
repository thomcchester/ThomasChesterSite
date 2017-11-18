import alt from '../../../../../alt';
import IOTActions from './IOTActions';

class IOTStore {
  constructor() {
    this.bindActions(IOTActions);
  }

}

export default alt.createStore(IOTStore);
