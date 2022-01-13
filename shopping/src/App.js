import "./App.css";
import Main from "./Component/Main";
import NavbarContainer from "./Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Detail from "./Component/Detail";
import { Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/detail" component={Detail} />
        <Route path="/:id">
          <div>hellddo</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
