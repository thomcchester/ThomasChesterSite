import React from 'react';
import {Link} from 'react-router';
import HomeDepotStore from './HomeDepotStore.js';
import HomeDepotActions from './HomeDepotActions.js';
class HomeDepot extends React.Component {

	constructor(props) {
		super(props);
		this.state = HomeDepotStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		HomeDepotStore.listen(this.onChange);
	}


	componentWillUnmount() {
		HomeDepotStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>HomeDepot</h1>
				<h2>There is nothing I could say that would give Home Depot justice.</h2>
				<a href="http://www.homedepot.com/" target="_blank">Home Depot</a>
				<h3> In the future I will start posting my hauls</h3>
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

 export default HomeDepot
