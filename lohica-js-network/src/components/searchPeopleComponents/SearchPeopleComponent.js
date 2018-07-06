import React from 'react';
import { Grid, Row, Col, Well} from 'react-bootstrap';
import MainPanelComponent from '../HomeComponents/MainPanelComponent'
import SearchInputComponent from './SearchInputComponent'; 
import SearchResultComponent from './SearchResultComponent';
import NoResultComponent from './NoResultComponent';

class SearchPeopleComponent extends React.Component{
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
    }

    render() {
        return (
            <Grid>  
                <Row>
                    <Col xs={6} md={4}>
                        <MainPanelComponent />
                    </Col>
                    <Col xs={6} md={8}>
                        <Well>
                            <Row>
                                <Col md={12}>
                                    <SearchInputComponent />
                                </Col>
                                <Col md={12}>
                                    <NoResultComponent />
                                    <SearchResultComponent />
                                    <SearchResultComponent />
                                    <SearchResultComponent />
                                </Col>
                            </Row>
                        </Well>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default SearchPeopleComponent;