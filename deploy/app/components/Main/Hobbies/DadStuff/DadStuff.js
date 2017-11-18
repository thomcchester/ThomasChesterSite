import React from 'react';
import {Link} from 'react-router';
import DadStuffStore from './DadStuffStore.js';
import DadStuffActions from './DadStuffActions.js';
class DadStuff extends React.Component {

	constructor(props) {
		super(props);
		this.state = DadStuffStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		DadStuffStore.listen(this.onChange);
	}


	componentWillUnmount() {
		DadStuffStore.listen(this.onChange);
	}
	onChange(state) {
		this.setState(state);
	}
render() {

		return (
			<div className='hobbyDivParticular'>
				<div className="backgroundDad">
					<p className="backgroundDadLine dadOne">"Do you think I am made of Money?"</p>
					<p className="backgroundDadLine dadTwo">"When I was your age..."</p>
					<p className="backgroundDadLine dadThree">"I'm not sleeping, I'm resting my eyes"</p>
					<p className="backgroundDadLine dadFour">"Ask your mother"</p>
					<p className="backgroundDadLine dadFive">"No"</p>
					<p className="backgroundDadLine dadSix">"Don't let the bed bugs bite"</p>
					<p className="backgroundDadLine dadSeven">"Is the Pope Catholic?"</p>
				</div>
				<div className="wholeBodyDad">
				<h1 className='hobbyDivParticularHOne'>I was a dad before becoming a dad</h1>
				<h2 className='hobbyDivParticualrHTwo'>I have my first on the way, but here are some hobbies I already had:</h2>
				<div className='hobbyDivParticularDiv DadStuffOfStuff'>
					<ul className='hobbyDivParticularUL DadStuffUl'>
						<li className='hobbyDivParticularLI DadStuffLi'><Link to='/Hobbies/DadStuff/GoodLengthsOfRope'>Good Lengths of Rope</Link></li>
						<li className='hobbyDivParticularLI DadStuffLi'><Link to='/Hobbies/DadStuff/DadJokes'>Dad Jokes</Link></li>
						<li className='hobbyDivParticularLI DadStuffLi'><Link to='/Hobbies/DadStuff/BeingGoofy'>Being Goofy</Link></li>
						<li className='hobbyDivParticularLI DadStuffLi'><Link to='/Hobbies/DadStuff/BrookstoneRelated'>Brookstone/Gadgets</Link></li>
						<li className='hobbyDivParticularLI DadStuffLi'><Link to='/Hobbies/DadStuff/ComplainingAboutTheWrongTools'>Complaining about not having the right tools</Link></li>
						<li className='hobbyDivParticularLI DadStuffLi'><Link to='/Hobbies/DadStuff/HomeDepot'>Home Depot</Link></li>
						<li className='hobbyDivParticularLI DadStuffLi'><Link to='/Hobbies/DadStuff/HurtingOnesSelfWHileTryingToMakeThingsSafer'>Hurting ones self while trying to make things safer</Link></li>
						<li className='hobbyDivParticularLI DadStuffLi'><Link to='/Hobbies/DadStuff/PenDrawer'>PenDrawer</Link></li>
						<li className='hobbyDivParticularLI DadStuffLi'><Link to='/Hobbies/DadStuff/Tape'>Tape</Link></li>
						<li className='hobbyDivParticularLI DadStuffLi'><Link to='/Hobbies/DadStuff/UnqualifiedFixing'>Unqualified Fixing</Link></li>
					</ul>
				</div>
				</div>
			</div>
		);
	}
}

 export default DadStuff
