import "./App.css";
import Main from "./Component/Main";
import NavbarContainer from "./Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Detail from "./Component/Detail";
import Detail2 from "./Component/Detail2";
import { Link, Route, Switch } from "react-router-dom";
import Shoes from "./Component/Shoes";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/detail" component={Detail} />
        <Route path="/detail/:id" exact component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
