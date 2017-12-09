import alt from '../../../../../alt';
import MathActions from './MathActions';

 class MathStore {
	constructor() {
		this.bindActions(MathActions)
	}

}

export default alt.createStore(MathStore);
