import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import AddFriendsBtnComponent from './AddFriendsBtnComponent';
import './style.css';

class SearchResultComponent extends React.Component{

    render() {
        const { gender, name, surname, age, photoLink, _id } = this.props.userInfo;
        const { friends } = this.props.userState.userAccount.data;
        const friendStatus = friends.includes(_id);
        return (
            <ListGroup>
                <ListGroupItem>
                    <div className="grid-container">
                        <div className="user-image-container">
                            <Image className="user-image" src={photoLink}/>
                        </div>
                        <div className="user-data">
                            <p>Name: <strong>{name} {surname}</strong></p>
                            <p>Gender: <strong>{gender}</strong></p>
                            <p>Age: <strong>{age}</strong></p>
                        </div>
                        <div className="user-add-friends-button">
                            <AddFriendsBtnComponent friendStatus={friendStatus} friendId={_id} />
                        </div>
                    </div>
                </ListGroupItem>
            </ListGroup>
        )
    }
}

const mapStateToProps = (initState) => {
    return {
        userState: initState.formInput
    }
}
    
export default connect(mapStateToProps)(SearchResultComponent);

// export default SearchResultComponent;