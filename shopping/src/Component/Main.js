import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data/data";
import Shoes from "./Shoes";
export default function Main() {
  const [shoes, setShoes] = useState(data);
  return (
    <Container>
      <Row>
        {data.map(({ img, title, content, price }) => (
          <Col>
            <img src={img} width="100%" />
            <h4>{title}</h4>
            <p>
              {content} & {price}
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
