import React from "react";
import "../../../styles/pages/Notes.scss";
import Header from "../../../components/Header";
import TabNavigation from "../../../components/TabNavigation";

const Notes = () => {
  return (
    <div className="notes">
      <Header type="dashboard" />
      <div className="notes__top">
        <p className="notes__top__notes">Notes</p>
        <p className="notes__top__heading">
          Never miss a trade idea, note or info
        </p>
      </div>
      <div className="notes__wrapper">
        <div className="notes__wrapper__left" />
        <div className="notes__wrapper__right" />
      </div>
      <TabNavigation />
    </div>
  );
};

export default Notes;
