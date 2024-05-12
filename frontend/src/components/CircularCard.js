import React, { useEffect, useState } from "react";

const CircularCard = () => {

  const card = [
    { image: "/images/staples.webp", name: "Staples" },
    { image: "/images/snacks.webp", name: "Snacks & Beverages" },
    { image: "/images/packedFood.webp", name: "Packaged Food" },
    { image: "/images/household.webp", name: "Personal & Baby Care" },
    { image: "/images/dairy.webp", name: "Household Care" },
    { image: "/images/baby.webp", name: "Dairy & Eggs" },
    { image: "/images/home.webp", name: "Home & Kitchen" },
  ];

  return (
    <div className="circular-card-container flex flex-row w-full overflow-x-auto">
      <div className="circular-card-wrapper flex justify-evenly items-center md:w-full lg:w-full h-36">
        {card.map((obj,index) => (
          <div key={index} className="flex flex-col h-fit w-fit justify-center items-center">
          <div className="circular-card cursor-pointer rounded-full w-20 h-20 border-2 p-3 border-black-800">
            <img className="w-full h-full" src={obj.image} alt="image" />
          </div>
          <div className="text-center mt-1 font-semibold">
            <span>{obj.name}</span>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularCard;
