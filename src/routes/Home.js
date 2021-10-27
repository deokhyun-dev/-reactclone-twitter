import React, { useState, useEffect } from "react";
import { dbService } from "fbase";

const Home = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
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

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = await dbService
      .collection("tweets")
      .add({ text: tweet, createdAt: Date.now(), creatorId: userObj.uid });
    setTweet("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          placeholder="What's on your mind?"
          maxLength={120}
          value={tweet}
        />
        <input type="submit" value="Tweet" />
      </form>
      <div>
        {tweets.map((t, idx) => {
          return (
            <div key={t.id}>
              <h4>{t.text}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
