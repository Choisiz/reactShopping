import { Button } from "react-bootstrap";
import React from "react";

export default function Jumbotron() {
  return (
    <div className="background">
      <h1>20% Season Off</h1>
      <p>전 상품 시즌오프 20% 할인가격</p>
      <p>
        <Button variant="primary">Lear more</Button>
      </p>
    </div>
  );
}
