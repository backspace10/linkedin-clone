import {
  CalendarViewDay,
  Create,
  Event,
  Image,
  YouTube,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import "./Feed.css";
import InputOption from "./inputOption/InputOption";
import Post from "./post/Post";
import firebase from "firebase";
// import { selectUser } from "../../../features/userSlice";
// import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "John Monk",
      description: "test.mail@test.com",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={Image} title="Photo" color="#70B559" />
          <InputOption Icon={YouTube} title="Video" color="#E7A33E" />
          <InputOption Icon={Event} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      {/* <Post
        name="John Monk"
        description="CEO at microsoft"
        message=" We’re celebrating the legacy and strength of the Black community by
          honoring changemakers who are making history today. Our teams created
          an immersive gallery highlighting some of their incredible stories and
          contributions."
        photoUrl="https://media-exp1.licdn.com/dms/image/sync/C4E18AQH5TGxpqHensg/companyUpdate-article-image-shrink_627_1200/0/1611817404230?e=1615420800&v=beta&t=YBb0JLhq1yEXWdxxEgQmh9n45KLAp6RaTCd5ajUiJ0c"
      />
      <Post
        name="John Monk"
        description="CEO at microsoft"
        message=" We’re celebrating the legacy and strength of the Black community by
          honoring changemakers who are making history today. Our teams created
          an immersive gallery highlighting some of their incredible stories and
          contributions."
        photoUrl="https://media-exp1.licdn.com/dms/image/sync/C4E18AQH5TGxpqHensg/companyUpdate-article-image-shrink_627_1200/0/1611817404230?e=1615420800&v=beta&t=YBb0JLhq1yEXWdxxEgQmh9n45KLAp6RaTCd5ajUiJ0c"
      />
      <Post
        name="John Monk"
        description="CEO at microsoft"
        message=" We’re celebrating the legacy and strength of the Black community by
          honoring changemakers who are making history today. Our teams created
          an immersive gallery highlighting some of their incredible stories and
          contributions."
        photoUrl="https://media-exp1.licdn.com/dms/image/sync/C4E18AQH5TGxpqHensg/companyUpdate-article-image-shrink_627_1200/0/1611817404230?e=1615420800&v=beta&t=YBb0JLhq1yEXWdxxEgQmh9n45KLAp6RaTCd5ajUiJ0c"
      /> */}
    </div>
  );
};

export default Feed;
