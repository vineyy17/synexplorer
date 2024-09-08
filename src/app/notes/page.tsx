
import React from 'react';
import '../../../styles/pages/Dashboard.scss';
import Header from '../../../components/Header';
import TabNavigation from '../../../components/TabNavigation';


const Notes = () => {
  return (
    <div className="dashboard">
      <Header type="dashboard" />
      <p>Notes</p>
      <TabNavigation />
    </div>
  );
};

export default Notes;
