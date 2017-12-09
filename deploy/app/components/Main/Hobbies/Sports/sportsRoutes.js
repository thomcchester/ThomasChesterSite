import React from 'react';
import {Route, IndexRedirect, Link} from 'react-router';
import request from 'superagent'
import Golf from './Golf/Golf';
import Hockey from './Hockey/Hockey';
import Lacrosse from './Lacrosse/Lacrosse';
import MountainBiking from './MountainBiking/MountainBiking';
import NotWatching from './NotWatching/NotWatching';
import PotentialInterests from './PotentialInterests/PotentialInterests';
import Running from './Running/Running';
import Skiing from './Skiing/Skiing';
import WeightLifting from './WeightLifting/WeightLifting';

export default (
  <otherRoutes>
    <Route path='/Hobbies/Sports/Golf' component={Golf} />
    <Route path='/Hobbies/Sports/Hockey' component={Hockey} />
    <Route path='/Hobbies/Sports/Lacrosse' component={Lacrosse} />
    <Route path='/Hobbies/Sports/MountainBiking' component={MountainBiking} />
    <Route path='/Hobbies/Sports/NotWatching' component={NotWatching} />
    <Route path='/Hobbies/Sports/PotentialInterests' component={PotentialInterests} />
    <Route path='/Hobbies/Sports/Running' component={Running} />
    <Route path='/Hobbies/Sports/Skiing' component={Skiing} />
    <Route path='/Hobbies/Sports/WeightLifting' component={WeightLifting} />

  </otherRoutes>
)
