import React from 'react';
import '../styles/components/Header.scss';
import logo from '../assets/svgs/synexplorer.svg';
import arrow from '../assets/svgs/arrow-down.svg';
import walletSvg from '../assets/svgs/wallet-add.svg';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  type: string;
}

const Header = ({ type }: HeaderProps) => {
  return (
    <>
      {type === 'hero' && (
        <div className="header">
          <Link href="/">
            <Image src={logo} className="header__logo" alt="logo" />
          </Link>
          <div className="header__mid">
            <p className="header__mid__text">Developers</p>
            <p className="header__mid__text">Dashboard</p>
            <p className="header__mid__text">Compare</p>
            <p className="header__mid__text">Lookup</p>
            <p className="header__mid__text">Protocol</p>
          </div>
          <Link href="/dashboard">
            <button className="header__button">Launch app</button>
          </Link>
        </div>
      )}

      {type === 'dashboard' && (
        <div className="header header--dashboard">
          <div className="header__left">
            <button className="header__left__featureButton">
              <p className="header__left__featureButton__text">Synfutures Q2</p>
              <Image
                src={arrow}
                className="header__left__featureButton__arrowIcon"
                alt="arrow down"
              />
            </button>
            <button className="header__left__button">Share</button>
          </div>
          <Link href="/">
            <Image src={logo} className="header__logo" alt="logo" />
          </Link>
          <button className="header__rightButton">
            <Image
              src={walletSvg}
              className="header__rightButton__icon"
              alt="wallet icon "
            />
            <p className="header__rightButton__text">0x765a...34cD</p>
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
