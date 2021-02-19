import React from "react";
import iIcon1 from "../img/icon-1.png";

const InvestmentCard = ({ title, rate, duration }) => {
  return (
    <div className="investment-card shadow">
      <div className="overlay d-md-none"></div>
      <header className="text-center text-white pt-2 mb-4">
        <p className="m-0">{title}</p>
        <p className="m-0 font-weight-bold" style={{ fontSize: "36px" }}>
          {rate}
        </p>
        <p className="m-0">{duration}</p>
      </header>
      <div className="text-center">
        <p>
          <span className="text-success">&#10003;</span> Automatically Renewable
        </p>
        <p>
          <span className="text-success">&#10003;</span> Automatic Renewal
          Options
        </p>
        <p>
          <span className="text-success">&#10003;</span> Cancel Renewal Anytime
        </p>
        <p>
          <span className="text-success">&#10003;</span> Fast Automated Payout
        </p>
        <button
          className="btn text-white"
          style={{
            background: "#008080",
            borderRadius: "10px",
          }}
        >
          Make Investment
        </button>
      </div>
    </div>
  );
};

const Investment = () => {
  return (
    <div className="" style={{ flex: "1" }}>
      <div className="d-flex flex-wrap align-items-center">
        <div className="mt-3 mr-5">
          <p className="h2">Investment</p>
          <p>
            Choose from our available <br /> investment plans
          </p>
        </div>
        <div className="d-flex flex-wrap mb-3">
          <span>
            <img src={iIcon1} className="mr-2 mb-2" />
            Investment Plans
          </span>
          <span className="mx-sm-3 mb-2 my-md-0" style={{ opacity: "50%" }}>
            <img src={iIcon1} className="mr-2" />
            Create Investment
          </span>
          <span className="mb-2" style={{ opacity: "50%" }}>
            <img src={iIcon1} className="mr-2" />
            Confirm Investment
          </span>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <InvestmentCard title="Silver" rate="12% P/A" duration="30 Days" />
        <InvestmentCard title="Gold" rate="13% P/A" duration="90 Days" />
        <InvestmentCard title="Diamond" rate="13.5% P/A" duration="180 Days" />
        <InvestmentCard title="Platinum" rate="15% P/A" duration="12 Months" />
        <InvestmentCard title="Bond" rate="19.50% P/A" duration="18 Months" />
      </div>
    </div>
  );
};

export default Investment;
