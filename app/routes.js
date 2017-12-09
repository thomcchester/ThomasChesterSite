var React=require('react')
import {Route, IndexRedirect, Link} from 'react-router';
import App from './App';
import Home from './components/Main/Home/Home';
import Resume from './components/Main/Resume/Resume';
import Software from './components/Main/Software/Software';
import Story from './components/Main/Story/Story';
import Hobbies from './components/Main/Hobbies/Hobbies';
import alt from './alt';
import request from 'superagent';
import hobbyRoutes from './components/Main/Hobbies/hobbyRoutes';
import DailyBlog from './components/Main/DailyBlog/DailyBlog';
import BestOfHumanity from './components/Main/Software/articles/bestOfHumanity';
import CurrentSoftware from './components/Main/Software/articles/currentSoftware';
import PreviousLike from './components/Main/Software/articles/previousLike';
import PreviousNo from './components/Main/Software/articles/previousNo';
import SoftwareOnThisSite from './components/Main/Software/articles/softwareOnThisSite';
import WouldLikeToLearn from './components/Main/Software/articles/wouldLikeTolearn';


export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/Resume' component={Resume} />
    <Route path='/Software' component={Software} />
    <Route path='/Story' component={Story} />
    <Route path='/Hobbies' component={Hobbies} />
    <Route path='/DailyBlog' component={DailyBlog} />
    <Route path='/software/bestOfHumanity' component={BestOfHumanity} />
    <Route path='/software/softwareOnThisSite' component={SoftwareOnThisSite} />
    <Route path='/software/wouldLikeToLearn' component={WouldLikeToLearn} />
    <Route path='/software/Current' component={CurrentSoftware} />
    <Route path='/software/PreviousLike' component={PreviousLike} />
    <Route path='/softare/previousNo' component={PreviousNo} />
    {hobbyRoutes}
  </Route>
);
