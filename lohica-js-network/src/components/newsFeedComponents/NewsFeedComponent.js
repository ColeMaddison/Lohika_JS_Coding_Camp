import React from 'react';
import { Grid, Row, Col, Well} from 'react-bootstrap';
import MainPanelComponent from '../HomeComponents/MainPanelComponent';
import NewsInputComponent from './NewsInputComponent';
import NewsPostTemplateComponent from './newsPostComponents/NewsPostTemplateComponent';

class NewsFeedComponent extends React.Component{

    render() {
        // console.log(this.props.store.formInput.newsFeed.allNews);
        const {allNews} = this.props.store.formInput.newsFeed;
        return (
            <Grid>  
                <Row>
                    <Col xs={6} md={4}>
                        <MainPanelComponent />
                    </Col>
                    <Col xs={6} md={8}>
                        <Well>
                            <NewsInputComponent />
                        </Well>
                        <Well>
                            <Row>
                                <Col md={12}>
                                    {allNews.map((news, i) => {
                                        return <NewsPostTemplateComponent news={news} key={news._id} />;
                                    })}
                                </Col>
                            </Row>
                        </Well>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default NewsFeedComponent;