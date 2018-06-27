import React from 'react';
import { connect } from 'react-redux';
import {UNAUTHENTICATED, signOutAction} from '../../actions/logginActions';

class LogoutComponent extends React.Component {

    componentWillMount(){
        console.log(this.props);
        this.props.signOutAction({ type: UNAUTHENTICATED });
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