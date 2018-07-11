import React from 'react';

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

class FooterComponent extends React.Component {
    render() {
        return (
            <div style={phantom}>
                <div style={style}>
                    <p>Some Footer</p>
                </div>
            </div>

        );
    }
}

export default FooterComponent;