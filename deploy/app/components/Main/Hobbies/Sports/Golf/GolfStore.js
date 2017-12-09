import alt from '../../../../../alt';
import GolfActions from './GolfActions';

 class GolfStore {
	constructor() {
		this.bindActions(GolfActions)
	}

}

export default alt.createStore(GolfStore);
