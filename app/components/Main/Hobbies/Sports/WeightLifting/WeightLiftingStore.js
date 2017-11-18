import alt from '../../../../../alt';
import WeightLiftingActions from './WeightLiftingActions';

 class WeightLiftingStore {
	constructor() {
		this.bindActions(WeightLiftingActions)
	}

}

export default alt.createStore(WeightLiftingStore);
