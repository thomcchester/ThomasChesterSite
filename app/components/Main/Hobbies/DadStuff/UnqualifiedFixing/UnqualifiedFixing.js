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
			{/*
				<div>
					<h1>Unqualified Fixing</h1>
					<p>Apparently I cannot fix a water softener.</p>
				</div>
			*/},
			<div className="closed">
				<p className="backClosedOne">Closed</p>
				<p className="backClosedTwo">Closed</p>
				<p className="backClosedThree">Closed</p>
				<p className="backClosedFour">Closed</p>
				<p className="backClosedFive">Closed</p>
				<p className="backClosedSix">Closed</p>
				<p className="frontClosed">It will be up very soon</p>
				<p className="midClosedOne">Closed</p>
				<p className="midClosedTwo">Closed</p>
				<p className="midClosedThree">Closed</p>
				<p className="midClosedFour">Closed</p>
				<p className="midClosedFive">Closed</p>
				<p className="midClosedSix">Closed</p>
				<p className="midClosedEight">Closed</p>
				<p className="midClosedNine">Closed</p>
				<p className="midClosedTen">Closed</p>
				<p className="midClosedEleven">Closed</p>
				<p className="midClosedTwelve">Closed</p>
				<p className="midClosedThirteen">Closed</p>
				<p className="midClosedFourteen">Closed</p>
			</div>

		);
	}
}

 export default UnqualifiedFixing
