import React from "react";
import "../styles/components/LeaderboardTable.scss";

const positions = [
  {
    wallet: "0x765a...34cD",
    accountValue: "$25,400",
    accountVolume: "$450,000",
    positions: "40",
    orders: "5",
    PnL: "+30%",
    liquidity: "$4,400",
  },
  {
    wallet: "0x56v...345br",
    accountValue: "$25,400",
    accountVolume: "$450,000",
    positions: "34",
    orders: "9",
    PnL: "+23.5%",
    liquidity: "$4,400",
  },
];

const LeaderboardTable = () => {
  return (
    <div className="lTable">
      <thead className="lTable__thead">
        <tr className="lTable__thead__tr">
          <th className="lTable__thead__tr__sn">
            <p>S/N</p>
          </th>
          <th className="lTable__thead__tr__wallet">
            <p>Wallet address</p>
          </th>
          <th className="lTable__thead__tr__accountValue">
            <p>Account value</p>
          </th>
          <th className="lTable__thead__tr__accountVolume">
            <p>Account volume</p>
          </th>
          <th className="lTable__thead__tr__positions">
            <p>Positions</p>
          </th>
          <th className="lTable__thead__tr__orders">
            <p>Orders</p>
          </th>
          <th className="lTable__thead__tr__pnl">
            <p>PnL</p>
          </th>
          <th className="lTable__thead__tr__liquidity">
            <p>Liquidity</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {positions.map((position, index) => (
          <tr key={index}>
            <td className="index">{index + 1}</td>
            <td className="walletAddress">{position.wallet}</td>
            <td className="accountValueText">{position.accountValue}</td>
            <td className="accountVolumeText">{position.accountVolume}</td>
            <td className="positionsText">{position.positions}</td>
            <td className="positionOrders">{position.orders}</td>
            <td className="pnlText">{position.PnL}</td>
            <td className="liquidityText">{position.liquidity}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default LeaderboardTable;
