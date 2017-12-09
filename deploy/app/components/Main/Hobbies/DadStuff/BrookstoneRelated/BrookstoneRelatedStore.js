import alt from '../../../../../alt';
import BrookstoneRelatedActions from './BrookstoneRelatedActions';

 class BrookstoneRelatedStore {
	constructor() {
		this.bindActions(BrookstoneRelatedActions)
	}

}

export default alt.createStore(BrookstoneRelatedStore);
