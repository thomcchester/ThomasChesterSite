import alt from '../../../../../alt';
import PotentialInterestsActions from './PotentialInterestsActions';

 class PotentialInterestsStore {
	constructor() {
		this.bindActions(PotentialInterestsActions)
	}

}

export default alt.createStore(PotentialInterestsStore);
