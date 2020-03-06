import React from 'react';
import './App.css';

//ROUTER DOM
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//SCREENS
import AboutScreen    from './screens/About'
import AccountScreen  from './screens/Account'
import BookScreen     from './screens/Book'
import HomeScreen     from './screens/Home'
import BasketScreen   from './screens/Basket'
import ResultsScreen  from './screens/Results'
import SigninScreen   from './screens/Signin'
import SignupScreen   from './screens/Signup'
import SuccessScreen  from './screens/Success'
import VisitScreen    from './screens/Visit'

import RedirectToHome from '../src/toHome'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"         exact component={RedirectToHome} />
        <Route path="/home"     component={HomeScreen} />
        <Route path="/about"    component={AboutScreen} />
        <Route path="/account"  component={AccountScreen} />
        <Route path="/book"     component={BookScreen} />
        <Route path="/home"     component={HomeScreen} />
        <Route path="/basket"   component={BasketScreen} />
        <Route path="/results"  component={ResultsScreen} />
        <Route path="/signin"   component={SigninScreen} />
        <Route path="/signup"   component={SignupScreen} />
        <Route path="/success"  component={SuccessScreen} />
        <Route path="/visit/:ref"    component={VisitScreen} />
      </Switch>
    </Router>
  );
}
