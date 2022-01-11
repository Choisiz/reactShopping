import React from "react";
import { Col } from "react-bootstrap";
export default function Shoes({ shoes }) {
  console.log(shoes);
  return (
    <Col key={shoes.i}>
      <img src={shoes.img} width="100%" alt="신발" />
      <h4>{shoes.title}</h4>
      <p>
        {shoes.content} & {shoes.price}
      </p>
    </Col>
  );
}
