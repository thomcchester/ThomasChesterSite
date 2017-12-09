import alt from '../../../alt';
import HobbiesActions from './HobbiesActions';

class HobbiesStore {
  constructor() {
    this.bindActions(HobbiesActions);
  }

}

export default alt.createStore(HobbiesStore);
