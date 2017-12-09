import alt from '../../../../../alt';
import UnqualifiedFixingActions from './UnqualifiedFixingActions';

 class UnqualifiedFixingStore {
	constructor() {
		this.bindActions(UnqualifiedFixingActions)
	}

}

export default alt.createStore(UnqualifiedFixingStore);
