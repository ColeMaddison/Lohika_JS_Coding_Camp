import React from 'react';
import { FormGroup, ControlLabel, Col, FormControl, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { validateImage } from '../../actions/inputAction';
import { setUserDataImage, setUserDataImageAsObject } from '../../actions/modifyUserDataAction';

const MIN_SIZE = 100 * 1000;
const MAX_SIZE = 5 * 1000 * 1000;
const elem = <Alert bsStyle="warning">
                <strong>Warning</strong> File min 1KB, max 5MB, ext: jpeg, png, gif
            </Alert>;

class ImageInput extends React.Component {
    constructor(props){
        super(props);

        // this.state = {
        //     imgURL: ""
        // }

        this.imageUpload = this.imageUpload.bind(this);
        
        this.allowedExts = [
            "image/jpeg",
            "image/jpg",
            "image/gif",
            "image/png"
        ];

    }

    imageUpload (e) {
        let imgData = e.target.files[0];
        let imageExt = imgData ? imgData.type : '';
        let imageSize = imgData ? imgData.size : '';

        const reader = new FileReader();
        // let url = reader.readAsDataURL(imgData);
        reader.onloadend = function (e) {
            this.props.dispatch(setUserDataImage([reader.result]));
        }.bind(this);
        
        this.props.dispatch(setUserDataImageAsObject(imgData));

        let dispatchObj = {
            imgData,
            status: null,
            imageValid: true,
            show: false
        }

        if(!imgData){
            dispatchObj.imgData = '';
            dispatchObj.imageValid = false;
        } else if(!(this.allowedExts.includes(imageExt)) || !(imageSize>MIN_SIZE || imageSize<MAX_SIZE)){
            dispatchObj.status = "error";
            dispatchObj.imageValid = false;
            dispatchObj.show = true
        }

        

        return this.props.dispatch(validateImage(dispatchObj));
    }

    render() {
        let { imageStatus, imageValidShow } = this.props.inputState.regForm;
        let { id, col1, col2, offset } = this.props;


        return(
            <FormGroup 
                bsSize= "small"
                controlId={id}
                validationState={imageStatus}
                name="file"
                >
                <Col md={col1}>
                    <Col mdOffset={offset}>
                        <ControlLabel>Your photo</ControlLabel>
                    </Col>
                </Col>
                <Col md={col2}>
                    <FormControl 
                        type="file"
                        onChange={this.imageUpload}
                        />
                    {imageValidShow ? elem : null}
                </Col>
            </FormGroup>
        );
    }
}

const mapStateToProps = (initState) => {
    return {
        inputState: initState.formInput
    }
}

const matchDispatchTpProps = (dispatch) => {
    return {validateImage, dispatch}
}

export default connect(mapStateToProps, matchDispatchTpProps)(ImageInput);