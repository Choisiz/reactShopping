import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import data from "./data/data";

let alertInit = true;

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

let init = [
  { id: 0, name: "최고신발", quan: 2 },
  { id: 2, name: "최고신발2", quan: 1 },
];

function reducer(state = init, action) {
  if (action.type === "order") {
    let copyInit = [...state];
    copyInit.push(action.payload);
    return copyInit;
  } else if (action.type === "plus") {
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

let store = createStore(combineReducers({ reducer, reducer2, shoesReducder }));

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
