import React from 'react';
import {Link} from 'react-router';
import UnqualifiedFixingStore from './UnqualifiedFixingStore.js';
import UnqualifiedFixingActions from './UnqualifiedFixingActions.js';
class UnqualifiedFixing extends React.Component {

	constructor(props) {
		super(props);
		this.state = UnqualifiedFixingStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		UnqualifiedFixingStore.listen(this.onChange);
	}


	componentWillUnmount() {
		UnqualifiedFixingStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			<div className="UnqualifiedFixingSite">
				<br></br>
				<br></br>
				<br></br>
				<h1 className="UnqaulifiedFixingH1">Things I've tried to fix and shouldn't have:</h1>
				<ul className="UnqualifiedFixingUL">
					<li className="UnqualifiedFixingLI">Keurig</li>
					<li className="UnqualifiedFixingLI">Water Softener</li>
					<li className="UnqualifiedFixingLI">Fridge</li>
					<li className="UnqualifiedFixingLI">Speakers</li>
					<li className="UnqualifiedFixingLI">Baby Genie</li>
					<li className="UnqualifiedFixingLI">Garage Door</li>
					<li className="UnqualifiedFixingLI">Lawn Mower</li>
					<li className="UnqualifiedFixingLI">Pants</li>
					<li className="UnqualifiedFixingLI">Fire Places</li>
					<li className="UnqualifiedFixingLI">Walls</li>
				</ul>
					<h2 className="UnqualifiedFixingH2">I think I am going to stick to digital</h2>
			</div>

		);
	}
}

 export default UnqualifiedFixing
