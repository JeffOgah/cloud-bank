import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AppNavbar from "./component/AppNavbar";
import Home from "./component/Home";
import Sidebar from "./component/Sidebar";
import Investment from "./component/Investment";
import iBars from "./img/bars.svg";
import "./css/App.css";

function App() {
  function toggleSidebar(e) {
    document.querySelector(".sidebar").classList.toggle("sidebar-mobile");
    document.querySelector(".overlay").classList.toggle("active");
  }
  return (
    <Router>
      <>
        <AppNavbar />
        <img
          src={iBars}
          className="ml-2 mt-3 d-md-none"
          style={{ height: "30px", width: "30px" }}
          onClick={toggleSidebar}
        />
        <div className="container d-flex mt-3 mt-md-4">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/investment" component={Investment}></Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
