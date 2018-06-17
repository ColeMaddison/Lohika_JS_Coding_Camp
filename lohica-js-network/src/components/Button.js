import React from 'react';
import { Button } from 'react-bootstrap';

class HelloWorld extends React.Component {
    render() {
    	return (
        <div>
            <Button>Default</Button>
    		<Button bsStyle="danger" bsSize="large">Hello World Danger</Button>
    		<Button bsStyle="primary">Hello World Primary</Button>
    		<Button bsStyle="success">Hello World Success</Button>
        </div> );
    }
}
export default HelloWorld;