import React from 'react';
import { ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';
import './style.css';

class SearchResultComponent extends React.Component{

    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    <div className="grid-container">
                        <div className="user-image-container">
                            <Image className="user-image" src={"2a00f47a30e922d091feb81e89de8e89"}/>
                        </div>
                        <div className="user-data">
                            <p>Name: <strong>Name Surname</strong></p>
                            <p>Gender: <strong>Male</strong></p>
                            <p>Age: <strong>25</strong></p>
                        </div>
                        <div className="user-add-friends-button">
                            <Button bsStyle="info">Friends?</Button>
                        </div>
                    </div>
                </ListGroupItem>
            </ListGroup>
        )
    }
}

export default SearchResultComponent;