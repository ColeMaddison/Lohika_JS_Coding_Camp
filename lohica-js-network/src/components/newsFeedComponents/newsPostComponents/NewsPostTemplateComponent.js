import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import NewsPostUserInfoComponent from './NewsPostUserInfoComponent';
import NewsPostImageComponent from './NewsPostImageComponent';
import NewsPostTextComponent from './NewsPostTextComponent';

class NewsPostTemplateComponent extends React.Component{
    render() {
        const { date, image, text, userId, userImage, userName, userSurname } = this.props.news;
        return(
            <ListGroup> 
                <ListGroupItem>
                <div className="news-wrapper">
                    <NewsPostUserInfoComponent userName={userName} date={date} userSurname={userSurname} userId={userId} userImage={userImage} />
                    {image ? <NewsPostImageComponent image={image} /> : null}
                    {text ? <NewsPostTextComponent text={text} /> : null}
                </div>
                </ListGroupItem>
            </ListGroup>
        )
    }
}

export default NewsPostTemplateComponent;