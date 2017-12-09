import alt from '../../../../../alt';
import GreatConversationActions from './GreatConversationActions';

 class GreatConversationStore {
	constructor() {
		this.bindActions(GreatConversationActions)
	}

}

export default alt.createStore(GreatConversationStore);
