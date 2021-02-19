import React from "react";
import iFilter from "../img/filter-icon.png";
import iPie1 from "../img/pie-1.png";
import iPie2 from "../img/pie-2.png";

// Styles
const amountStyle = { fontSize: "36px", margin: "0" };
const currencyStyle = {
  fontSize: "24px",
  color: "#658383",
};

// Minor components
const AnnouncementItem = ({ text }) => {
  return (
    <p className="bg-white px-2 py-2 rounded">
      <span className="indicator--empty"></span> {text}
    </p>
  );
};

const BalanceCard = ({ title, amount }) => {
  return (
    <div className="balance-card">
      <p className="title">{title}</p>
      <p style={amountStyle}>
        <span style={currencyStyle}>&#x20A6;</span> {amount}
      </p>
    </div>
  );
};

const TransactionItem = ({ title, amount, debit, classes }) => {
  return (
    <div className={`d-flex align-items-center py-2 ${classes ? classes : ""}`}>
      <div className="mr-3 mr-md-4">
        <span className="indicator--full"></span>
      </div>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ flex: "1" }}
      >
        <div>
          <small className="d-block">{title}</small>
          <small className="d-block">
            {debit ? "Account withdrawal" : "Account funding"}
          </small>
        </div>
        <p className={debit ? "m-0 text-danger" : "m-0 text-success"}>
          <span>&#x20A6;</span>
          {amount}
        </p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="" style={{ flex: "1" }}>
      <div className="overlay d-md-none"></div>
      <div className="mt-3">
        <p className="h2">Obinna</p>
        <p>Good morning, it’s a good day to save 🤑</p>
      </div>
      <div className="d-flex flex-wrap justify-content-md-between">
        <BalanceCard title="SAVINGS ACCOUNT" amount="2,900.00" />
        <BalanceCard title="BUSINESS ACCOUNT" amount="0.00" />
        <BalanceCard title="INVESTMENTS" amount="10,000.98" />
      </div>
      <div className="mt-4">
        <p>Announcement</p>
        <AnnouncementItem text="Finish your KYC" />
        <AnnouncementItem
          text="Follow us on our social
          media platforms"
        />
        <AnnouncementItem
          text="Request for a CloudBank
          mastercard"
        />
      </div>
      <div className="row my-4">
        <div className="col-12 col-md-7">
          <div className="shadow h-100 px-2 px-md-4 py-2">
            <div className="d-flex justify-content-between align-items-center my-3">
              <p className="m-0">Transaction</p>
              <small style={{ color: "#658383" }}>View all</small>
            </div>
            <div>
              <small>Today</small>
              <TransactionItem
                title="Bank Transfer"
                amount="1000.00"
                debit={false}
              />
              <TransactionItem
                classes="border-top"
                title="CB user Transfer"
                amount="1000.00"
                debit={false}
              />
            </div>
            <div className="mt-3">
              <small>Yesterday</small>
              <TransactionItem title="Card" amount="900.00" debit={true} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="shadow h-100 px-2 px-md-4 py-2">
            <div className="d-flex justify-content-between align-items-center my-3">
              <p className="m-0">Breakdown</p>
              <small>
                Yesterday <img src={iFilter} className="ml-2" />
              </small>
            </div>
            <div className="text-center">
              <img src={iPie1} />
            </div>
            <div className="my-3">
              <p className="m-0">Total Money Received</p>
              <p className="m-0 text-success">
                <span>&#x20A6;</span> 2,000.00
              </p>
            </div>
            <div>
              <p className="m-0">Total Money Spent</p>
              <p className="m-0 text-danger">
                <span>&#x20A6;</span> 900.00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-12">
          <div className="shadow h-100 px-2 px-md-4 py-2">
            <div className="d-flex flex-wrap my-3">
              <div className="text-center">
                <img src={iPie2} />
                <div className="d-flex flex-wrap mt-4">
                  <p className="text-muted">
                    <span className="indicator--full mr-2"></span> Savings
                  </p>
                  <p className="text-muted mx-2">
                    <span className="indicator--full border-danger bg-danger mr-2"></span>
                    Business
                  </p>
                  <p className="text-muted">
                    <span className="indicator--full bg-secondary border-secondary mr-2"></span>
                    Investment
                  </p>
                </div>
              </div>
              <div className="mt-2 ml-md-5">
                <div className="mb-4">
                  <p className="m-0">Savings</p>
                  <p className="m-0 text-success">
                    <span>&#x20A6;</span> 2,900.00
                  </p>
                </div>
                <div className="mb-4">
                  <p className="m-0">Business</p>
                  <p className="m-0 text-success">
                    <span>&#x20A6;</span> 0.00
                  </p>
                </div>
                <div>
                  <p className="m-0">Investment</p>
                  <p className="m-0 text-success">
                    <span>&#x20A6;</span> 9.98
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
