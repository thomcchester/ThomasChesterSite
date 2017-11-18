import alt from '../../../../../alt';
import SciFiActions from './SciFiActions';

 class SciFiStore {
	constructor() {
		this.bindActions(SciFiActions)
	}

}

export default alt.createStore(SciFiStore);
