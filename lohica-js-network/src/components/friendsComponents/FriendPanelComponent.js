import React from 'react';
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import './style.css';

class FriendPanelComponent extends React.Component{
    render() {
        return(
            <ListGroup>
                <ListGroupItem>
                    <div className="grid-container">
                        <div className="user-image-container">
                            <Image className="user-image" src={'/2.jpg'}/>
                        </div>
                        <div className="user-data">
                            <p>Name: <strong>name</strong></p>
                            <p>Gender: <strong>gender</strong></p>
                            <p>Age: <strong>age</strong></p>
                        </div>
                    </div>
                </ListGroupItem>
            </ListGroup>
        )
    }
}

export default FriendPanelComponent;