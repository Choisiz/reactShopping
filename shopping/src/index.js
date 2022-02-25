import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import data from "./data/data";

let alertInit = true;
const init = [
  { id: 0, name: "최고신발", quan: 2 },
  { id: 1, name: "최고신발2", quan: 1 },
];

function shoesReducder(state = data, action) {
  if (action.type === "shoes") {
    let shoes = action.payload;
    return shoes;
  } else if (action.type === "ShoesDetail") {
    let shoes = action.payload;
    return shoes;
  } else if (action.type === "reload") {
    let id = action.payload;
    let shoes = data[id];
    return shoes;
  } else {
    return state;
  }
}

function reducer2(state = alertInit, action) {
  if (action.type === "alertClose") {
    return (state = false);
  } else {
    return state;
  }
}

function reducer(state = init, action) {
  if (action.type === "order") {
    //주문
    let found = state.findIndex((data) => {
      return data.id === action.payload.id;
    });

    if (found >= 0) {
      let copyInit = [...state];
      copyInit[found].quan++;
      return copyInit;
    } else {
      let copyInit = [...state];
      copyInit.push(action.payload);
      return copyInit;
    }
  } else if (action.type === "plus") {
    //추가
    let copyInit = [...state];
    copyInit[action.payload.id].quan++;
    return copyInit;
  } else if (action.type === "minus") {
    //삭제
    let copyInit = [...state];
    copyInit[action.payload.id].quan--;
    return copyInit;
  } else {
    return state;
  }
}

const store = createStore(
  combineReducers({ reducer, reducer2, shoesReducder })
);

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
