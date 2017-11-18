import React from 'react';
import {Link} from 'react-router';
import TapeStore from './TapeStore.js';
import TapeActions from './TapeActions.js';
class Tape extends React.Component {

	constructor(props) {
		super(props);
		this.state = TapeStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		TapeStore.listen(this.onChange);
	}


	componentWillUnmount() {
		TapeStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Tape</h1>
				<div>
					<p> It is good to have these kinds of tape: </p>
					<ul className="tapeUl">
						<li className="tapeLi">
							<p className="tapeType"> Masking Tape</p>
							<ul className="subTapeUl">
								<li className="subTapeLi">Regular 24mm</li>
								<li className="subTapeLi">Regular 1"</li>
								<li className="subTapeLi">Regular 2"</li>
								<li className="subTapeLi">washi/variety of colours</li>
								<li className="subTapeLi">Painter's Tape 1"</li>
								<li className="subTapeLi">Painter's Tape 2"</li>
							</ul>
						</li>
						<li className="tapeLi">
							<p className="tapeType">Scotch Tape</p>
							<ul className="subTapeUl">
								<li className="subTapeLi">Regular 3/4"</li>
								<li className="subTapeLi">Regular 1/2"</li>
								<li className="subTapeLi">Giftwrap/satin 3/4"</li>
								<li className="subTapeLi">Double sided 3/4"</li>
							</ul>
						</li>
						<li className="tapeLi">
							<p className="tapeType">Duct Tape</p>
							<ul className="subTapeUl">
								<li className="subTapeLi">Grey Regular 2"</li>
								<li className="subTapeLi">Neon colors 2"</li>
								<li className="subTapeLi">Silly patterns such as comic book characters or ducks 2"</li>
								<li className="subTapeLi">Earth tones 2"</li>
								<li className="subTapeLi">Primary tones 2"</li>
								<li className="subTapeLi">Not exactly duct tape, but Gorilla Tape 2"</li>
							</ul>
						</li>
						<li className="tapeLi">
							<p className="tapeType">Electrical Tape</p>
							<ul className="subTapeUl">
								<li className="subTapeLi">Black 3/4"</li>
								<li className="subTapeLi">Various colours 3/4"</li>
								<li className="subTapeLi">Black 2"</li>
							</ul>
						</li>
						<li className="tapeLi">
							<p className="tapeType">metalized tape</p>
							<ul className="subTapeUl">
								<li className="subTapeLi">Mylar 1/2"</li>
								<li className="subTapeLi">Aluminum 2"</li>
								<li className="SubTapeLi">Steel tape 1/2"</li>
							</ul>
						</li>
						<li className="tapeLi">
							<p className="tapeType">Athletic Tape</p>
							<ul className="subTapeUl">
								<li className="subTapeLi">White 3/4"</li>
								<li className="subTapeLi">White 1"</li>
								<li className="subTapeLi">Black Hockey Tape 3/4"</li>
								<li className="subTapeLi">Surgical 1/2"</li>
							</ul>
						</li>
						<li className="tapeLi">
							<p className="tapeType">Misc</p>
							<ul className="subTapeUl">
								<li className="subTapeLi">Fasion Tape</li>
								<li className="subTapeLi">Teflon Tape</li>
							</ul>
						</li>
					</ul>
				</div>
				<p> Do I always have these tapes. No. I am not perfect. But of the tapes I do have, I have way to many.</p>
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

 export default Tape
