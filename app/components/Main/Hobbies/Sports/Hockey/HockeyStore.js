import alt from '../../../../../alt';
import HockeyActions from './HockeyActions';

 class HockeyStore {
	constructor() {
		this.bindActions(HockeyActions)
	}

}

export default alt.createStore(HockeyStore);
