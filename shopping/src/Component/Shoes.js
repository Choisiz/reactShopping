import React from "react";
import { Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
export default function Shoes({ shoes }) {
  const id = shoes.id;
  return (
    <Col md={4} key={shoes.i}>
      <Link to={{ pathname: `detail/${id}`, shoes: shoes }}>
        <img src={shoes.img} width="100%" alt="신발" />
      </Link>
      <h4>{shoes.title}</h4>
      <p>
        {shoes.content} & {shoes.price}
      </p>
    </Col>
  );
}
