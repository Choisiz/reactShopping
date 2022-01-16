import React from "react";
import { StyleSheet, Text, View } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
export default function Detail2() {
  let history = useHistory();
  let { id } = useParams();
  const pageBack = () => {
    history.goBack();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{id}</h4>
          <p>dsds</p>
          <p>131233</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-primary" onClick={pageBack}>
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
