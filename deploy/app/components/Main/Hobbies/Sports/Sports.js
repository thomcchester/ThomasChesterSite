import React from 'react';
import {Link} from 'react-router';
import SportsStore from './SportsStore.js';
import SportsActions from './SportsActions.js';
class Sports extends React.Component {

	constructor(props) {
		super(props);
		this.state = SportsStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		SportsStore.listen(this.onChange);
	}


	componentWillUnmount() {
		SportsStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			<div className='hobbyDivParticular'>
			<div className="backgroundNerd">
				<img className="backgroundImage nerdBackground" src="../../../../../img/sportsBackground.png" />
			</div>
				<h1 className='hobbyDivParticularHOne'>I like Sports/exercise/etc.</h1>
				<div className="hobbyDivParticularDiv SportsDiv">
					<ul className="hobbyDivParticularUL SportsUl">
						<li className='hobbyDivParticularLI SportLi'><Link to='/Hobbies/Sports/Skiing'>Skiing</Link></li>
						<li className='hobbyDivParticularLI SportLi'><Link to='/Hobbies/Sports/WeightLifting'>Weight Lifting</Link></li>
						<li className='hobbyDivParticularLI SportLi'><Link to='/Hobbies/Sports/Golf'>Golf</Link></li>
						<li className='hobbyDivParticularLI SportLi'><Link to='/Hobbies/Sports/Running'>Running</Link></li>
						<li className='hobbyDivParticularLI SportLi'><Link to='/Hobbies/Sports/MountainBiking'>Moutain Biking</Link></li>
						<li className='hobbyDivParticularLI SportLi'><Link to='/Hobbies/Sports/Lacrosse'>Lacrosse</Link></li>
						<li className='hobbyDivParticularLI SportLi'><Link to='/Hobbies/Sports/Hockey'>Hockey</Link></li>
						<li className='hobbyDivParticularLI SportLi'><Link to='/Hobbies/Sports/NotWatching'>Not Watching</Link></li>
						<li className='hobbyDivParticularLI SportLi'><Link to='/Hobbies/Sports/PotentialInterests'>Potential Interests</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}

 export default Sports
