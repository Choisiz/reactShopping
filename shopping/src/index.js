import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// let store = createStore(() => {
//   return [
//     { id: 0, name: "최고신발", quan: 2 },
//     { id: 2, name: "최고신발2", quan: 1 },
//   ];
// });

let init = [
  { id: 0, name: "최고신발", quan: 2 },
  { id: 2, name: "최고신발2", quan: 1 },
];

function reducer(state = init, action) {
  if (action.type === "plus") {
    let copyInit = [...state]; //사본만듬
    copyInit[0].quan++;
    return copyInit;
  } else if (action.type === "minus") {
    let copyInit = [...state]; //사본만듬
    copyInit[0].quan--;
    return copyInit;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
