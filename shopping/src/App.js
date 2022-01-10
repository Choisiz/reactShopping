import "./App.css";
import Main from "./Component/Main";
import NavbarContainer from "./Navbar";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
