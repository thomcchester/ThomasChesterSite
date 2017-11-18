import alt from '../../../../../alt';
import TapeActions from './TapeActions';

 class TapeStore {
	constructor() {
		this.bindActions(TapeActions)
	}

}

export default alt.createStore(TapeStore);
