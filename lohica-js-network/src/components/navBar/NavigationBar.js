import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logoutRoute, signupRoute } from '../../routes';

const isAuthLinks = <LinkContainer to={logoutRoute}>
                        <NavItem eventKey={1}>Logout</NavItem>
                    </LinkContainer>;

const isNotAuthLinks = <LinkContainer to={signupRoute}>
                            <NavItem eventKey={1}>Signup</NavItem>
                        </LinkContainer>

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><strong>LHK</strong></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {this.props.isAuth ? isAuthLinks : isNotAuthLinks}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


const mapStateToProps = (initState) => {
    return {
        isAuth: initState.formInput.isAuthenticated
    }
}

export default connect(mapStateToProps)(NavigationBar);
