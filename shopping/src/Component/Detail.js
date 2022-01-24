import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../../src/Detail.scss";
import styled from "styled-components";
import { stockContext } from "../App";
export default function Detail({ location }) {
  const Box = styled.div`
    padding: 20px;
  `;

  const Title = styled.h4`
    font-size: 25px;
    color: ${(props) => props.color};
  `;

  const shoes = location.shoes;
  console.log("s", shoes);
  let history = useHistory();
  let stock = useContext(stockContext);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
  });

  const [alert, setAlert] = useState(true);

  const pageBack = () => {
    history.goBack();
  };

  const myAlert = (
    <div className="my-alert">
      <p>재고가 얼마 남지 않았습니다</p>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <Box>
          <Title color={"red"}>상품판매</Title>
        </Box>
        {alert ? myAlert : null}
        <div className="col-md-6">
          <img src={shoes.img} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoes.title}</h4>
          <p>내용: {shoes.content}</p>
          <p>가격: {shoes.price}</p>
          <p>재고: {stock[shoes.id]}</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-primary" onClick={pageBack}>
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
