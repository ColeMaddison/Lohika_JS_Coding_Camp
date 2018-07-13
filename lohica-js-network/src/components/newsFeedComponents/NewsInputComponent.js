import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, Form } from 'react-bootstrap';
import NewsTextInputComponent from './NewsTextInputComponent';
import NewsFileInputComponent from './NewsFileInputComponent';
import NewsButtonInputComponent from './NewsButtonInputComponent';

class NewsInputComponent extends React.Component{

    resetForm = () => {
        this.refs.form.refs.reset();
    };
    componentDidMount(){
    }

    render() {
        return (
            <Row>
                <Col xs={4} md={12}>
                    <Form ref='form' horizontal>
                        <NewsTextInputComponent />
                        <FormGroup>
                            <Col md={12}>
                                <Col md={10}>
                                    <NewsFileInputComponent />
                                </Col>
                                <Col md={1}>
                                    <NewsButtonInputComponent />
                                </Col>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (initState) => {
    return {
        userState: initState.formInput
    }
}
    
export default connect(mapStateToProps)(NewsInputComponent);

// export default NewsInputComponent;