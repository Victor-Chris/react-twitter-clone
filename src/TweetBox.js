import React, { useState } from 'react';
import './TweetBox.css';
import db from './firebase';
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            avatar: "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg",
            displayName: "Test User",
            userName: "test_user",
            text: tweetMessage,
            verified: false,
            image: tweetImage
        });

        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.dovercourt.org/wp-content/uploads/2019/11/610
                                -6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg" />
                    <input 
                        value={tweetMessage} 
                        onChange={e => setTweetMessage(e.target.value)} 
                        placeholder="What's happening?" 
                        type="text" 
                    />
                </div>
                <input 
                    value={tweetImage} 
                    className="tweetBox__imageInput" 
                    onChange={e => setTweetImage(e.target.value)}
                    placeholder="Upload image" 
                    type="text" 
                />
                <Button className="tweetBox__tweetButton" type="submit" onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
