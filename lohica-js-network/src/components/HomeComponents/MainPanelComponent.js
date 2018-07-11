import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Well, ButtonGroup, Button } from 'react-bootstrap';
import { friendsRoute, accountRoute, feedRoute, searchRoute, settingsRoute } from '../../routes';

class MainPanelComponent extends React.Component {
    render(){
        
        return(
            <Well>
                <ButtonGroup vertical block bsSize='large'>
                    <LinkContainer exact to={accountRoute}>
                        <Button>My Account</Button>
                    </LinkContainer>
                    <LinkContainer exact to={friendsRoute}>
                        <Button>Friends</Button>
                    </LinkContainer>
                    <LinkContainer exact to={searchRoute}>
                        <Button>Search People</Button>
                    </LinkContainer>
                    <LinkContainer exact to={feedRoute}>
                        <Button>News Feed</Button>
                    </LinkContainer>
                    <LinkContainer exact to={settingsRoute}>
                        <Button>Settings</Button>
                    </LinkContainer>
                </ButtonGroup>
            </Well>
        )
    }
}

export default MainPanelComponent;
