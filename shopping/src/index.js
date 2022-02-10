import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
// let store = createStore(() => {
//   return [
//     { id: 0, name: "최고신발", quan: 2 },
//     { id: 2, name: "최고신발2", quan: 1 },
//   ];
// });

let alertInit = true;

function reducer2(state = alertInit, action) {
  if (action.type === "alertClose") {
    return (state = false);
  } else {
    return state;
  }
}

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

let store = createStore(combineReducers({ reducer, reducer2 }));

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
