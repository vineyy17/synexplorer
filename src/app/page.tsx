import React from 'react';
import '../../styles/components/AppLayout.scss';
import Hero from '../../components/Hero';
import Header from '../../components/Header';

const AppLayout = () => {
  return (
    <>
      <div className="appLayout__cont">
        <Header type="hero" />
        <Hero />
        <div className="appLayout__cont__gradient" />
      </div>
    </>
  );
};

export default AppLayout;