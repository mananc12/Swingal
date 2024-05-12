import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { categoryData } from "./pulse_category_images";
import { categoryData } from "./pulse_category_images";
import StarIcon from "@mui/icons-material/Star";
// import NavBar from "../NavBar";

const ProductDetails = () => {
  const [click, setClick] = useState(true);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setClick(false);
    setCount(1);
  };

  const handleDecrease = () => {
    count === 1 && setClick(true);
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const { category, id } = useParams();
  // const product = Object.values(categoryData).find(
  //   (item) => item.title === category
  // );
  // const productData = product.image[id];
  // //console.log(product.image[id])

  const product = categoryData.find((item) => item.title === category);
  const productData = product.image[id];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex justify-center items-center h-full bg-slate-200">
      <div className="flex justify-start gap-10 w-[80%] h-full bg-white p-5 items-center">
        {/* <NavBar/> */}

        <div className="flex ml-10 flex-col justify-center items-center">
          <div className="p-5 border-solid border-[1px] border-slate-200">
            <img
              className="w-80 h-96 "
              src={productData.image}
              alt={product.name}
            />
          </div>

          <div className=" flex justify-center h-20 items-center">
            {click ? (
              // <button className={`font-semibold text-blue-700 shadow-slate-400  w-40 h-9`} onClick={handleClick}>
              //   Add Item
              // </button>
              <button
                className=" bg-orange-400 w-56 text-white font-bold p-4 shadow-sm rounded-md"
                onClick={handleClick}
              >
                Add to Basket
              </button>
            ) : (
              <div className="text-orange-600 border-orange-600 border-solid border-[1px] w-56 bg-white font-bold p-4 rounded-md shadow-sm flex justify-center items-center">
                <button className="text-2xl w-full" onClick={handleDecrease}>
                  -
                </button>
                <span className="text-orange-600 text-xl w-full text-center">
                  {count}
                </span>
                <button
                  className="text-2xl w-full"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-[60%]">
          <h1 className="font-bold text-4xl mb-3">{productData.name}</h1>
          <p className="mb-5">
            <span className="bg-green-700 text-white font-semibold p-[2px] pl-[6px] pr-[6px] rounded-[5px] text-xs">
              {parseFloat((4.1808).toFixed(1))}
              <span className=""> ★</span>
            </span>{" "}
            <span className="font-semibold text-slate-500">
              808 Ratings & 129 Reviews
            </span>
          </p>
          <div className="h-11 mt-3 flex justify-start items-center">
            <span className="rate font-semibold text-4xl mt-1">
              ₹{productData.price}
            </span>
            <span className="ml-2 text-xl opacity-60 line-through">
              ₹{productData.mrp}
            </span>
            <span className="ml-2 font-bold text-green-600">
              {parseInt(
                ((parseFloat(productData.mrp) - parseFloat(productData.price)) *
                  100) /
                  parseFloat(productData.mrp)
              )}
              % off
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
