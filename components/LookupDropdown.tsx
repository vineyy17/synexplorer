import React from "react";
import dropdown from "../assets/svgs/arrow-down-grey.svg";
import Image from "next/image";
import "../styles/components/LookupDropdown.scss";

interface props {
  text: string;
}

const LookupDropdown = ({ text }: props) => {
  return (
    <button className="lookupDropdown">
      <p className="lookupDropdown__text">{text}</p>
      <Image
        className="lookupDropdown__arrow"
        src={dropdown}
        alt="dropdown arrow"
      />
    </button>
  );
};

export default LookupDropdown;
