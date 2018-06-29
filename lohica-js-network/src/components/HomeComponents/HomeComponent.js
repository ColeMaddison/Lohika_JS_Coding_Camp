import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Well } from 'react-bootstrap';

class MainComponent extends React.Component {
    render(){
        console.log(this.props.store);
        return(
            <Grid>
                <Row>
                    <Row>
                        <Col xs={6} md={4}>
                        <Well>
                            here
                        </Well>
                        </Col>
                        <Col xs={6} md={8}>
                            <Well>
                                here
                            </Well>
                        </Col>
                    </Row>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (initState) => {
    return{
        store: initState
    }
}

export default connect(mapStateToProps)(MainComponent);
