import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const StarCard = ({ star }) => {
  const [show, setShow] = useState(false);
  // console.log(star)
  return (
    <Col>
      <Card className="star-card" onClick={() => setShow(!show)}>
        {!show ? (
          <Card.Img
            role="button"
            variant="top"
            src={star.img}
            title={star.name}
          />
        ) : (
          <ul className="text-align h-100">
            <h5 className="my-4">MOVİES</h5>
            {star.movies.map((movie) => (
              <li className="list-unstyled text-start h5 my-2">📹 {movie}</li>
            ))}
          </ul>
        )}
      </Card>
      <h3 className="title p-2 my-2">{star.name}</h3>
    </Col>
  );
};

export default StarCard;
