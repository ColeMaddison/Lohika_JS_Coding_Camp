import React from 'react';
import { Col, Row, Panel, Button, Image, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { enableModifyUserData } from '../../actions/modifyUserDataAction';
import RemoveFriendButtonComponent from '../friendsComponents/RemoveFriendButtonComponent'

class UserInfoComponent extends React.Component{
    constructor(props){
        super(props);

        this.handleModifyButton = this.handleModifyButton.bind(this);
    }

    handleModifyButton() {
        this.props.dispatch(enableModifyUserData());
    }


    render(){
        const friendData = this.props.friendData;
        const { name, surname, midName, email, age, gender, image } = this.props.userData;
        
        return(
            <Row>
                <Col md={12} >
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title componentClass="h2">{friendData ? `${friendData.name} ${friendData.surname}` : `${name} ${surname}`}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <Row>
                                <Col md={4}>
                                    <Image src={friendData ? `/${friendData.photoLink}` : `/${image}`} rounded responsive />
                                </Col>
                                <Col md={8}>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td><strong>{friendData ? `${friendData.name}` : `${name}`}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Surname:</td>
                                                <td><strong>{friendData ? `${friendData.surname}` : `${surname}`}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Midname:</td>
                                                <td><strong>{friendData ? `${friendData.midName}` : `${midName}`}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td><strong>{friendData ? `${friendData.email}` : `${email}`}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Age:</td>
                                                <td><strong>{friendData ? `${friendData.age}` : `${age}`}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td><strong>{friendData ? `${friendData.gender}` : `${gender}`}</strong></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Panel.Body>
                        <Panel.Footer>

                            {friendData ? 
                            <RemoveFriendButtonComponent
                                fromFriends={true}
                                friendId={friendData._id}
                            />
                            :
                            <Button
                                bsStyle="success"
                                onClick={this.handleModifyButton}
                                >
                                Modify
                            </Button>
                            }
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

