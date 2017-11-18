import alt from '../../../../../alt';
import LacrosseActions from './LacrosseActions';

 class LacrosseStore {
	constructor() {
		this.bindActions(LacrosseActions)
	}

}

export default alt.createStore(LacrosseStore);
