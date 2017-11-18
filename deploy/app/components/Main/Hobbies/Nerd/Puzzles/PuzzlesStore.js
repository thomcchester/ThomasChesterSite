import alt from '../../../../../alt';
import PuzzlesActions from './PuzzlesActions';

 class PuzzlesStore {
	constructor() {
		this.bindActions(PuzzlesActions)
	}

}

export default alt.createStore(PuzzlesStore);
