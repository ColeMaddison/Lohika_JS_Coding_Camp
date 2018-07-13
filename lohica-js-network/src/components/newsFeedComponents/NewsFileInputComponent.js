import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl } from 'react-bootstrap';
import { newsImageAddToStore } from '../../actions/newsFeedAcions';

const allowedExts = [
    "image/jpeg",
    "image/jpg",
    "image/gif",
    "image/png"
];

const MIN_SIZE = 100 * 1000;
const MAX_SIZE = 5 * 1000 * 1000;

class NewsFileInputComponent extends React.Component{
    constructor(props){
        super(props);

        this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    handleImageUpload(e){
        if(e.target.files[0]){
            let imgData = e.target.files[0];
            let imageExt = imgData.type;
            let imageSize = imgData.size;

            if(imgData && allowedExts.includes(imageExt) && (imageSize>MIN_SIZE || imageSize<MAX_SIZE)){
                this.props.dispatch(newsImageAddToStore(imgData));
            } else {
                console.log("not correct");
            }
        }
    }

    render() {
        const { name } = this.props.userState.newsFeed.addOneNews.image;
        return (
            <FormGroup controlId="formControlsFile">
                <FormControl 
                    name={name || ""}
                    type="file" 
                    onChange={this.handleImageUpload}
                />
            </FormGroup>
        )
    }
}

const mapStateToProps = (initState) => {
    return {
        userState: initState.formInput
    }
}

export default connect( mapStateToProps)(NewsFileInputComponent);
