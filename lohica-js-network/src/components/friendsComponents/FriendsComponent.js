import React from 'react';
import { Grid, Row, Col, Well} from 'react-bootstrap';
import MainPanelComponent from '../HomeComponents/MainPanelComponent';
import FriendPanelComponent from './FriendPanelComponent';
import { getUserFriendsInfo } from '../../actions/friendsActions';
import NoResultComponent from '../searchPeopleComponents/NoResultComponent';

class FriendsComponent extends React.Component {

    componentDidMount() {
        const { userId } = this.props;
        this.props.dispatch(getUserFriendsInfo(userId));
    }

    render() {
         const { friendsInfo } = this.props.store.formInput.userAccount.data;
        return(
            <Grid>  
                <Row>
                    <Col xs={6} md={4}>
                        <MainPanelComponent />
                    </Col>
                    <Col xs={6} md={8}>
                        <Well>
                            <Row>
                                <Col md={12}>
                                    <h3>Friends:</h3>
                                </Col>
                                <Col md={12}>
                                    {friendsInfo.length ? 
                                        friendsInfo.map((friend, i) => <FriendPanelComponent friendData={friend} key={i} />)
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

// const mapStateToProps = (initState) => {
//     return {
//         searchData: initState.formInput
//     }
// }

// export default connect(mapStateToProps)(FriendsComponent);

export default FriendsComponent;