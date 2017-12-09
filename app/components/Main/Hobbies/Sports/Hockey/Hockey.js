import React from 'react';
import {Link} from 'react-router';
import HockeyStore from './HockeyStore.js';
import HockeyActions from './HockeyActions.js';
class Hockey extends React.Component {

	constructor(props) {
		super(props);
		this.state = HockeyStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		HockeyStore.listen(this.onChange);
	}


	componentWillUnmount() {
		HockeyStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Hockey</h1>
				<p>I grew up in a hockey family. At one point my entire family was playing, my mom, my dad, my brother and I. </p>
				<p>I grew up playing goalie. I never want to play goalie ever again.</p>
				<p>I havent played in quite some time, however I think it would be really fun to start playing a glove helmet pickup</p>
				<p>Hockey is one of the few sport that I actually enjoy watching</p>
				<p>If you want to know everything about that you need, here a good website. <a href="http://woodieshockey.com/">Hockey Encylopedia, by John Chapman Chester Jr.</a></p>
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

 export default Hockey
