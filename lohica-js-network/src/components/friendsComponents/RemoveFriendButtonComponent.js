import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { removeFromFriendsDb } from '../../actions/friendsActions';

class RemoveFriendButtonComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show: false,
            remove: false
        }

        this.handleAcceptRemove = this.handleAcceptRemove.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.removeFromFriendsHandler = this.removeFromFriendsHandler.bind(this);
    }

    handleAcceptRemove(){
        this.setState({show: true});
    }

    handleClose() {
        this.setState({show: false});
    }

    removeFromFriendsHandler() {
        const { friendId } = this.props;
        this.props.dispatch(removeFromFriendsDb(friendId)); 
        this.setState({remove: false, show: false});
        console.log(this.state);
    }

    render() {
        return(
            <div className="user-add-friends-button">
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
                
                <Button 
                    bsStyle="warning"
                    onClick={this.handleAcceptRemove}
                    >Remove</Button>
            </div>
        )
    }
}

const matchDispatchToProps = (dispatch) => {
    return {removeFromFriendsDb, dispatch}
}

export default connect(matchDispatchToProps)(RemoveFriendButtonComponent);

// export default RemoveFriendButtonComponent;