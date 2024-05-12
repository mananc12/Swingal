import React from "react";
import { Product } from "./Product";
import CircularCard from "./CircularCard";
import Carousel from "./Carousel";
import NavBar from "./NavBar";
import App from "./tab-card/App";
import Run from "./running-words/App";
import Circle from "./circle/App";
import Scroll from "./Scroll/App";
import { initialTabs1 as tabs1 } from "./tab-card/ingredients";
import { initialTabs2 as tabs2 } from "./tab-card/ingredients";
import { initialTabs3 as tabs3 } from "./tab-card/ingredients";
import { CategoryProduct } from "./Category-Product/category_product";
// import Footer from "./Footer";
import { categoryData } from "./Category-Product/pulse_category_images";

export const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ml-auto mr-auto w-[85%]">
        {/* <div className="flex flex-col justify-center items-center ml-auto md:mb-24 mr-auto w-full">
          <div className="z-10 md:fixed w-11/12 md:top-0 bg-white">
            <NavBar />
          </div>
        </div> */}
        <div className="w-full">
          <CircularCard />
        </div>
        <div className="max-lg:hidden z-10">
          <Circle />
        </div>
        <div className="w-full mt-10 mb-10">
          <Carousel />
        </div>
        <div className="flex justify-center gap-4 items-center max-lg:flex-col">
          <App tabs={tabs1} />
          <App tabs={tabs2} />
          <App tabs={tabs3} />
        </div>
        <div>
          <Run />
        </div>
        <div>
          <Scroll />
        </div>
        <div className="w-full h-96 mt-5">
          <img
            src="/images/grocery.jpg"
            className="w-full h-full"
            alt="Grocery"
          />
        </div>
        <div className="mt-6 border-dotted border-t-8 h-1 w-40 border-gray-300"></div>
        <div className="container">
          <Product />
        </div>
        {Object.values(categoryData).map((category, index) => (
          <div className="container" key={index}>
            <CategoryProduct title={category.title} image={category.image} category={category} id={index}/>
          </div>
        ))}
      </div>
      {/* <div className="w-full mt-10">
        <Footer />
      </div> */}
    </div>
  );
};
