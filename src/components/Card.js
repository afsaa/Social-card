import React from "react";

import {
  FaHeart,
  FaRegHeart,
  FaRegCommentDots,
  FaRegComment,
  FaPaperPlane,
  FaRegPaperPlane
} from "react-icons/fa";

import "./styles/Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      commented: false,
      shared: false
    };
  }

  handleIconClick = e => {
    //console.log(e.target);
    //console.log(document.querySelector(".like path"));
    let likeIconPath = document.querySelector(".like path");
    likeIconPath.classList.add("like");
    let commentIconPath = document.querySelector(".comment path");
    commentIconPath.classList.add("comment");
    let shareIconPath = document.querySelector(".share path");
    shareIconPath.classList.add("share");
    switch (e.target.className.animVal) {
      case "like":
        this.setState({
          liked: !this.state.liked
        });
        break;
      case "comment":
        this.setState({
          commented: !this.state.commented
        });
        break;
      case "share":
        this.setState({
          shared: !this.state.shared
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="Card__container">
        <div className="Card__container-image">
          <img src="http://placeimg.com/300/200/any" alt="Card" />
        </div>
        <div className="Card__container-text">
          <h2>{this.props.cardName}</h2>
          <p>{this.props.jobTitle}</p>
          <p>{this.props.cardDescription}</p>
        </div>
        <div className="Card__container-social">
          {this.state.liked ? (
            <FaHeart
              className="like"
              color="tomato"
              onClick={this.handleIconClick.bind(this)}
            />
          ) : (
            <FaRegHeart
              className="like"
              color="tomato"
              onClick={this.handleIconClick.bind(this)}
            />
          )}
          {this.state.commented ? (
            <FaRegCommentDots
              className="comment"
              color="royalblue"
              onClick={this.handleIconClick.bind(this)}
            />
          ) : (
            <FaRegComment
              className="comment"
              color="royalblue"
              onClick={this.handleIconClick.bind(this)}
            />
          )}
          {this.state.shared ? (
            <FaPaperPlane
              className="share"
              color="forestgreen"
              onClick={this.handleIconClick.bind(this)}
            />
          ) : (
            <FaRegPaperPlane
              className="share"
              color="forestgreen"
              onClick={this.handleIconClick.bind(this)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Card;
