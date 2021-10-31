import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Tweet from "components/Tweet";
import TweetFactory from "../components/TweetFactory";

const Home = ({ userObj }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    dbService
      .collection("tweets")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const tweetsArr = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTweets(tweetsArr);
      });
  }, []);

  return (
    <div>
      <TweetFactory userObj={userObj} />
      <div>
        {tweets.map((t, idx) => {
          return (
            <Tweet
              key={t.id}
              tweetObj={t}
              isOwner={t.creatorId === userObj.uid ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
