import { authService } from "fbase";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { dbService } from "fbase";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.replace("/");
  };

  const getMyTweets = async () => {
    const tweets = await dbService
      .collection("tweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt", "desc")
      .get();
    console.log(tweets.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getMyTweets();
  }, []);

  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};

export default Profile;
