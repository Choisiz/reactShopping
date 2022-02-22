import React, { useState } from "react";
import "./App.css";
import Main from "./Component/Main";
import NavbarContainer from "./Navbar";
import Detail from "./Component/Detail";
import { Link, Route, Switch } from "react-router-dom";
import Cart from "./Component/Cart";
export let stockContext = React.createContext(); //같은 변수값을 공유할 범위생성
function App() {
  const [stock, setStock] = useState([10, 11, 12]);
  return (
    <div className="App">
      <NavbarContainer />
      <stockContext.Provider value={stock}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </stockContext.Provider>
    </div>
  );
}

export default App;
