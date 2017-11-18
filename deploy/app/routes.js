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
import DailyBlog from './components/Main/DailyBlog/DailyBlog'



export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/Resume' component={Resume} />
    <Route path='/Software' component={Software} />
    <Route path='/Story' component={Story} />
    <Route path='/Hobbies' component={Hobbies} />
    <Route path='/DailyBlog' component={DailyBlog} />
    {hobbyRoutes}
  </Route>
);
