import React from 'react';
import { Grid, Col, Well} from 'react-bootstrap';
import MainPanelComponent from '../HomeComponents/MainPanelComponent';
import UserModifyFormComponent from './UserModifyFormComponent';
import UserInfoComponent from './UserInfoComponent';

class UserAccountComponent extends React.Component{


    render() {
        const { modify } = this.props.store.formInput.userAccount;
        return (
            <Grid>  
                {/* <Row> */}
                    <Col md={4}>
                        <MainPanelComponent />
                    </Col>
                    <Col md={8}>
                        <Well>
                            {modify ? <UserModifyFormComponent /> : <UserInfoComponent />}
                        </Well>
                    </Col>
                {/* </Row> */}
            </Grid>
        )
    }
}

export default UserAccountComponent;
