import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { addToFriendsDb, removeFromFriendsDb } from '../../actions/friendsActions';

class AddFriendsBtnComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            show: false,
            remove: false
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAcceptRemove = this.handleAcceptRemove.bind(this);

        this.addToFriendsHandler = this.addToFriendsHandler.bind(this);
        this.removeFromFriendsHandler = this.removeFromFriendsHandler.bind(this);
    }

    handleShow(){
        this.setState({show: true});
    }

    handleClose(){
        this.setState({show: false});
    }

    handleAcceptRemove(){
        this.setState({
            remove: true,
            show: true
        });
    }

    // handler for add to friends list button - action updates user model in db and store
    addToFriendsHandler(e){
        const { friendId } = this.props;
        this.setState({remove: false});
        this.props.dispatch(addToFriendsDb(friendId));
    }

    // handler for removing a friend button - action updates user model in db and store
    removeFromFriendsHandler(e){
        if(this.state.remove){
            const { friendId } = this.props;
            this.props.dispatch(removeFromFriendsDb(friendId)); 
            this.setState({remove: false});
        }
        this.handleClose();
    }

    render() {
        // render specific button based on the friend status (is friend or is not)
        const { friendStatus } = this.props;
        return (
            <div>
                <Modal 
                    show={this.state.show} 
                    onHide={this.handleClose}
                    bsSize="small"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                        <Button bsStyle="primary" onClick={this.removeFromFriendsHandler}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
                {
                    friendStatus ? 
                    <Button 
                    bsStyle="warning"
                    onClick={this.handleAcceptRemove}
                    >Remove</Button>
                :
                    <Button 
                    bsStyle="info"
                    onClick={this.addToFriendsHandler}
                    >Friends?</Button>
                }
            </div>
        )
    }
}

const mapStateToProps = (initState) => {
    return {
        userState: initState.formInput
    }
}
    
export default connect(mapStateToProps)(AddFriendsBtnComponent);
