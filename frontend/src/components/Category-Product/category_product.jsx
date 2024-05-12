import React, {useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ListItem({ item }) {
  // Pass 'item' as a prop
  const [click, setClick] = useState(true);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setClick(false);
    setCount(1);
  };

  const handleDecrease = () => {
    count===1&&setClick(true);
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <li>
      <div className="img-div">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="rate-name mt-2 flex flex-col w-full">
        <span className="name ">{item.name}</span>
        <div className="">
          <span className="rate font-semibold text-xl mt-1">₹{item.price}</span>
          <span className="ml-2 opacity-60 line-through">₹{item.mrp}</span>
          <span className="ml-2 font-bold text-green-600">
            {parseInt(
              ((parseFloat(item.mrp) - parseFloat(item.price)) * 100) /
              parseFloat(item.mrp)
            )}
            %
          </span>
        </div>
        <div className="mt-3 flex justify-center items-center" onClick={(e)=>e.preventDefault()}>
          {click ? (
            <button
              className={`font-semibold hover:bg-blue-700 hover:text-white text-blue-700 shadow-slate-400 shadow-sm w-40 h-9 transition duration-300 ease-in-out`}
              onClick={handleClick}
            >
              Add Item
            </button>
          ) : (
            <div className="font-semibold text-blue-700 shadow-slate-400 shadow-sm w-40 h-9 flex justify-center items-center">
              <button className=" w-full" onClick={handleDecrease}>
                -
              </button>
              <span className="text-black w-full text-center">{count}</span>
              <button className=" w-full" onClick={() => setCount(count + 1)}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export const CategoryProduct = (props) => {
  return (
    <div className="mt-10 mb-4 ">
      <span className="text-xl md:text-3xl font-bold">
        Buy Top Quality {props.title}:
        <p>🛒.............</p>
      </span>
      <div
        //   className='flex'
        className="relative flex justify-center items-center"
      >
        <Link to={`/${props.title}`}>
          <button
            className="see-all z-[2] cursor-pointer absolute right-0 bg-blue-700 w-12 h-8 pt-3 text-xs flex justify-center items-start text-white font-bold"
            style={{
              transform: "rotate(270deg)",
              borderRadius: "100px 100px 0 0",
              marginRight: "-8px",
            }}
          >
            <span>See All</span>
          </button>
        </Link>
        <div className="cp w-full p-3 mt-4 overflow-x-scroll flex flex-row gap-5">
          {props.image.map((item, index) => (
            <div
              className="product-card-category p-2 cursor-pointer flex justify-center items-center flex-col h-fit"
              key={index}
            >
              <Link target="_blank" to={`/product/${props.title}/${index}`}>
                
              <ListItem key={item.image} item={item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
