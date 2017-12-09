import alt from '../../../alt';
import StoryActions from './StoryActions';

class StoryStore {
  constructor() {
    this.bindActions(StoryActions);
  }

}

export default alt.createStore(StoryStore);
