import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data/data";
import Shoes from "./Shoes";
export default function Main() {
  const [shoes, setShoes] = useState(data);
  return (
    <Container>
      <Row>
        {Array.isArray(shoes) ? (
          shoes.map((value, i) => <Shoes shoes={value} key={i} />)
        ) : (
          <Col>
            <h4>데이가 존재하지 않습니다</h4>
          </Col>
        )}
      </Row>
    </Container>
  );
}
