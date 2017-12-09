import alt from '../../../../../alt';
import DadJokesActions from './DadJokesActions';

 class DadJokesStore {
	constructor() {
		this.bindActions(DadJokesActions)
	}

}

export default alt.createStore(DadJokesStore);
