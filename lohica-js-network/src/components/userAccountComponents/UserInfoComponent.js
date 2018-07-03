import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';


// !!!!!!!!!!!!! continue here!

class UserInfoComponent extends React.Component{
    render(){
        const { name, surname, midName, email, age, gender, image } = this.props.userData;
        return(
            <Grid>   
                <Row className="show-grid">
                    <Col md={1}>
                        Name
                    </Col>
                    <Col md={3}>
                        {name}
                    </Col>
                </Row>
                <Row>
                    <Col md={1}>
                        Surname
                    </Col>
                    <Col md={3}>
                        {surname}
                    </Col>
                </Row>
                
            </Grid>
        )
    }
}

const mapStateToProps = (initState) => {
    return {
        userData: initState.formInput.userAccount.data
    }
}

export default connect(mapStateToProps)(UserInfoComponent);

// export default UserInfoComponent;