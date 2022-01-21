import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import data from "../data/data";
import Jumbotron from "../Jumbotron/Jumbotron";
import Shoes from "./Shoes";
import axios from "axios";
export default function Main() {
  const [shoes, setShoes] = useState(data);
  const more = () => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        console.log("false");
      });
  };
  return (
    <div>
      <Jumbotron />
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
        <Row>
          <Col>
            <Button onClick={more}>더보기</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
