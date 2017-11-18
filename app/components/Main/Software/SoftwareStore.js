import alt from '../../../alt';
import SoftwareActions from './SoftwareActions';

class SoftwareStore {
  constructor() {
    this.bindActions(SoftwareActions);
  }

}

export default alt.createStore(SoftwareStore);
