import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart() {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>{props.state[0].name}</td>
        </tr>
      </Table>
    </div>
  );
}

function stateProps(state) {
  return {
    state: state,
  };
}

export default connect(stateProps)(Cart);
