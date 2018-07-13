import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Col, FormControl } from 'react-bootstrap';
import { newsMessageAddToStore } from '../../actions/newsFeedAcions';
import './style.css';

class NewsTextInputComponent extends React.Component{
    constructor(props){
        super(props);

        this.handleMessageInput = this.handleMessageInput.bind(this);
    }

    // write typed data into redux store to be able to send to db later
    handleMessageInput(e) {
        const message = e.target.value;
        this.setState({textValue: message});
        this.props.dispatch(newsMessageAddToStore(message));
    }

    render() {
        const { text } = this.props.userFeed.addOneNews;
        return (
            <React.Fragment>
                <legend className="text-center">What is up?</legend>
                <FormGroup>
                    <Col md={12} >
                        <FormControl
                            componentClass="textarea" 
                            placeholder="Please enter your message here..." 
                            rows="4"
                            value={text}
                            onChange={this.handleMessageInput}
                        />
                    </Col>
                </FormGroup>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (initState) => {
    return {
        userFeed: initState.formInput.newsFeed
    }
}

const matchDispatchToProps = (dispatch) => {
    return {newsMessageAddToStore, dispatch}
}

export default connect(mapStateToProps, matchDispatchToProps)(NewsTextInputComponent);