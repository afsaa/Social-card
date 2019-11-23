import React from 'react'

import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane
} from "react-icons/fa";

import './styles/Card.css'; 

class Card extends React.Component {
    render() {
        return (
          <div className='Card__container'>
            <div className='Card__container-image'>
              <img src='http://placeimg.com/300/200/any' alt='Card' />
            </div>
            <div className='Card__container-text'>
              <h2>{this.props.cardName}</h2>
              <p>{this.props.jobTitle}</p>
              <p>{this.props.cardDescription}</p>
            </div>
            <div className='Card__container-social'>
              <h2>
                <FaRegHeart />
                <FaRegComment />
                <FaRegPaperPlane />
              </h2>
            </div>
          </div>
        );
    }
}

export default Card;