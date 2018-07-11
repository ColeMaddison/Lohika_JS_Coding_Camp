import React from 'react';
import { MainPanelComponent } from '../index';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import { UserInfoComponent } from '../index';

class FriendInfoComponent extends React.Component{
    render() {
        const { age, name, surname, _id, gender, photoLink, email, midName } = this.props.location.state;
        return(
            <Grid>  
                <Row>
                    <Col xs={6} md={4}>
                        <MainPanelComponent />
                    </Col>
                    <Col xs={6} md={8}>
                        <Well>
                            <UserInfoComponent friendData={{age, name, surname, _id, gender, photoLink, email, midName}} />
                        </Well>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default FriendInfoComponent;