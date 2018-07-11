import React from 'react';
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import RemoveFriendButtonComponent from './RemoveFriendButtonComponent';
import './style.css';

class FriendPanelComponent extends React.Component{
    render() {
        const { age, name, surname, photoLink, gender, _id } = this.props.friendData;
        return(
            <ListGroup>
                <ListGroupItem>
                    <div className="grid-container">
                        <div className="user-image-container">
                            <Image className="user-image" src={`/${photoLink}`}/>
                        </div>
                        <div className="user-data">
                            <p>Name: <strong>{name} {surname}</strong></p>
                            <p>Gender: <strong>{gender}</strong></p>
                            <p>Age: <strong>{age}</strong></p>
                        </div>
                        <RemoveFriendButtonComponent friendId={_id} />
                    </div>
                </ListGroupItem>
            </ListGroup>
        )
    }
}

export default FriendPanelComponent;