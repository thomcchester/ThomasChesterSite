import alt from '../../../../../alt';
import NotWatchingActions from './NotWatchingActions';

 class NotWatchingStore {
	constructor() {
		this.bindActions(NotWatchingActions)
	}

}

export default alt.createStore(NotWatchingStore);
