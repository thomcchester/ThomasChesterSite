import alt from '../../../../alt';
import OtherActions from './OtherActions';

 class OtherStore {
	constructor() {
		this.bindActions(OtherActions)
	}

}

export default alt.createStore(OtherStore);
