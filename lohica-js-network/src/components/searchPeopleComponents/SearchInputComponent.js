import React from 'react';
import { connect } from 'react-redux';
import { Form, FormControl, ListGroup } from 'react-bootstrap';
import { searchUsers } from '../../actions/searchActions';

class SearchInputComponent extends React.Component{
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    // CONTINUE HERE


    // also validate the queue with the name regex!!!!
    handleChange(e) {
        const searchQueue = e.target.value;
        this.props.dispatch(searchUsers(searchQueue));
        console.log(this.props);
    }

    render() {
        return (
            <ListGroup>
                <Form>
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
        searchData: initState.formInput.searchResult
    }
}

const matchDispatchToProps = (dispatch) => {
    return {searchUsers, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchInputComponent);

// export default SearchInputComponent;