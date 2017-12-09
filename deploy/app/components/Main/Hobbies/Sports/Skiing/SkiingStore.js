import alt from '../../../../../alt';
import SkiingActions from './SkiingActions';

 class SkiingStore {
	constructor() {
		this.bindActions(SkiingActions)
	}

}

export default alt.createStore(SkiingStore);
