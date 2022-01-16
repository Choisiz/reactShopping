import "./App.css";
import Main from "./Component/Main";
import NavbarContainer from "./Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Detail from "./Component/Detail";
import { Link, Route, Switch } from "react-router-dom";
import Shoes from "./Component/Shoes";
import { useState } from "react";
function App() {
  const [shoes, setShoes] = useState();
  return (
    <div className="App">
      <NavbarContainer />
      <Jumbotron />
      <Switch>
        <Route exact path="/" reder={() => <Main />} />
        <Route path="/detail" component={Detail} />
        <Route path="/:id">
          <div>hellddo</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
