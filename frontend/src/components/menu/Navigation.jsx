import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Drop from "../dropdown/App";
const variants = {
  open: {
     display:'block',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    display:'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul className="nav-ul m-0 p-[25px] absolute top-[40px] w-[230px]" variants={variants}>
    <MenuItem i={0} icon={<HomeOutlinedIcon/>} text="Home" />
<MenuItem i={1} icon={<LoginOutlinedIcon/>} text="Register" />
<MenuItem i={2} icon={<HowToRegOutlinedIcon/>} text="Login" />
<MenuItem i={3} icon={<ShoppingCartOutlinedIcon/>} text="Cart" />
<MenuItem i={4} icon={<SupportAgentOutlinedIcon/>} text={<Drop/>} />
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
