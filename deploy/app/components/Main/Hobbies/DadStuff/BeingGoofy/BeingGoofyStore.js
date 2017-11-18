import alt from '../../../../../alt';
import BeingGoofyActions from './BeingGoofyActions';

 class BeingGoofyStore {
	constructor() {
		this.bindActions(BeingGoofyActions)
	}

}

export default alt.createStore(BeingGoofyStore);
