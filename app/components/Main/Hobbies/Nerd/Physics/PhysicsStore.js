import alt from '../../../../../alt';
import PhysicsActions from './PhysicsActions';

 class PhysicsStore {
	constructor() {
		this.bindActions(PhysicsActions)
	}

}

export default alt.createStore(PhysicsStore);
