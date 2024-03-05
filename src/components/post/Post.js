import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <img
              className="postProfileImg"
              src="/assets/person/7.jpeg"
              alt=""
            />
            <span className="postUsername">John Meck </span>
            <span className="postDate"> 5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post :)</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt=""/>
        </div>
        <div className="postBottom">
          <div className="postButtonLeft">
            <img className="likeButton" src="assets/like.png"/>
            <img className="likeButton" src="assets/heart.png"/>
            <span className="postLikeCounter">30 likes</span>
          </div>
          <div className="postButtonRight"></div>
          <span className="postCommentText">10 comments</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
