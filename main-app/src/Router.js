import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import AddIssues from './AddIssues';
import AddContact from './AddContact';
import PageNotFound from './PageNotFound';



class Router extends React.Component {

    render (){
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/Issues" component={AddIssues}/>
                <Route path="/Contact" component={AddContact}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
        )
    }
}

export default Router;