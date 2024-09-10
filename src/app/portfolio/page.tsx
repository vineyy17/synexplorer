"use client";

import React, { useState } from "react";
import "../../../styles/pages/Portfolio.scss";
import Header from "../../../components/Header";
import TabNavigation from "../../../components/TabNavigation";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="portfolio">
      <Header type="dashboard" />
      <div className="portfolio__top">
        <p className="portfolio__top__text">Portfolio</p>
      </div>
      <div className="portfolio__cont">
        <p className="portfolio__cont__heading">Portfolio Summary</p>

        <div
          className={`portfolio__cont__tab ${
            activeTab === "personal"
              ? "personal-active"
              : "protocol-wide-active"
          }`}
        >
          <div className="portfolio__cont__tab__slider"></div>
          <div
            className={`portfolio__cont__tab__personal ${
              activeTab === "personal" ? "active" : ""
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal
          </div>
          <div
            className={`portfolio__cont__tab__protocol-wide ${
              activeTab === "protocol-wide" ? "active" : ""
            }`}
            onClick={() => setActiveTab("protocol-wide")}
          >
            Protocol wide
          </div>
        </div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default Portfolio;
