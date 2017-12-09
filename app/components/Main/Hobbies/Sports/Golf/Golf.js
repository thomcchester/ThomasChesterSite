var React=require('react')
import {Link} from 'react-router';
import GolfStore from './GolfStore.js';
import GolfActions from './GolfActions.js';
class Golf extends React.Component {

	constructor(props) {
		super(props);
		this.state = GolfStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		GolfStore.listen(this.onChange);
	}


	componentWillUnmount() {
		GolfStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Golf</h1>
				<h2>Well I only started a couple of summers ago. I am terrible.</h2>
				<ul>
					<p>Reasons why I am so bad at golf</p>
					<li>I am stiff and move like a robot.</li>
					<li>I try to focus on four houndred and sixty five things at once while swing and fail at all of them.</li>
					<li>Clearly it is mostly my clubs fault.</li>
					<li>I started playing in my mid twenties, not as a kid.</li>
					<li>I try to slam the ball instead of making great contact.</li>
					<li>It is hard to go in and out of being in the zone so often.</li>
				</ul>
				<p> I really do not like to watch golf. Maybe some highlights and such. Let us be serious, how do you people just watch golf? I think I would rather watch my wife's<span className="annoying">'</span> favorite makeup artists videos.</p>
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

 export default Golf
