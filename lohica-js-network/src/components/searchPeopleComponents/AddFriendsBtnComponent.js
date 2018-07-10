import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addToFriendsDb, removeFromFriendsDb } from '../../actions/friendsActions';

class AddFriendsBtnComponent extends React.Component {
    constructor(props){
        super(props);

        this.addToFriendsHandler = this.addToFriendsHandler.bind(this);
        this.removeFromFriendsHandler = this.removeFromFriendsHandler.bind(this);
    }

    // handler for add to friends list button - action updates user model in db and store
    addToFriendsHandler(e){
        const { friendId } = this.props;
        this.props.dispatch(addToFriendsDb(friendId));
    }

    // handler for removing a friend button - action updates user model in db and store
    removeFromFriendsHandler(e){
        const { friendId } = this.props;
        this.props.dispatch(removeFromFriendsDb(friendId));
    }

    render() {
        // render specific button based on the friend status (is friend or is not)
        const { friendStatus } = this.props;
        return (
            <div>
                {
                    friendStatus ? 
                    <Button 
                    bsStyle="warning"
                    onClick={this.removeFromFriendsHandler}
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
