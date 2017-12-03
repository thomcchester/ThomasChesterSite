import React from 'react';
import {Link} from 'react-router';
import ComplainingAboutTheWrongToolsStore from './ComplainingAboutTheWrongToolsStore.js';
import ComplainingAboutTheWrongToolsActions from './ComplainingAboutTheWrongToolsActions.js';
class ComplainingAboutTheWrongTools extends React.Component {

	constructor(props) {
		super(props);
		this.state = ComplainingAboutTheWrongToolsStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		ComplainingAboutTheWrongToolsStore.listen(this.onChange);
	}


	componentWillUnmount() {
		ComplainingAboutTheWrongToolsStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			<div>
				<br></br>
				<br></br>
				<h1 className="h1Tools">Complaining About The Wrong Tools</h1>
				<h2 className="h2Tools">It isn't complaining if it is true</h2>
				<img className="hammer" src="../../../../../img/redHammer.png" />
			</div>

		);
	}
}

 export default ComplainingAboutTheWrongTools
