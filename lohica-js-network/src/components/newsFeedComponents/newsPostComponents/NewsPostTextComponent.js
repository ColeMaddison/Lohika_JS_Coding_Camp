import React from 'react';
import '../style.css';

class NewsPostTextComponent extends React.Component{
    render() {
        const { text } = this.props;
        return(
            <div className="box news-user-text-post">{text}</div>
        )
    }
}

export default NewsPostTextComponent;