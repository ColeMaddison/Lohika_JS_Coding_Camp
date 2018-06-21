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

        this.state = {
            show: false
        };

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
        if(!imgData){
            this.setState({show: false});
            return this.props.dispatch(validateImage({
                status: null,
                imageValid: false
            }));
        }
        let imageExt = imgData.type;
        let imageSize = imgData.size;
        if(!(this.allowedExts.includes(imageExt)) || !(imageSize>MIN_SIZE || imageSize<MAX_SIZE)){
            this.setState({show: true});
            return this.props.dispatch(validateImage({
                status: "error",
                imageValid: false
            }));
        } else {
            this.setState({show: false});
            return this.props.dispatch(validateImage({
                imgData,
                status: null,
                imageValid: true
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
                <Col md={6}>
                    <FormControl 
                        type="file"
                        onChange={this.imageUpload}
                        />
                    {this.state.show ? elem : null}
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