import { authService } from "fbase";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { dbService } from "fbase";

const Profile = (props) => {
  const { refreshUser } = props;
  const { displayName, uid, updateProfile } = props.userObj;
  const history = useHistory();
  const [newDisplayName, setDisplayName] = useState(displayName);

  const onLogOutClick = () => {
    authService.signOut();
    history.replace("/");
    refreshUser();
  };

  const getMyTweets = async () => {
    const tweets = await dbService
      .collection("tweets")
      .where("creatorId", "==", uid)
      .orderBy("createdAt", "desc")
      .get();
    console.log(tweets.docs.map((doc) => doc.data()));
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setDisplayName(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (displayName !== newDisplayName) {
      await updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  useEffect(() => {
    getMyTweets();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={newDisplayName} type="text" onChange={onChange} />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};

export default Profile;
