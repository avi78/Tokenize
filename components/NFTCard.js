// components/NFTCard.js

import React from "react";

const NFTCard = ({ nft }) => (
  <div className="bg-[#212429] p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover mb-4 rounded-md shadow-md" />
    <div className="flex flex-col">
      <h3 className="text-xl font-bold mb-2">{nft.name}</h3>
      <p className="text-white-600 mb-4">{nft.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-blue-500 mr-2">Owner: {nft.owner}</p>
        </div>
        <div className="flex items-center">
          <p className="text-green-500 mr-4">Price: {nft.price} ETH</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
);

export default NFTCard;
