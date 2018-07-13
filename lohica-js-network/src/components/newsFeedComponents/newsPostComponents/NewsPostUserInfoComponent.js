import React from 'react';
import { Image } from 'react-bootstrap';
import '../style.css';

class newsPostUserInfoComponent extends React.Component{
    render() {
        const { userName, date, userSurname,/* userId,*/ userImage } = this.props;
        return(
            <div className="news-user-info">
                <div className="news-grid-container">
                    <div className="user-image-container">
                        <Image className="news-user-image" src={userImage}/>
                    </div>
                    <div className="news-user-data">
                        <p>Name: <strong>{userName} {userSurname}</strong></p>
                        <p>Date: {date}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default newsPostUserInfoComponent;