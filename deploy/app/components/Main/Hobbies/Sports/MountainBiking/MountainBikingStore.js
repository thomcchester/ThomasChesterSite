import alt from '../../../../../alt';
import MountainBikingActions from './MountainBikingActions';

 class MountainBikingStore {
	constructor() {
		this.bindActions(MountainBikingActions)
	}

}

export default alt.createStore(MountainBikingStore);
