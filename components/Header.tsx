"use client";

import React from "react";
import "../styles/components/Header.scss";
import logo from "../assets/svgs/synexplorer.svg";
import arrow from "../assets/svgs/arrow-down.svg";
import walletSvg from "../assets/svgs/wallet-add.svg";
import Image from "next/image";
import Link from "next/link";
import { client } from "../src/app/client";
import { ConnectButton, darkTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { useRouter } from "next/navigation";
import { title } from "process";

interface HeaderProps {
  type: string;
}

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

const Header = ({ type }: HeaderProps) => {
  const router = useRouter();

  return (
    <>
      {type === "hero" && (
        <div className="header">
          <Link href="/">
            <Image src={logo} className="header__logo" alt="logo" />
          </Link>
          <div className="header__mid">
            <p className="header__mid__text">Developers</p>
            <Link href="/dashboard">
              <p className="header__mid__text">Dashboard</p>
            </Link>
            <p className="header__mid__text">Compare</p>
            <p className="header__mid__text">Lookup</p>
            <p className="header__mid__text">Protocol</p>
          </div>
          {/* <Link href="/dashboard"> */}
          {/* <button className="header__button">Launch app</button> */}
          <ConnectButton
            client={client}
            wallets={wallets}
            onConnect={() => router.push("/dashboard")}
            theme={darkTheme({
              colors: {
                modalBg: "#172826",
                accentText: "#ffffff",
                primaryText: "#ffffff",
                primaryButtonBg: "#0effdf",
                primaryButtonText: "#00071A",
                borderColor: "#00332c",
                separatorLine: "#00332c",
                connectedButtonBg: "#DBFFFB1A",
                connectedButtonBgHover: "#DBFFFB1A",
                tertiaryBg: "#00332c",
                secondaryIconHoverBg: "#00332c",
              },
              fontFamily: "var(--font-mada)",
            })}
            connectButton={{ label: "Launch app" }}
            connectModal={{ size: "compact", title: "Connect wallet" }}
          />
        </div>
      )}

      {type === "dashboard" && (
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
          {/* <button className="header__rightButton">
            <Image
              src={walletSvg}
              className="header__rightButton__icon"
              alt="wallet icon "
            />
            <p className="header__rightButton__text">0x765a...34cD</p>
          </button> */}

          <ConnectButton
            client={client}
            wallets={wallets}
            theme={darkTheme({
              colors: {
                modalBg: "#172826",
                accentText: "#ffffff",
                primaryText: "#ffffff",
                primaryButtonBg: "#0effdf",
                primaryButtonText: "#00071A",
                borderColor: "#00332c",
                separatorLine: "#00332c",
                connectedButtonBg: "#172826",
                connectedButtonBgHover: "#172826",
                tertiaryBg: "#00332c",
                secondaryIconHoverBg: "#00332c",
              },
              fontFamily: "var(--font-mada)",
            })}
            connectButton={{ label: "Launch app" }}
            connectModal={{ size: "compact" }}
          />
        </div>
      )}
    </>
  );
};

export default Header;
