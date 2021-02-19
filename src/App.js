import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AppNavbar from "./component/AppNavbar";
import Home from "./component/Home";
import Sidebar from "./component/Sidebar";
import Investment from "./component/Investment";
import "./css/App.css";

function App() {
  return (
    <Router>
      <>
        <AppNavbar />
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
