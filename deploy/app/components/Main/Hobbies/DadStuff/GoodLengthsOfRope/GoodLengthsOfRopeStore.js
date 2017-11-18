import alt from '../../../../../alt';
import GoodLengthsOfRopeActions from './GoodLengthsOfRopeActions';

 class GoodLengthsOfRopeStore {
	constructor() {
		this.bindActions(GoodLengthsOfRopeActions)
	}

}

export default alt.createStore(GoodLengthsOfRopeStore);
