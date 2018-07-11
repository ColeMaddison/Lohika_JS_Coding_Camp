import React from 'react';
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import RemoveFriendButtonComponent from './RemoveFriendButtonComponent';
import { withRouter, Link } from 'react-router-dom';
import { friendsRoute } from '../../routes';
import './style.css';

const classes = "user-account-link";

class FriendPanelComponent extends React.Component{

    render() {
        const { age, name, surname, photoLink, gender, _id, email, midName } = this.props.friendData;
        return(
            <ListGroup>
                    <ListGroupItem className="friendCell">
                        <Link to={{pathname:`${friendsRoute}/${_id}`, state: { age, name, surname, photoLink, gender, _id, email, midName}}} className={classes}>
                            <div className="grid-container">
                                <div className="user-image-container">
                                    <Image className="user-image" src={`/${photoLink}`}/>
                                </div>
                                <div className="user-data">
                                    <p>Name: <strong>{name} {surname}</strong></p>
                                    <p>Gender: <strong>{gender}</strong></p>
                                    <p>Age: <strong>{age}</strong></p>
                                </div>
                            </div>
                        </Link>
                        <RemoveFriendButtonComponent friendId={_id} />
                    </ListGroupItem>
                
            </ListGroup>
        )
    }
}

export default withRouter(FriendPanelComponent);
