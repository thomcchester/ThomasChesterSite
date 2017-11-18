import React from 'react';
import {Link} from 'react-router';
import CookingStore from './CookingStore.js';
import CookingActions from './CookingActions.js';
class Cooking extends React.Component {

	constructor(props) {
		super(props);
		this.state = CookingStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		CookingStore.listen(this.onChange);
	}


	componentWillUnmount() {
		CookingStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Cooking</h1>
				<p>I love to get really into cooking, I am not the hugest fan of the daily grind cooking wise.</p>
				<p>Cooking is one area of my life that is done much more by feel rather than by logic and following the "steps". I like to take ingredients and see what I can make.</p>
				<p>Currently in a slow cooker/casserole phase of cooking.</p>
				<p>I am ready for grill season to come back.</p>
			</div*/},
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

 export default Cooking
