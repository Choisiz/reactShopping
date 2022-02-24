import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Cart(props) {
  let state = useSelector((state) => state.reducer);
  let dispatch = useDispatch();
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {state.map((a, i) => {
          return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch({ type: "plus", payload: { id: a.id } });
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "minus", payload: { id: a.id } });
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          );
        })}
      </Table>

      {props.stateAlert === true ? (
        <div className="my-alert2">
          <p>지금구매하시면 신규할인 20%</p>
          <button
            onClick={() =>
              dispatch({ type: "alertClose", payload: { name: "kim" } })
            }
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

// function stateProps(state) {
//   console.log(state);
//   return {
//     state: state.reducer,
//     stateAlert: state.reducer2,
//   };
// }

// export default connect(stateProps)(Cart);

export default Cart;
