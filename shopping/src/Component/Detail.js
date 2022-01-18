import React from "react";
import { StyleSheet, Text, View } from "react-bootstrap";
import { useHistory, useParams, useLocation } from "react-router-dom";
import "../../src/Detail.scss";
export default function Detail({ location }) {
  const shoes = location.shoes;
  let history = useHistory();

  const pageBack = () => {
    history.goBack();
  };
  return (
    <div className="container">
      <div className="row">
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
