import React from 'react';
import {Route, IndexRedirect, Link} from 'react-router';
import request from 'superagent'
import Cooking from './Cooking/Cooking';
import GreatConversation from './GreatConversation/GreatConversation'
import GettingIntoObscureThingsAndDitchingIt from './GettingIntoObscureThingsAndDitchingIt/GettingIntoObscureThingsAndDitchingIt'



export default (
  <otherRoutes>
    <Route path='/Hobbies/Other/Cooking' component={Cooking} />
    <Route path='/Hobbies/Other/GettingIntoObscureThingsAndDitchingIt' component={GettingIntoObscureThingsAndDitchingIt} />
    <Route path='/Hobbies/Other/GreatConversation' component={GreatConversation} />
  </otherRoutes>
)
