
import React from 'react';
import '../../../styles/pages/Dashboard.scss';
import Header from '../../../components/Header';
import TabNavigation from '../../../components/TabNavigation';


const Lookup = () => {
  return (
    <div className="dashboard">
      <Header type="dashboard" />
      <p>Lookup</p>
      <TabNavigation />
    </div>
  );
};

export default Lookup;
