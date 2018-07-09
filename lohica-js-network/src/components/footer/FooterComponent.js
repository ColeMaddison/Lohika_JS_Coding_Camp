import React from 'react';
import {Navbar} from 'react-bootstrap';
import './style.css';

class FooterComponent extends React.Component {
    render() {
        return (
            <Navbar fixedBottom className="footer-style">
                <p className="text-center">Some Footer</p>
            </Navbar>
            // <div className="footer-style">
            //     <p className="text-center">Some Footer</p>
            // </div>
        
        );
    }
}

export default FooterComponent;