import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class NoResultComponent extends React.Component{
    render(){
        return(
            <ListGroup>
                <ListGroupItem>
                    <div>
                        <h5>No result.</h5>
                    </div>
                </ListGroupItem>
            </ListGroup>
        )
    }
}

export default NoResultComponent;