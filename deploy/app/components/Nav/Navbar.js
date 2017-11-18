import React from 'react';
import {Link} from 'react-router';
import NavbarStore from './NavbarStore';
import NavbarActions from './NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.findDefaults();

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var navItems=this.state.tabs.map(function(tab) {
      return(
      <li key={tab.name}><Link to={tab.link}>{tab.name}</Link></li>
    );
    })
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Software'>Software</Link></li>
            <li><Link to='/Resume'>Resume</Link></li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Hobbies <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/Hobbies'>Hobbies</Link></li>
                <li className='dropdown-submenu'>
                  <Link to='/Hobbies/Nerd'>Nerdy Stuff</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Hobbies/Nerd/Comics'>Comics</Link></li>
                    <li><Link to='/Hobbies/Nerd/IOT'>IOT</Link></li>
                    <li><Link to='/Hobbies/Nerd/Math'>Math</Link></li>
                    <li><Link to='/Hobbies/Nerd/Physics'>Physics</Link></li>
                    <li><Link to='/Hobbies/Nerd/Puzzles'>Puzzles</Link></li>
                    <li><Link to='/Hobbies/Nerd/SciFi'>SciFi</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Hobbies/DadStuff'>Dad Stuff</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Hobbies/DadStuff/GoodLengthsOfRope'>Good Lengths of Rope</Link></li>
                    <li><Link to='/Hobbies/DadStuff/DadJokes'>Dad Jokes</Link></li>
                    <li><Link to='/Hobbies/DadStuff/BeingGoofy'>Being Goofy</Link></li>
                    <li><Link to='/Hobbies/DadStuff/BrookstoneRelated'>Brookstone/Gadgets</Link></li>
                    <li><Link to='/Hobbies/DadStuff/ComplainingAboutTheWrongTools'>Complaining about not having the right tools</Link></li>
                    <li><Link to='/Hobbies/DadStuff/HomeDepot'>Home Depot</Link></li>
                    <li><Link to='/Hobbies/DadStuff/HurtingOnesSelfWHileTryingToMakeThingsSafer'>Hurting ones self while trying to make things safer</Link></li>
                    <li><Link to='/Hobbies/DadStuff/PenDrawer'>PenDrawer</Link></li>
                    <li><Link to='/Hobbies/DadStuff/Tape'>Tape</Link></li>
                    <li><Link to='/Hobbies/DadStuff/UnqualifiedFixing'>Unqualified Fixing</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Hobbies/Sports'>Sports</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Hobbies/Sports/Skiing'>Skiing</Link></li>
                    <li><Link to='/Hobbies/Sports/WeightLifting'>Weight Lifting</Link></li>
                    <li><Link to='/Hobbies/Sports/Golf'>Golf</Link></li>
                    <li><Link to='/Hobbies/Sports/Running'>Running</Link></li>
                    <li><Link to='/Hobbies/Sports/MountainBiking'>Moutain Biking</Link></li>
                    <li><Link to='/Hobbies/Sports/Lacrosse'>Lacrosse</Link></li>
                    <li><Link to='/Hobbies/Sports/Hockey'>Hockey</Link></li>
                    <li><Link to='/Hobbies/Sports/NotWatching'>Not Watching</Link></li>
                    <li><Link to='/Hobbies/Sports/PotentialInterests'>Potential Interests</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Hobbies/Other'>Other</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Hobbies/Other/Cooking'>Cooking</Link></li>
                    <li><Link to='/Hobbies/Other/GettingIntoObscureThingsAndDitchingIt'>Picking up new hobbies</Link></li>
                    <li><Link to='/Hobbies/Other/GreatConversation'>Great Conversation</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to='/DailyBlog'>Blog</Link></li>
            <li><Link to='/Story'>Story</Link></li>
            <li></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
