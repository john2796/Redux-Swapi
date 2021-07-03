import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
const Character = ({
  character: {
    url,
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    created
  }
}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{created}</CardSubtitle>
        <CardText>
          {height}
          {mass}
          {hair_color}
          {skin_color}
          {eye_color}
          {birth_year}
          {gender}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Character;
