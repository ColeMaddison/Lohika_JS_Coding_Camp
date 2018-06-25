import React from 'react';
import {FormGroup, ControlLabel, Col, FormControl, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import { validateImage } from '../../actions/inputAction';

const MIN_SIZE = 100 * 1000;
const MAX_SIZE = 5 * 1000 * 1000;
const elem = <Alert bsStyle="warning">
                <strong>Warning</strong> File min 1KB, max 5MB, ext: jpeg, png, gif
            </Alert>;

class ImageInput extends React.Component {
    constructor(props){
        super(props);

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
        let imageExt = imgData.type;
        let imageSize = imgData.size;

        let status = null;
        let imageValid = false;
        let show = false;
        if(!imgData){
            return this.props.dispatch(validateImage({
                status,
                imageValid,
                show
            }));
        }
        if(!(this.allowedExts.includes(imageExt)) || !(imageSize>MIN_SIZE || imageSize<MAX_SIZE)){
            return this.props.dispatch(validateImage({
                status: "error",
                imageValid,
                show: true
            }));
        } else {
            return this.props.dispatch(validateImage({
                imgData,
                status,
                imageValid: true,
                show
            }));
        }

    }

    render() {
        return(
            <FormGroup 
                bsSize= "small"
                controlId={this.props.id}
                validationState={this.props.inputState.regForm.imageStatus}
                name="file"
                >
                <Col md={4}>
                    <Col mdOffset={9}>
                        <ControlLabel>Your photo</ControlLabel>
                    </Col>
                </Col>
                <Col md={4}>
                    <FormControl 
                        type="file"
                        onChange={this.imageUpload}
                        />
                    {this.props.inputState.regForm.imageValidShow ? elem : null}
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