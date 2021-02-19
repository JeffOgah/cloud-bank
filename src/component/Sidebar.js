import React from "react";
import { Link } from "react-router-dom";
import iHome from "../img/home.png";
import iSend from "../img/send.png";
import iTransaction from "../img/transactions.png";
import iSettings from "../img/settings.png";
import iLogout from "../img/logout.png";

const Sidebar = () => {
  return (
    <aside className="sidebar d-none d-md-block">
      <ul className="list-unstyled">
        <li>
          <Link to="/">
            <img src={iHome} className="mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={iSend} className="mr-2" />
            Send Money
          </Link>
        </li>
        <li>
          <Link to="/investment">
            <img src={iSend} className="mr-2" />
            Investment
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={iTransaction} className="mr-2" />
            Transactions
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={iSettings} className="mr-2" />
            Settings
          </Link>
        </li>
        <li>
          <Link to="/" className="text-danger">
            <img src={iLogout} className="mr-2" />
            Log out
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
