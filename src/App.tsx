import React, {useEffect} from 'react';
import './App.css';
import ComponentView from "./Pages/ComponentView/ComponentView";
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Registration from "./Pages/Registration/Registration";
import RecoverPassword from './Pages/RecoverPassword/RecoverPassword';
import AddPassword from "./Pages/AddPassword/AddPassword";
import Page404 from "./Pages/Page404/Page404";
import Links from "./Pages/Links/Links";

function App() {

    return (
        <div className="App">
            <Links/>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={'/component-view'}/>} />
                <Route path={'/component-view'} render={() => <ComponentView/>} />
                <Route path={'/login'} render={() => <Login/>} />
                <Route path={'/profile'} render={() => <Profile/>} />
                <Route path={'/registration'} render={() => <Registration/>} />
                <Route path={'/recover'} render={() => <RecoverPassword/>} />
                <Route path={'/add-pass'} render={() => <AddPassword/>} />
                <Route path={'*'} render={() => <Page404/>} />
                <Redirect from={'*'} to={'/404'}/>
            </Switch>

        </div>
    );
}

export default App;
