import React from 'react';
import {Link} from 'react-router';
import BrookstoneRelatedStore from './BrookstoneRelatedStore.js';
import BrookstoneRelatedActions from './BrookstoneRelatedActions.js';
class BrookstoneRelated extends React.Component {

	constructor(props) {
		super(props);
		this.state = BrookstoneRelatedStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		BrookstoneRelatedStore.listen(this.onChange);
	}


	componentWillUnmount() {
		BrookstoneRelatedStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			{/*
			<div>
				<h1>BrookstoneRelated</h1>
				<ul className="brookStoneMainUl">
					<li className="brookStoneMainLi">
						<div className="bookStoneDiv messageChair">
							<img src={'../../../../../img/messageChair.jpg'}/>
							<a href="http://www.brookstone.com/pd/recover-3d-zero-gravity-massage-chair/973067p.html" target="_blank"> Look at this message chair</a>
 				 		</div>
					</li>
					<li className="brookStoneMainLi">
						<div className="bookStoneDiv bedFan">
							<img src={'../../../../../img/bedFan.jpg'}/>
							<a href="http://www.brookstone.com/pd/bed-fan-with-wireless-remote/782019p.html" target="_blank">Nice bed fan here</a>
 				 		</div>
					</li>
					<li className="brookStoneMainLi">
 					 <div className="bookStoneDiv steamGrillCleaner">
 						 <img src={'../../../../../img/steamGrillCleaner.jpg'}/>
						 <a href="http://www.brookstone.com/pd/motorized-grill-brush-with-heavy-duty-steam-cleaning-power/641621p.html" target="_blank">Got to keep the grill clean</a>
 					 </div>
 				 	</li>
				 	<li className="brookStoneMainLi">
						<div className="bookStoneDiv spyPen">
							<img src={'../../../../../img/spyPen.jpg'}/>
							<a href="http://www.brookstone.com/pd/hd-video-camera-pen/909434p.html" target="_blank">Now you can be James Bond</a>
						</div>
					</li>
				</ul>


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

 export default BrookstoneRelated
