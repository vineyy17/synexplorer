"use client";

import React, { useState } from "react";
import "../../../styles/pages/Lookup.scss";
import Header from "../../../components/Header";
import TabNavigation from "../../../components/TabNavigation";
import LookupDropdown from "../../../components/LookupDropdown";

const Lookup = () => {
  const [activeTab, setActiveTab] = useState("liquidity-pool");

  return (
    <div className="lookup">
      <Header type="dashboard" />
      <div className="lookup__inner">
        <div className="lookup__inner__wrapper">
          <div className="lookup__inner__wrapper__left">
            <div
              className={`lookup__inner__wrapper__left__tab ${
                activeTab === "liquidity-pool"
                  ? "liquidity-pool-active"
                  : "futures-active"
              }`}
            >
              <div className="lookup__inner__wrapper__left__tab__slider"></div>
              <div
                className={`lookup__inner__wrapper__left__tab__liquidity-pool ${
                  activeTab === "liquidity-pool" ? "active" : ""
                }`}
                onClick={() => setActiveTab("liquidity-pool")}
              >
                Liquidity Pool
              </div>
              <div
                className={`lookup__inner__wrapper__left__tab__futures ${
                  activeTab === "futures" ? "active" : ""
                }`}
                onClick={() => setActiveTab("futures")}
              >
                Futures
              </div>
            </div>
            <p className="lookup__inner__wrapper__left__heading">
              Look deeper, Trade better.
            </p>
          </div>
          <div className="lookup__inner__wrapper__right">
            <p className="lookup__inner__wrapper__right__heading">
              Lookup pair
            </p>
            <p className="lookup__inner__wrapper__right__sub">
              Backdated search for Liquidity Pool and Futures Pairs
            </p>
            <div className="lookup__inner__wrapper__right__flex">
              <div className="lookup__inner__wrapper__right__flex__wrapper">
                <LookupDropdown text="Select pair" />
                <LookupDropdown text="Timeframe" />
                <LookupDropdown text="Full chart" />
              </div>
              <button className="lookup__inner__wrapper__right__flex__button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default Lookup;
