import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { movieStarsData } from "../../helpers/data";
import StarCard from "./StarCard";

const StarContainer = () => {

    const [search, setShearch] = useState("")

    const filteredStars = movieStarsData.filter(star => star.name.toLowerCase().includes(search.trim().toLowerCase()))
    console.log(filteredStars)
// console.log(search)
//   console.log(movieStarsData);


  return (
    <div>
      <Form.Control
        type="search"
        placeholder="Search star..."
        className="w-50 mx-auto my-5"
        value={search}
        onChange={(e) => setShearch(e.target.value)}
      />
      <Container className="p-3 rounded-4 card-container my-3">
        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center g-5">
          {filteredStars.map((star) => (
            <StarCard key={star.id} star={star} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StarContainer;
