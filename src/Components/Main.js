import React from 'react';
import Landingpage from '../Components/Landingpage';
import Aboutme from '../Components/Aboutme';
import Contact from '../Components/Contact';
import Resume from '../Components/Resume';
import Projects from '../Components/Projects';
import { Route, Switch } from 'react-router-dom'

const Main = () =>(
    <Switch>
        <Route exact path = "/" component={Landingpage}/>
        <Route exact path = "/aboutme" component={Aboutme}/>
        <Route exact path = "/projects" component={Projects}/>
        <Route exact path = "/contact" component={Contact}/>
    </Switch>
    
    ) 

export default Main
