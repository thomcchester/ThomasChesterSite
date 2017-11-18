import alt from '../../../../../alt';
import HomeDepotActions from './HomeDepotActions';

 class HomeDepotStore {
	constructor() {
		this.bindActions(HomeDepotActions)
	}

}

export default alt.createStore(HomeDepotStore);
