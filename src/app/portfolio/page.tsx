
import React from 'react';
import '../../../styles/pages/Dashboard.scss';
import Header from '../../../components/Header';
import TabNavigation from '../../../components/TabNavigation';


const Portfolio = () => {
  return (
    <div className="dashboard">
      <Header type="dashboard" />
      <p>Portfolio</p>
      <TabNavigation />
    </div>
  );
};

export default Portfolio;
