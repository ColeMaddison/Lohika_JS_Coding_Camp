import React from 'react';
import { Image } from 'react-bootstrap';
import '../style.css';

class NewsPostImageComponent extends React.Component {
    render() {
        const { image } = this.props;
        return(
            <div className="news-post-user-image-container">
                <Image className="news-post-user-image" src={image}/>
            </div>
        )
    }
}

export default NewsPostImageComponent;