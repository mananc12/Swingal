import React from "react";
import Example from "./menu/Example";
import { Link } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Drop from "./dropdown/App";
import { useAuth } from "../store/auth";

const NavBar = () => {
  const { isLoggedIn, userFirstName, userProfileData } = useAuth();

  return (
    <div className="flex justify-between items-center w-full h-16 mt-3">
      <div className="menu min-[770px]:hidden">
        <Example />
      </div>
      <div className="font-bold text-2xl md:text-3xl lg:text-4xl flex justify-start items-center w-40 h-10 mb-2">
        Swingal
      </div>
      <div className="rounded-xl p-1 w-96 h-10 border-2 border-gray-400">
        <input
          type="search"
          placeholder="Search"
          className="outline-none w-full"
        />
      </div>
      <div className="nav-bar flex font-bold flex-row justify-around md:w-100 gap-2 max-[1175px]:gap-5 min-[1175px]:gap-12 max-md:hidden lg:mr-10 items-center max-[1266px]:text-sm">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/all-products">
          <div className="w-fit">Products</div>
        </Link>
        <div className="relative h-8 flex justify-center ">
          <Drop />
        </div>

        {isLoggedIn ? (
          <>
            <Link to={`/profile/${userProfileData}`}>
              <div className="text-[#8A2BE2]">{userFirstName}</div>
            </Link>
            <Link to="/logout">
              <div>Logout</div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/registration">
              <div>Register</div>
            </Link>

            <Link to="/login">
              <div>Login</div>
            </Link>
          </>
        )}
        <Link to="/add-to-cart">
          <div>
            <ShoppingCartRoundedIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
