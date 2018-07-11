import React from 'react';
import { Grid, Row, Col, Well} from 'react-bootstrap';
import MainPanelComponent from '../HomeComponents/MainPanelComponent'
import SearchInputComponent from './SearchInputComponent'; 
import SearchResultComponent from './SearchResultComponent';
import NoResultComponent from './NoResultComponent';

class SearchPeopleComponent extends React.Component{

    render() {
        const { searchResult } = this.props.store.formInput;
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
                                    {'users' in searchResult ? 
                                        searchResult.users.map((user, i) => <SearchResultComponent userInfo={user} key={i} />)
                                        :
                                        <NoResultComponent />
                                    }
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