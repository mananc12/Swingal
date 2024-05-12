import "./styles.css";
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { list } from "./list-scroll";

function ListItem({ item }) { // Pass 'item' as a prop
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
        <img className="w-full h-full" src={item.image} alt={item.name} />
      </div>
      <div className="rate-name flex flex-col w-full">
        <span className="name ">{item.name}</span>
        <div className="">
          <span className="rate text-xl mt-1">₹{item.price}</span>
          <span className="ml-2 opacity-60 line-through">₹{item.mrp}</span>
          <span className="ml-2 font-bold text-green-600">
            {(((parseFloat(item.mrp) - parseFloat(item.price)) * 100) / parseFloat(item.mrp)).toFixed(2)}%
          </span>
        </div>
        <div className="mt-5 flex justify-center items-center">
          {click ? (
            <button className={`font-semibold text-blue-700 shadow-slate-400 shadow-sm w-40 h-9`} onClick={handleClick}>
              Add Item
            </button>
          ) : (
            <div className="font-semibold text-blue-700 shadow-slate-400 shadow-sm w-40 h-9 flex justify-center items-center">
              <button className=" w-full" onClick={handleDecrease}>-</button>
              <span className="text-black w-full text-center">{count}</span>
              <button className=" w-full" onClick={() => setCount(count + 1)}>+</button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Scroll() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="flex flex-col mt-5">
      <span className="font-semibold text-xl md:text-3xl">Unlock Exclusive Access🔑</span>
      <span className="opacity-80 text-lg">To Exciting Grocery Deals 😍</span>
      <div className="scroll flex max-sm:flex-col">
        <svg id="progress" width="150" height="150" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <ul ref={ref}>
          {list.map((item) => (
            <ListItem key={item.image} item={item} /> // Pass 'item' as a prop
          ))}
        </ul>
      </div>
    </div>
  );
}
