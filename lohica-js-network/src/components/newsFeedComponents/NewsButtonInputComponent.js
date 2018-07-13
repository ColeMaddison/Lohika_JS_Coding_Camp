import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { newsSavePostTextImage, getUsersNewsFeed, newsFeedClearStore } from '../../actions/newsFeedAcions';

class NewsButtonInputComponent extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        const { userId } = this.props.userState;
        const { name, surname, image:userImage } = this.props.userState.userAccount.data;
        const { image, text } = this.props.userState.newsFeed.addOneNews;

        let data = new FormData();
        if(image){
            data.append('file', image);
        }
        if(text) {
            data.append('text', text);
        }
        data.append('userId', userId);
        data.append('name', name);
        data.append('surname', surname);
        data.append('userImage', userImage);

        if(!(image || text)){
            console.log('write something, add an image or both');
        } else {
            this.props.dispatch(newsSavePostTextImage(data));
            document.getElementById('formControlsFile').value = null;
        }

    }
        componentDidMount(){
            this.props.dispatch(getUsersNewsFeed());
        }

        componentWillUnmount(){
            this.props.dispatch(newsFeedClearStore());
        }

    render() {
        return (
            <Button
                bsStyle="primary"
                bsSize="lg"
                onClick={this.handleSubmit}
            >Submit</Button>
        )
    }
}

const mapStateToProps = (initState) => {
    return {
        userState: initState.formInput
    }
}
    
export default connect(mapStateToProps)(NewsButtonInputComponent);
