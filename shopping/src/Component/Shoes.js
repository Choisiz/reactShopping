import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export default function Shoes({ shoes }) {
  const id = shoes.id;
  let dispatch = useDispatch();
  let history = useHistory();
  return (
    <Col
      md={4}
      key={shoes.i}
      onClick={() => {
        dispatch({ type: "ShoesDetail", payload: shoes });
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
