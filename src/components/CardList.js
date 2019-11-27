import React from "react";
import Card from "./Card";

import "./styles/CardList.css";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.cardItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  }
  render() {
    return (
      <ul className="CardList__container">
        {this.cardItems.map((cardItem, index) => (
          <li key={index.toString()}>
            <Card
              cardName="Andrés Saa"
              jobTitle="Frontend Engineer"
              cardDescription="Lorem ipsum dolor ..."
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default CardList;
