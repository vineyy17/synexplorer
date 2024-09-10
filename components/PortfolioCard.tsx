import React from "react";
import "../styles/pages/Portfolio.scss";

interface props {
  heading: string;
  figure: string;
  bottomText: string;
  type?: string;
}

const PortfolioCard = ({ heading, figure, bottomText, type }: props) => {
  return (
    <div className="portfolio__cont__smWrapper__left">
      <p className="portfolio__cont__smWrapper__left__heading">{heading}</p>

      <div className="portfolio__cont__smWrapper__left__wrapper__left">
        <p
          style={{
            color: type === "profit" ? "#15b84c" : "",
          }}
          className={`portfolio__cont__smWrapper__left__wrapper__left__heading`}
        >
          {figure}
        </p>
        <p className="portfolio__cont__smWrapper__left__wrapper__left__sub">
          {bottomText}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
