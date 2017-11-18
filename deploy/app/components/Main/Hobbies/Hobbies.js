import React from 'react';
import {Link} from 'react-router';
import HobbiesStore from './HobbiesStore'
import HobbiesActions from './HobbiesActions';
import {first, without, findWhere} from 'underscore';

class Hobbies extends React.Component {

  constructor(props) {
    super(props);
    this.state = HobbiesStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HobbiesStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HobbiesStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <div className="hobbiesWhole deg">
        <h1 className="mainHobbies">Hobbies</h1>
        <h2 className="mainHobbies">What We Do Defines Us</h2>

        <div className="hobbyBoxOfBoxes">
          <ul className="hobbyBoxUl">
            <li className="hobbyBox DadStuff">
              <p><Link to='/Hobbies/DadStuff'>Dad Stuff</Link></p>
              <ul className="subHobbyBoxUl">
                <li className="subHobbyBoxLI"><Link to='/Hobbies/DadStuff/GoodLengthsOfRope'>Rope</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/DadStuff/DadJokes'>Jokes</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/DadStuff/BeingGoofy'>Goofy</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/DadStuff/BrookstoneRelated'>Gadgets</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/DadStuff/ComplainingAboutTheWrongTools'>wrong tools</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/DadStuff/HomeDepot'>Home Depot</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/DadStuff/HurtingOnesSelfWHileTryingToMakeThingsSafer'>Hurting</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/DadStuff/PenDrawer'>Pen Drawer</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/DadStuff/Tape'>Tape</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/DadStuff/UnqualifiedFixing'>Unqualified</Link></li>
              </ul>
            </li>
            <li className="hobbyBox Nerd">
              <p className="NerdP"><Link to='/Hobbies/Nerd'>Nerd</Link></p>
              <ul className="subHobbyBoxUl">
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Nerd/Comics'>Comics</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Nerd/IOT'>IOT</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Nerd/Math'>Math</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Nerd/Physics'>Physics</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Nerd/Puzzles'>Puzzles</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Nerd/SciFi'>SciFi</Link></li>
              </ul>
            </li>
            <li className="hobbyBox Sports">
              <p><Link to='/Hobbies/Sports'>Sports</Link></p>
              <ul className="subHobbyBoxUl">
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Sports/Skiing'>Skiing</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Sports/WeightLifting'>Weight Lifting</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Sports/Golf'>Golf</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Sports/Running'>Running</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Sports/MountainBiking'>Moutain Biking</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Sports/Lacrosse'>Lacrosse</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Sports/Hockey'>Hockey</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Sports/NotWatching'>Not Watching</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Sports/PotentialInterests'>Potential Interests</Link></li>
              </ul>
            </li>
            <li className="hobbyBox hobbiesOther">
              <p><Link to='/Hobbies/Other'>other</Link></p>
              <ul className="subHobbyBoxUl">
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Other/Cooking'>Cooking</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Other/GettingIntoObscureThingsAndDitchingIt'>new</Link></li>
                <li className="subHobbyBoxLI"><Link to='/Hobbies/Other/GreatConversation'>Great</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Hobbies;
