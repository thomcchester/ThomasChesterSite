import alt from '../../../../../alt';
import NerdOtherActions from './NerdOtherActions';

 class NerdOtherStore {
	constructor() {
		this.bindActions(NerdOtherActions)
	}

}

export default alt.createStore(NerdOtherStore);
