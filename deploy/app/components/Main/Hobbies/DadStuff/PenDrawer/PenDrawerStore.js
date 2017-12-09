import alt from '../../../../../alt';
import PenDrawerActions from './PenDrawerActions';

 class PenDrawerStore {
	constructor() {
		this.bindActions(PenDrawerActions)
	}

}

export default alt.createStore(PenDrawerStore);
