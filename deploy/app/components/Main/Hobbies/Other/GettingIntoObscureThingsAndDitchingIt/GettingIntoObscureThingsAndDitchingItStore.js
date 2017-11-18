import alt from '../../../../../alt';
import GettingIntoObscureThingsAndDitchingItActions from './GettingIntoObscureThingsAndDitchingItActions';

 class GettingIntoObscureThingsAndDitchingItStore {
	constructor() {
		this.bindActions(GettingIntoObscureThingsAndDitchingItActions)
	}

}

export default alt.createStore(GettingIntoObscureThingsAndDitchingItStore);
