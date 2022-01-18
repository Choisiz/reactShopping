import React from "react";
import { StyleSheet, Text, View } from "react-bootstrap";
import { useHistory, useParams, useLocation } from "react-router-dom";
import "../../src/Detail.scss";
import styled from "styled-components";
export default function Detail({ location }) {
  const shoes = location.shoes;
  let history = useHistory();

  const pageBack = () => {
    history.goBack();
  };

  const Box = styled.div`
    padding: 20px;
  `;

  const Title = styled.h4`
    font-size: 25px;
    color: ${(props) => props.color};
  `;
  return (
    <div className="container">
      <div className="row">
        <Box>
          <Title color={"red"}>상품판매</Title>
        </Box>
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
        <div className="col-md-6">
          <img src={shoes.img} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-primary" onClick={pageBack}>
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
