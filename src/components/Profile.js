import { authService } from "fbase";
import { useHistory } from "react-router-dom";
import React from "react";

const Profile = (props) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.replace("/");
  };
  return <>{/* <button onClick={onLogOutClick}>Log out</button> */}</>;
};

export default Profile;
