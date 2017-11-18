import alt from '../../../../../alt';
import ComplainingAboutTheWrongToolsActions from './ComplainingAboutTheWrongToolsActions';

 class ComplainingAboutTheWrongToolsStore {
	constructor() {
		this.bindActions(ComplainingAboutTheWrongToolsActions)
	}

}

export default alt.createStore(ComplainingAboutTheWrongToolsStore);
