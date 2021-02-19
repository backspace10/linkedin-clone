import { Avatar } from "@material-ui/core";
import {
  Add,
  ChatOutlined,
  Done,
  Image,
  MoreHoriz,
  SendOutlined,
  SentimentSatisfiedOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { forwardRef, useState } from "react";
import InputOption from "../inputOption/InputOption";
import "./Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(!follow);
  };

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <div className="avtar__info">
          <Avatar src="https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg" />
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="follow">
          <div className="follow__block">
            {follow ? (
              <Done className="add__avatar" />
            ) : (
              <Add className="add__avatar" />
            )}
            <h3 onClick={handleFollow}>{follow ? "Following" : "Follow"}</h3>
          </div>
          <MoreHoriz className="more__avatar" />
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img
          src="https://media-exp1.licdn.com/dms/image/sync/C5634AQE4azQlMLPPBg/ugc-proxy-shrink_800/0/1612339242158?e=1612436400&v=beta&t=FpY3GPEHqqbAsJA-pUi4A9SHqPNMNfW0N7hqxU5Fsuc"
          alt=""
        />
        <div className="post__desc">
          <p>
            We’re celebrating the legacy and strength of the Black community by
            honoring changemakers who are making history today.{" "}
          </p>
          <div className="source_info">
            <p>
              blogs.microsoft.com{" "}
              <span className="time__read">10 min read</span>
            </p>
          </div>
        </div>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Post" color="gray" />
      </div>
      <div className="add__comment">
        <Avatar />
        <div className="one__border">
          <input type="text" placeholder="Add a comment..." />
          <SentimentSatisfiedOutlined />
          <Image />
        </div>
      </div>
    </div>
  );
});

export default Post;
