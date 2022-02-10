import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {props.state.map((a, i) => {
          return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              <td>
                <button
                  onClick={() => {
                    props.dispatch({ type: "plus" });
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    props.dispatch({ type: "minus" });
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          );
        })}
      </Table>
      //alert같은경우에는 한 컴포넌트에서만 사용하면 리덕스에 저장할필요x //굳이
      공유할게 아니면 쓸필요가 없다. useState를 추천
      {props.stateAlert === true ? (
        <div className="my-alert2">
          <p>지금구매하시면 신규할인 20%</p>
          <button
            onClick={() =>
              props.dispatch({ type: "alertClose", payload: { name: "kim" } })
            }
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

function stateProps(state) {
  console.log(state);
  return {
    state: state.reducer,
    stateAlert: state.reducer2,
  };
}

export default connect(stateProps)(Cart);
