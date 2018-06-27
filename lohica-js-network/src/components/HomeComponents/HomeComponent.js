import React from 'react';
import { connect } from 'react-redux';

class MainComponent extends React.Component {
    render(){
        console.log(this.props.store);
        return(
            <h2>That is main page</h2>
        )
    }
}

const mapStateToProps = (initState) => {
    return{
        store: initState
    }
}

export default connect(mapStateToProps)(MainComponent);
