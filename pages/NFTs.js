import React, { useEffect, useState } from "react";
import { Footer, Header } from "../components/index";
import NFTCard from "../components/NFTCard"; // Import the NFTCard component

const NFTs = () => {
  const [nfts, setNFTs] = useState([]);

  // Mock data for NFTs
  const mockNFTs = [
    {
      id: 1,
      image: "https://cdn.dribbble.com/userupload/2900197/file/original-81fba7956878a5a1e2d27594bb4e6ec0.png?resize=1024x768", // Replace with actual image URLs
      name: "Cool NFT",
      description: "This is an awesome NFT.",
      owner: "John Doe",
      price: 4.5,
    },
    {
      id: 2,
      image: "https://cdn.dribbble.com/userupload/3582428/file/original-213d531598cf033a77f690c0770b0406.png?resize=1024x768",
      name: "Amazing NFT",
      description: "Another fantastic NFT.",
      owner: "Jane Doe",
      price: 7.0,
    },
    {
      id: 3,
      image: "https://cdn.dribbble.com/userupload/3530659/file/original-d5b7124bf1f0de0da989262f39247f31.png?resize=1024x768", // Replace with actual image URLs
      name: "Cool NFT",
      description: "This is an awesome NFT.",
      owner: "John Doe",
      price: 2.5,
    },
    {
      id: 4,
      image: "https://cdn.dribbble.com/userupload/3617691/file/original-8c9ba587df436f3e57f426bc5d9f7574.png?resize=1024x768",
      name: "Amazing NFT",
      description: "Another fantastic NFT.",
      owner: "Jane Doe",
      price: 2.0,
    },
    {
      id: 5,
      image: "https://cdn.dribbble.com/userupload/3998417/file/original-8b3cf6a68b2ec86e788e2b2444c30616.png?resize=1024x768", // Replace with actual image URLs
      name: "Cool NFT",
      description: "This is an awesome NFT.",
      owner: "John Doe",
      price: 6.5,
    },
    {
      id: 6,
      image: "https://cdn.dribbble.com/userupload/4152348/file/original-09b13f040a5dc1f8e3c27f5642c6bac2.png?resize=1024x768",
      name: "Amazing NFT",
      description: "Another fantastic NFT.",
      owner: "Jane Doe",
      price: 8.0,
    },
    
  ];

  const loadNFTs = () => {
    setNFTs(mockNFTs.reverse());
  };

  useEffect(() => {
    loadNFTs();
  }, []);

  return (
    <div className="bg-[#1A1A1A]">
      <Header />
      <div className="p-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nfts.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NFTs;
