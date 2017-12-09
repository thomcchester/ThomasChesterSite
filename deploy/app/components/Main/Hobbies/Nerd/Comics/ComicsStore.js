import alt from '../../../../../alt';
import ComicsActions from './ComicsActions';

class ComicsStore {
  constructor() {
    this.bindActions(ComicsActions);
  }

}

export default alt.createStore(ComicsStore);
