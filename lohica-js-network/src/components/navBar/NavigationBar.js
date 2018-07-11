import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logoutRoute, signupRoute, indexRoute } from '../../routes';

const isAuthLinks = <LinkContainer to={logoutRoute}>
                        <NavItem eventKey={1}>Logout</NavItem>
                    </LinkContainer>;

const isNotAuthLinks = <LinkContainer to={signupRoute}>
                            <NavItem eventKey={1}>Signup</NavItem>
                        </LinkContainer>

const indexLink = <LinkContainer to={indexRoute}>
                            <NavItem eventKey={1}>LHK</NavItem>
                        </LinkContainer>

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Nav>
                        {indexLink}
                    </Nav>
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

export default withRouter(connect(mapStateToProps)(NavigationBar));
