import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Voting from '../Dashboard/Voting';

const Routes = () =>{
    return(
        <Router>
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/voting' component={Voting} />
        </Router>
    );
}
export default Routes;