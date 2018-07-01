import React from 'react';
import { connect } from 'react-redux';
import { UNAUTHENTICATED, signOutAction } from '../../actions/loginActions';
import { indexRoute } from './handlers/routes';

class LogoutComponent extends React.Component {

    componentWillMount(){
        console.log(this.props);
        this.props.signOutAction({ type: UNAUTHENTICATED });
        this.props.history.push(indexRoute);
    }

    render() {
        return null;
    }
}

const mapStateToProps = (initState) => {
  return {
      store: initState.formInput
  }
}

export default connect(mapStateToProps, {signOutAction})(LogoutComponent);