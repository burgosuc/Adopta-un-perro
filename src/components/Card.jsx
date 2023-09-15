import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "./Tags";

const CardOne = ({ cardImg, cardTitle, cardText, bgBadge, textBadge }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" className="img" src={cardImg} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text className="TextoCard">{cardText}</Card.Text>
      </Card.Body>
      <Badge bgBadge={bgBadge} textBadge={textBadge} />
    </Card>
  );
};

export default CardOne;
