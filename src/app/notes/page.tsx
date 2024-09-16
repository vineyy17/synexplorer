import React from "react";
import "../../../styles/pages/Notes.scss";
import Header from "../../../components/Header";
import TabNavigation from "../../../components/TabNavigation";
import pencil from "../../../assets/svgs/edit-2.svg";
import Image from "next/image";

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
        <div className="notes__wrapper__left">
          <button className="notes__wrapper__left__button">
            Make a new note
          </button>
          <div className="notes__wrapper__left__stack">
            <div className="notes__wrapper__left__stack__note">
              <div className="notes__wrapper__left__stack__note__top">
                <p className="notes__wrapper__left__stack__note__top__text">
                  BTC/USDC Ideas
                </p>
                <Image
                  src={pencil}
                  alt="edit icon"
                  className="notes__wrapper__left__stack__note__top__icon"
                />
              </div>
              <p className="notes__wrapper__left__stack__note__details">
                Make a new note
              </p>
            </div>

            <div className="notes__wrapper__left__stack__note">
              <div className="notes__wrapper__left__stack__note__top">
                <p className="notes__wrapper__left__stack__note__top__text">
                  wstETH/ETH
                </p>
                <Image
                  src={pencil}
                  alt="edit icon"
                  className="notes__wrapper__left__stack__note__top__icon"
                />
              </div>
              <p className="notes__wrapper__left__stack__note__details">
                What this basically entails is...
              </p>
            </div>
          </div>
        </div>
        <div className="notes__wrapper__right" />
      </div>
      <TabNavigation />
    </div>
  );
};

export default Notes;
