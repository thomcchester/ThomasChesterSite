import alt from '../../../../../alt';
import RunningActions from './RunningActions';

 class RunningStore {
	constructor() {
		this.bindActions(RunningActions)
	}

}

export default alt.createStore(RunningStore);
