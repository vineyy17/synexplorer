
import React from 'react';
import '../../../styles/pages/Dashboard.scss';
import Image from 'next/image';
import grid from '../../../assets/svgs/grid.svg';
import refresh from '../../../assets/svgs/refresh.svg';
import Header from '../../../components/Header';
import TabNavigation from '../../../components/TabNavigation';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header type="dashboard" />
      <div className="dashboard__top">
        <p className="dashboard__top__text">Dashboard</p>
        <div className="dashboard__top__right">
          <Image
            className="dashboard__top__right__grid"
            src={grid}
            alt="grid icon"
          />
          <Image
            className="dashboard__top__right__refresh"
            src={refresh}
            alt="refresh icon"
          />
        </div>
      </div>
      <div className="dashboard__marketData">
        <p className="dashboard__marketData__heading">Market Data</p>
        <p className="dashboard__marketData__sub">
          Market data summary from across the protocol
        </p>
        <div className="dashboard__marketData__cont">
          <div className="dashboard__marketData__cont__left">
            <p>Futures Order book</p>
          </div>
          <div className="dashboard__marketData__cont__right">
            <div className="dashboard__marketData__cont__right__top">
              <p>Top Gainers and Lossers</p>
            </div>
            <div className="dashboard__marketData__cont__right__bottom">
              <p>Cumulative Short Long Positions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__liquidityPool">
        <p className="dashboard__liquidityPool__heading">Liquidity Pool</p>
        <p className="dashboard__liquidityPool__sub">
          Learn more about the total value locked in each pool and chains
        </p>
        <div className="dashboard__liquidityPool__cont">
          <div className="dashboard__liquidityPool__cont__left">
            <div className="dashboard__liquidityPool__cont__left__top">
              <p className="dashboard__liquidityPool__cont__left__heading">
                Synfutures TVL
              </p>
              <p className="dashboard__liquidityPool__cont__left__sub">$1.3B</p>
            </div>
          </div>
          <div className="dashboard__liquidityPool__cont__right">
            <div className="dashboard__liquidityPool__cont__right__top">
              <p className="dashboard__liquidityPool__cont__right__heading">
                Synfutures Volume
              </p>
              <p className="dashboard__liquidityPool__cont__right__sub">
                $34.3B
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard__liquidityPool__distribution">
          <div className="dashboard__liquidityPool__distribution__top">
            <p className="dashboard__liquidityPool__distribution__top__date">
              August 2024
            </p>
            <div className="dashboard__liquidityPool__distribution__top__wrapper">
              <p className="dashboard__liquidityPool__distribution__top__heading">
                Rewards Distribution
              </p>
              <p className="dashboard__liquidityPool__distribution__top__sub">
                $34.3B
              </p>
            </div>
          </div>
        </div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default Dashboard;
