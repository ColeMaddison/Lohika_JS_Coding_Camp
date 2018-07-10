import React from 'react';
import { Grid, Row, Col, Well, ListGroupItem, ListGroup, Image} from 'react-bootstrap';
import MainPanelComponent from '../HomeComponents/MainPanelComponent';
import FriendPanelComponent from './FriendPanelComponent';

class FriendsComponent extends React.Component {
    render() {
        return(
            <Grid>  
                <Row>
                    <Col xs={6} md={4}>
                        <MainPanelComponent />
                    </Col>
                    <Col xs={6} md={8}>
                        <Well>
                            <Row>
                                <Col md={12}>
                                    <h3>Friends:</h3>
                                </Col>
                                <Col md={12}>
                                    <FriendPanelComponent />
                                </Col>
                            </Row>
                        </Well>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default FriendsComponent;