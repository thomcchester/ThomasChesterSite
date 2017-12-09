import React from 'react';
import {Link} from 'react-router';
import SkiingStore from './SkiingStore.js';
import SkiingActions from './SkiingActions.js';
class Skiing extends React.Component {

	constructor(props) {
		super(props);
		this.state = SkiingStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		SkiingStore.listen(this.onChange);
	}


	componentWillUnmount() {
		SkiingStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>Skiing</h1>
				<p> I could probably talk about skiing all day long. </p>
				<div className="bigSki gear">
					<ul className="littleSki gearLittle">
						<li className="skis">
							<p>My Current Skis are:</p>
							<ul>
								<li>Volkl Mantra with Rossi Pivots</li>
								<li>Super 7 with Marker Duke Bindings</li>
							</ul>
						</li>
						<li className="helmets">
							<p>I dont like wearing them, but I do, I dont want some jerry to come out of nowhere and take me out.</p>
							<p>The truth is I have tried a number of helmets, but I have not found one that is quite right for me</p>
							<p>I tried a full face helmet out and it is just to big and boxy, not to mention that face plate is hard to deal with if you want to take it off</p>
						</li>
						<li className="boots">
							<p>I am not going to tell you boots, that is because I dont want you to think that you should get the same boots. Go to a good boot fitter. Seriously. Boots are the most important thing for skiing.</p>
						</li>
						<li className="poles">
							<p> I have the Leki Quantum Poles, they are great. Detachable pole straps are the best.</p>
						</li>
					</ul>
				</div>
				<div className="bigSki mountains">
					<p> Favorite Mountains I have been too</p>
					<ul>
						<li>Vail, CO</li>
						<li>Breckenridge, CO </li>
						<li>Deer Valley, UT </li>
						<li>Les Trois Vallees, Saint-Martin-de-Belleville France </li>
						<li>Whistler-Blackcomb, BC </li>
						<li>Suicide Six, VT (got to have love for the hometown spot)</li>
					</ul>
				</div>
				<div className="bigSki bestParts">
					<p>Best Parts of Skiing:</p>
					<ul>
						<li>Floating through powder and having it all kick up right behind you.</li>
						<li>First Tracks.</li>
						<li>Cold blasting your face while you are so hot from the exercise.</li>
						<li>Finally getting to the top.</li>
						<li>Finding an uncrowded area and hitting for a few hours.</li>
						<li>Water</li>
						<li>Legs burning</li>
						<li>Lunch</li>
						<li>Doing something a little out of your skill level and the fear that comes with it.</li>
						<li>So much sun.</li>
						<li>Snow hitting you the face while your cruising.</li>
						<li>Trees.</li>
						<li>Watching Dad Fall.</li>
						<li>Music.</li>
						<li>Freedom</li>
						<li>Last run legs </li>
						<li>Taking your Boots off.</li>
					</ul>
				</div>
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

 export default Skiing
