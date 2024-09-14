import React from "react";
import "../styles/components/Hero.scss";
import active from "../assets/svgs/active.svg";
import Image from "next/image";
import heroImage from "../assets/images/hero.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__box">
        <div className="hero__box__top">
          No 1 Data Platform on Synfutures Protocol
        </div>
        <p className="hero__box__heading">
          Powering your DeFi Journey with Data
        </p>
        <p className="hero__box__para">
          Customisable data dashboard for discovering gems and finding direction
          in the perpetual futures protocol on base.
        </p>
      </div>

      <div className="hero__bottom__active">
        <Image
          src={active}
          className="hero__bottom__active__icon"
          alt="active icon"
        />
        <p className="hero__bottom__active__text">All systems are functional</p>
      </div>

      <div className="hero__image" />
    </div>
  );
};

export default Hero;
