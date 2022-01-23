import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import data from "../data/data";
import Jumbotron from "../Jumbotron/Jumbotron";
import Shoes from "./Shoes";
import axios from "axios";
export default function Main() {
  const [shoes, setShoes] = useState(data);
  const [mores, setMores] = useState("");
  //업로드시 ajax요청하고 싶다면 useEffect이용
  const more = () => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((res) => {
        setShoes([...shoes, ...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(shoes);
  return (
    <div>
      <Jumbotron />
      <Container>
        <Row>
          {Array.isArray(shoes) ? (
            shoes.map((value, i) => <Shoes shoes={value} key={i} />)
          ) : (
            <Col>
              <h4>데이터가 존재하지 않습니다</h4>
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
