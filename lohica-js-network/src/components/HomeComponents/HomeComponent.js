import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Well } from 'react-bootstrap';

import MainPanelComponent from './MainPanelComponent';

// import { UserAccountComponent, FriendsComponent, SearchPeopleComponent, NewsFeedComponent, SettingsComponent } from '../index';

class MainComponent extends React.Component {
    render(){
        return(
            <Grid>  
                <Row>
                    <Col xs={6} md={4}>
                        <MainPanelComponent />
                    </Col>
                    <Col xs={6} md={8}>
                        <Well>
                            <p>Main</p>
                        </Well>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (initState) => {
    return{
        store: initState
    }
}

export default connect(mapStateToProps)(MainComponent);
