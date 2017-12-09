import alt from '../../../../../alt';
import CookingActions from './CookingActions';

 class CookingStore {
	constructor() {
		this.bindActions(CookingActions)
	}

}

export default alt.createStore(CookingStore);
