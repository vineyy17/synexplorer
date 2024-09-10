"use client";

import React, { useState } from "react";
import "../../../styles/pages/Portfolio.scss";
import Header from "../../../components/Header";
import TabNavigation from "../../../components/TabNavigation";
import PortfolioCard from "../../../components/PortfolioCard";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [activeLiquidityTab, setActiveLiquidityTab] =
    useState("liquidity-pool");

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

        <div className="portfolio__cont__lgWrapper">
          <div className="portfolio__cont__lgWrapper__left">
            <p className="portfolio__cont__lgWrapper__left__heading">
              Overview
            </p>
            <div className="portfolio__cont__lgWrapper__left__wrapper">
              <div className="portfolio__cont__lgWrapper__left__wrapper__left">
                <p className="portfolio__cont__lgWrapper__left__wrapper__left__heading">
                  $108k
                </p>
                <p className="portfolio__cont__lgWrapper__left__wrapper__left__sub">
                  Total Value
                </p>
              </div>
              <div className="portfolio__cont__lgWrapper__left__wrapper__left">
                <p className="portfolio__cont__lgWrapper__left__wrapper__left__heading">
                  $2.48m
                </p>
                <p className="portfolio__cont__lgWrapper__left__wrapper__left__sub">
                  Total Volume
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio__cont__lgWrapper__right">
            <div className="portfolio__cont__lgWrapper__right__top">
              <p className="portfolio__cont__lgWrapper__right__top__heading">
                Account
              </p>
              <div className="portfolio__cont__lgWrapper__right__top__readOnly">
                Read only
              </div>
            </div>
          </div>
        </div>

        <div
          className={`portfolio__cont__tab ${
            activeLiquidityTab === "liquidity-pool"
              ? "liquidity-pool-active"
              : "futures-active"
          }`}
        >
          <div className="portfolio__cont__tab__slider"></div>
          <div
            className={`portfolio__cont__tab__personal ${
              activeLiquidityTab === "liquidity-pool" ? "active" : ""
            }`}
            onClick={() => setActiveLiquidityTab("liquidity-pool")}
          >
            Liquidity pool
          </div>
          <div
            className={`portfolio__cont__tab__futures ${
              activeLiquidityTab === "futures" ? "active" : ""
            }`}
            onClick={() => setActiveLiquidityTab("futures")}
          >
            Futures
          </div>
        </div>

        {activeLiquidityTab === "liquidity-pool" ? (
          <div className="portfolio__cont__smWrapper">
            <PortfolioCard
              heading="Liquidity"
              figure="$5.8k"
              bottomText="Provided"
            />
            <PortfolioCard
              heading="Exits"
              figure="$4.8k"
              bottomText="Rewards"
              type="profit"
            />
          </div>
        ) : (
          <div className="portfolio__cont__smWrapper">
            <PortfolioCard
              heading="Positions Value"
              figure="$5.8k"
              bottomText="PnL"
              type="profit"
            />
            <PortfolioCard heading="Positions" figure="4" bottomText="Trades" />
            <PortfolioCard
              heading="Orders"
              figure="6"
              bottomText="Opened orders"
            />
          </div>
        )}
      </div>
      <TabNavigation />
    </div>
  );
};

export default Portfolio;
