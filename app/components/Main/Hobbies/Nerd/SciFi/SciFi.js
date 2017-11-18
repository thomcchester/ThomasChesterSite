import React from 'react';
import {Link} from 'react-router';
import SciFiStore from './SciFiStore.js';
import SciFiActions from './SciFiActions.js';
class SciFi extends React.Component {

	constructor(props) {
		super(props);
		this.state = SciFiStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		SciFiStore.listen(this.onChange);
	}


	componentWillUnmount() {
		SciFiStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>SciFi</h1>
				<h2>I love just about anything SciFi, not Fantasy, you got to have rules!</h2>
				<div className="sciFiBooks">
					<p>Really Good Books:</p>
					<ul>
						<li>Alastair Reynolds</li>
							<ul>
								<li>
								<p>Revelation Space Series</p>
									<ul>
										<li>Revelation Space</li>
										<li>Chasm City</li>
										<li>Redemption Ark</li>
										<li>Absolution Gap</li>
										<li>The Prefect</li>
									</ul>
								</li>
								<li>
								<p>Poseidon'<span className="annoying">'</span>s Children Series</p>
									<ul>
										<li>Blue Remembered Earth</li>
										<li>On the Steel Breeze</li>
										<li>Poseidon's<span className="annoying">'</span> Wake</li>
									</ul>
								</li>
								<li>
									<p>other</p>
									<ul>
										<li>Century Rain</li>
										<li>Pushing Ice</li>
										<li>House of Suns</li>
										<li>Terminal World</li>
									</ul>
								</li>
							</ul>
						<li>Iain M Banks</li>
							<ul>
								<li>
									<p>Culture Series</p>
									<ul>
										<li>Consider Phlebas</li>
										<li>The player of Games</li>
										<li>Use of Weapons</li>
										<li>Matter</li>
										<li>Surface Detail</li>
										<li>Hydrogen Sonata</li>
									</ul>
								</li>
							</ul>
						<li>Peter F Hamilton</li>
							<ul>
								<li><p>Nights Dawn Trilogy</p>
									<ul>
										<li>Reality Dysfunction</li>
										<li>The Neutronium Alchemist</li>
										<li>The Naked God</li>
									</ul>
								</li>
								<li>
									<p>The Void Trilogy</p>
									<ul>
										<li>The Dreaming Void</li>
										<li>The Temporal Void</li>
										<li>The Evolutionary Void</li>
									</ul>
								</li>
							</ul>
						<li>Dan Simmons</li>
							<ul>
								<li>
									<p> The Hyperion Cantos </p>
									<ul>
										<li>Hyperion</li>
										<li>The Fall of Hyperion</li>
										<li>Endymion</li>
										<li>The Rise of Endymion</li>
									</ul>
								</li>
								<li>
									<p>Illium</p>
									<p>Olympos</p>
								</li>
							</ul>
						<li>Margaret Atwood</li>
							<p>The Handmaid'<span className="annoying">'</span>s Tale</p>
						<li>Vernor Vinge</li>
							<ul>
								<p>Zones of Though Series</p>
								<li> A Fire Upon the Deep</li>
								<li> A Deepness in The Sky </li>
								<li>The Children of the sky</li>
							</ul>
					</ul>
				</div>
				<div>
					<p>Good Movies:</p>
					<ul>
						<li>
							<p>The Chronicles of Riddick, I know they are corny.</p>
							<ul>
								<li> Pitch Black (2000) </li>
								<li> The Chronicles of Riddick (2004) </li>
								<li> Riddick (2013) </li>
							</ul>
						</li>
						<li>Solaris (2002)</li>
						<li>Gattaca (1997)</li>
						<li>The Prestige (2006) </li>
						<li>Total Recall (1990) </li>
						<li>The Fifth Element (1997) </li>
						<li>Primer (2004) </li>
						<li>Children of Men (2006) </li>
						<li> Moon (2009) </li>
						<li> The Matrix (1999), only the first one </li>
						<li> The Terminator (1984) </li>
						<li> Blade Runner (1982) </li>
						<li> Guardians of the Galaxy (2014) </li>
						<li> Ex Machina (2015) </li>
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

 export default SciFi
