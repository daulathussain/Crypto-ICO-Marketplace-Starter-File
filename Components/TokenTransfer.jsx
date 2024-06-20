import React, { useState, useEffect } from "react";

import Input from "./Input";
import Button from "./Button";

const TokenTransfer = ({
  address,
  connectWallet,
  transferTokens,
  setOpenTransferToken,
}) => {
  const [transferTokenData, setTransferTokenData] = useState({
    address: "",
    tokenAdd: "",
    amount: "",
  });
  return (
    <div class="modal">
      <div class="modal-content">
        <span onClick={() => setOpenTransferToken(false)} class="close">
          &times;
        </span>
        <h2 style={{ marginTop: "2rem" }}>Token Transfer</h2>
        <div className="input-Container">
          <Input
            placeholder={"_to address"}
            handleChange={(e) =>
              setTransferTokenData({
                ...transferTokenData,
                address: e.target.value,
              })
            }
          />
          <Input
            placeholder={"tokenAddress"}
            handleChange={(e) =>
              setTransferTokenData({
                ...transferTokenData,
                tokenAdd: e.target.value,
              })
            }
          />
          <Input
            placeholder={"amount"}
            handleChange={(e) =>
              setTransferTokenData({
                ...transferTokenData,
                amount: e.target.value,
              })
            }
          />
        </div>
        <div className="button-box" style={{ marginTop: "1rem" }}>
          {address ? (
            <Button
              name={"Token Transfer"}
              handleClick={() => transferTokens(transferTokenData)}
            />
          ) : (
            <Button
              name={"Connect Wallet"}
              handleClick={() => connectWallet()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenTransfer;
