import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import {loginRoute, signupRoute, indexRoute, logoutRoute,
        friendsRoute, feedRoute, searchRoute, settingsRoute, accountRoute} from '../routes'

import { LoginForm, HomeComponent, RegistrationForm, LogoutComponent,
        RequireAuthComponent, NotRequireAuthComponent, FriendsComponent,
        NewsFeedComponent, SearchPeopleComponent, SettingsComponent,
        UserAccountComponent } from './index';

class Main extends React.Component{
    constructor(props){
        super(props);

        // secure all the routes here, because using function calls in render method will cause the whole app to rerender and lose state + input focus
        this.LoginCompCall = NotRequireAuthComponent(LoginForm);
        this.HomeCompCall = RequireAuthComponent(HomeComponent);
        this.RegCompCall = NotRequireAuthComponent(RegistrationForm);

        this.FriendsComp = RequireAuthComponent(FriendsComponent);
        this.NewsFeedComp = RequireAuthComponent(NewsFeedComponent);
        this.SearchPeopleComp = RequireAuthComponent(SearchPeopleComponent);
        this.SettingsComp = RequireAuthComponent(SettingsComponent);
        this.UserAccountComp = RequireAuthComponent(UserAccountComponent);
    }
    render(){
        const { isAuthenticated } = this.props.store.formInput;
        return (
            <main>
                <Switch>
                    {isAuthenticated ? <Route exact path={indexRoute} component={this.UserAccountComp}/> : <Route exact path={indexRoute} component={this.LoginCompCall}/>}
                    <Route exact path={indexRoute} component={this.UserAccountComp}/>
                    <Route path={loginRoute} component={this.LoginCompCall} />
                    <Route path={signupRoute} component={this.RegCompCall}/>
                    <Route path={logoutRoute} component={LogoutComponent}/>

                    <Route path={friendsRoute} component={this.FriendsComp}/>
                    <Route path={feedRoute} component={this.NewsFeedComp}/>
                    <Route path={searchRoute} component={this.SearchPeopleComp}/>
                    <Route path={settingsRoute} component={this.SettingsComp}/>
                    <Route path={accountRoute} component={this.UserAccountComp}/>
                </Switch>
            </main>
        )
    }
}

const mapStateToProps = (initState) => {
    return{
        store: initState
    }
}

export default withRouter(connect(mapStateToProps)(Main));
