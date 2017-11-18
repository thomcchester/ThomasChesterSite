import alt from '../../../../alt';
import SportsActions from './SportsActions';

 class SportsStore {
	constructor() {
		this.bindActions(SportsActions)
	}

}

export default alt.createStore(SportsStore);
