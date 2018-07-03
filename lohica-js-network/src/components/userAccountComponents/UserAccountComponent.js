import React from 'react';
import { Grid, Row, Col, Well} from 'react-bootstrap';
import MainPanelComponent from '../HomeComponents/MainPanelComponent';
// import UserModifyFormComponent from './UserModifyFormComponent';
import UserInfoComponent from './UserInfoComponent';

class UserAccountComponent extends React.Component{

    render() {
        return (
            <Grid>  
                <Row>
                    <Col xs={6} md={4}>
                        <MainPanelComponent />
                    </Col>
                    <Col xs={6} md={8}>
                        <Well>
                            <UserInfoComponent />
                            {/* <UserModifyFormComponent /> */}
                        </Well>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default UserAccountComponent;
