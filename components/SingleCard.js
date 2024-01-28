import React, { useEffect, useState, useRef } from "react";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";
import { ethers } from "ethers";
import TransactionStatus from "./TransactionStatus";
import toast, { Toaster } from "react-hot-toast";

import{
  ClipboardIcon,
  ClipboardCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";

const SingleCard = ({ index, name, walletAddress }) => {
  const [balance, setbalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();

  const [copyIcon, setCopyIcon] = usestate({ icon: ClipboardIcon });

  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, {duration: 6000});
  const notifySuccess = () => toast.success("Transaction completed.");

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();    
      } else setbalance("-");
  }, [name, walletAddress]);

  async function fetchTokenBalance() {
    const bal = await getTokenBalance(name, walletAddress);

    const fbal = ethers.utils.formatUnits(bal.toString(), 18);
    setBalance(fbal.toString());
  }

  async function fetchTokenAddress() {
    const address = await getTokenAddress(name);
    setTokenAddress(address);
  }

  return (
    <article className="  flex flex-col bg-[#212429]">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Lorem ipsum dolor sit amet"
      >
        <img
          alt=""
          className="object-cover w-full h-62 bg-gray-500"
          src={'img/${index + 1}.png'}
        />
      </a>
    </article>
  )
};

export default SingleCard;
