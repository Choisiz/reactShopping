import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Main() {
  return (
    <Container>
      <Row>
        <Col md="4">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
          <h4>상품명</h4>
          <p>상품설명 & 가격</p>
        </Col>
        <Col md="4">
          <img
            src="https://codingapple1.github.io/shop/shoes2.jpg"
            width="100%"
          />
          <h4>상품명</h4>
          <p>상품설명 & 가격</p>
        </Col>
        <Col md="4">
          <img
            src="https://codingapple1.github.io/shop/shoes3.jpg"
            width="100%"
          />
          <h4>상품명</h4>
          <p>상품설명 & 가격</p>
        </Col>
      </Row>
    </Container>
  );
}
