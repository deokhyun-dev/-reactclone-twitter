import { dbService } from "fbase";
import React, { useState } from "react";

const Tweet = ({ tweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("진짜 지우실?");
    if (ok) {
      await dbService.doc(`tweets/${tweetObj.id}`).delete();
      //   await dbService.collection("tweets").doc(tweetObj.id).delete();
    }
  };
  const { id, createdAt, creatorId, text } = tweetObj;

  const toggleEditing = () => setEditing((prev) => !prev);

  return (
    <>
      <div>
        {editing ? (
          <>
            <form>
              <input value={newTweet} required />
            </form>
            <button onClick={toggleEditing}>Cancel</button>
          </>
        ) : (
          <>
            <h4>{text}</h4>

            {isOwner && (
              <>
                <button onClick={onDeleteClick}>Delete</button>
                <button onClick={toggleEditing}>Edit</button>
              </>
            )}
          </>
        )}
        )
      </div>
    </>
  );
};

export default Tweet;
