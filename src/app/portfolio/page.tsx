"use client";

import React, { useState } from "react";
import "../../../styles/pages/Portfolio.scss";
import Header from "../../../components/Header";
import TabNavigation from "../../../components/TabNavigation";
import PortfolioCard from "../../../components/PortfolioCard";
import refresh from "../../../assets/svgs/refresh.svg";
import arrow from "../../../assets/svgs/arrow-down.svg";
import drop from "../../../assets/svgs/arrow-down-white.svg";
import Image from "next/image";
import LeaderboardTable from "../../../components/LeaderboardTable";

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

        {/* Content based on activeTab */}
        {activeTab === "personal" ? (
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
        ) : (
          <div className="portfolio__cont__tableWrapper">
            <div className="portfolio__cont__tableWrapper__top">
              <p className="portfolio__cont__tableWrapper__top__heading">
                Leaderboard
              </p>
              <div className="portfolio__cont__tableWrapper__top__right">
                <div className="portfolio__cont__tableWrapper__top__right__refresh">
                  <p className="portfolio__cont__tableWrapper__top__right__refresh__text">
                    Refresh
                  </p>

                  <svg
                    className="portfolio__cont__tableWrapper__top__right__refresh__icon"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 3.11 16.94 3.11 16.94M3.11 16.94H7.63M3.11 16.94V21.94M2 12.5C2 6.98 6.44 2.5 12 2.5C18.67 2.5 22 8.06 22 8.06M22 8.06V3.06M22 8.06H17.56"
                      stroke="#0effdf"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="portfolio__cont__tableWrapper__top__right__timeframe">
                  <p className="portfolio__cont__tableWrapper__top__right__timeframe__text">
                    Daily
                  </p>
                  <Image
                    className="portfolio__cont__tableWrapper__top__right__timeframe__arrow"
                    src={drop}
                    alt="arrow icon"
                  />
                </div>
              </div>
            </div>
            <div className="portfolio__cont__tableWrapper__table">
              <LeaderboardTable />
            </div>
          </div>
        )}

        {/* Liquidity Tab Content */}
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

        {/* Content based on activeLiquidityTab */}
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
