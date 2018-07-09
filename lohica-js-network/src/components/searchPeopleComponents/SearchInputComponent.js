import React from 'react';
import { connect } from 'react-redux';
import { Form, FormControl, ListGroup } from 'react-bootstrap';
import { searchUsers, emptySearchResult } from '../../actions/searchActions';

class SearchInputComponent extends React.Component{
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    // also validate the queue with the name regex!!!!
    handleChange(e) {
        const { userId } = this.props;
        const searchQueue = e.target.value;
        if(searchQueue){
            this.props.dispatch(searchUsers(searchQueue, userId));
        } else {
            this.props.dispatch(emptySearchResult());
        }
    }

    // prevent input from submit
    onKeyPress(e){
        if(e.which === 13){
            e.preventDefault();
        }
    }
    
    render() {
        return (
            <ListGroup>
                <Form onKeyPress={this.onKeyPress}>
                    <FormControl
                        type="text"
                        placeholder="Search people"
                        onChange={this.handleChange}
                    />
                </Form>
            </ListGroup>
        )
    }
}


const mapStateToProps = (initState) => {
    return {
        searchData: initState.formInput.searchResult,
        userId: initState.formInput.userId
    }
}

const matchDispatchToProps = (dispatch) => {
    return {searchUsers, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchInputComponent);
