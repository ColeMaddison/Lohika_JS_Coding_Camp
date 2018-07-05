import React from 'react';
import { Col, Row, Panel, Button, Image, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { enableModifyUserData } from '../../actions/modifyUserDataAction';

class UserInfoComponent extends React.Component{
    constructor(props){
        super(props);

        this.handleModifyButton = this.handleModifyButton.bind(this);
    }

    handleModifyButton(e) {
        this.props.dispatch(enableModifyUserData());
    }


    render(){
        const { name, surname, midName, email, age, gender, image } = this.props.userData;
        return(
            <Row>
                <Col md={12} >
                    <Panel bsStyle='info'>
                        <Panel.Heading>
                            <Panel.Title componentClass="h2">{name} {surname}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <Row>
                                <Col md={4}>
                                    <Image src={`/${image}`} rounded responsive />
                                </Col>
                                <Col md={8}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td><strong>{name}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Surname:</td>
                                                <td><strong>{surname}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Midname:</td>
                                                <td><strong>{midName}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td><strong>{email}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Age:</td>
                                                <td><strong>{age}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td><strong>{gender}</strong></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Panel.Body>
                        <Panel.Footer>
                            <Button
                                bsStyle="success"
                                onClick={this.handleModifyButton}
                                >
                                Modify
                            </Button>
                        </Panel.Footer>
                    </Panel>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (initState) => {
    return {
        userData: initState.formInput.userAccount.data,
        redirect: initState
    }
}

const matchDispatchToProps = (dispatch) => {
    return {enableModifyUserData, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(UserInfoComponent);

