import React from 'react';
import Landingpage from '../Components/Landingpage'
import { Switch } from 'react-router-dom'

const Main = () => {
    <Switch>
        <Route exact path = "/" component={Landingpage}/>
    </Switch>
    
}

export default Main
