import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
export default function Shoes({ shoes }) {
  const id = shoes.id;
  let history = useHistory();
  return (
    <Col
      md={4}
      key={shoes.i}
      onClick={() => {
        history.push("/detail/" + shoes.id);
      }}
    >
      <img src={shoes.img} width="100%" alt="신발" />
      <h4>{shoes.title}</h4>
      <p>
        {shoes.content} & {shoes.price}
      </p>
    </Col>
  );
}
