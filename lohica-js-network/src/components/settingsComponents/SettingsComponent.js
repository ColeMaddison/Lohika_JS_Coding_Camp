import React from 'react';
import { Grid, Row, Col, Well} from 'react-bootstrap';
import MainPanelComponent from '../HomeComponents/MainPanelComponent'

class SettingsComponent extends React.Component{
    render() {
        return (
            <Grid>  
                <Row>
                    <Col xs={6} md={4}>
                        <MainPanelComponent />
                    </Col>
                    <Col xs={6} md={8}>
                        <Well>
                            <p>Setings</p>
                        </Well>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default SettingsComponent;