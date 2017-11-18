import React from 'react';
import {Route, IndexRedirect, Link} from 'react-router';
import request from 'superagent'
import Comics from './Comics/Comics';
import IOT from './IOT/IOT';
import Math from './Math/Math'
import NerdOther from './NerdOther/NerdOther';
import Physics from './Physics/Physics';
import Puzzles from './Puzzles/Puzzles';
import SciFi from './SciFi/SciFi';


export default (
  <nerdRoutes>
    <Route path='/Hobbies/Nerd/Comics' component={Comics} />
    <Route path='/Hobbies/Nerd/IOT' component={IOT} />
    <Route path='/Hobbies/Nerd/NerdOther' component={NerdOther} />
    <Route path='/Hobbies/Nerd/Physics' component={Physics} />
    <Route path='/Hobbies/Nerd/Puzzles' component={Puzzles} />
    <Route path='/Hobbies/Nerd/SciFi' component={SciFi} />
    <Route path='/Hobbies/Nerd/Math' component={Math} />
  </nerdRoutes>
)
