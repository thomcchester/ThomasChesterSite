import React from 'react';
import {Link} from 'react-router';
import BeingGoofyStore from './BeingGoofyStore.js';
import BeingGoofyActions from './BeingGoofyActions.js';
class BeingGoofy extends React.Component {

	constructor(props) {
		super(props);
		this.state = BeingGoofyStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		BeingGoofyStore.listen(this.onChange);
	}


	componentWillUnmount() {
		BeingGoofyStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Being Goofy</h1>
				<p>To be honest my wife says that I am all time when at home. I dont see it.</p>
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

 export default BeingGoofy
