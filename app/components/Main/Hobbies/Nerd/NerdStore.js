import alt from '../../../../alt';
import NerdActions from './NerdActions';

 class NerdStore {
	constructor() {
		this.bindActions(NerdActions)
	}

}

export default alt.createStore(NerdStore);
