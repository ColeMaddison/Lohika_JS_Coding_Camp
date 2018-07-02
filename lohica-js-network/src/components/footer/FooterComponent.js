import React from 'react';
import {Navbar} from 'react-bootstrap';

class FooterComponent extends React.Component {
    render() {
        return (
            <Navbar fixedBottom>
                <p className="text-center">Some Footer</p>
            </Navbar>
        );
    }
}

export default FooterComponent;