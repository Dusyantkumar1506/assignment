import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <Router>
      <header className=" h-[108px] w-full text-black shadow-sm border-b-[1px]  border-gray-300 px-4">
        <div className=" flex justify-between">
          <div className="flex items-center justify-center">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-[84px] w-[125px] mr-2" />
            </Link>
          </div>

          <div className=" hidden items-end gap-5 md:flex ">
            <GiHamburgerMenu size={24} className="text-lime-500" />

            <Link
              to="/products"
              className="text-[#554f52] text-base font-medium hover:text-lime-500 hover:border-b-2  hover:border-lime-500 cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="/services"
              className="text-[#554f52] text-base font-medium hover:text-lime-500 hover:border-b-2 hover:border-lime-500 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="/inspiration"
              className="text-[#554f52] text-base font-medium hover:text-lime-500 hover:border-b-2 hover:border-lime-500 cursor-pointer"
            >
              Inspiration
            </Link>
            <Link
              to="/deals"
              className="text-[#554f52] text-base font-medium hover:text-lime-500 hover:border-b-2 hover:border-lime-500 cursor-pointer"
            >
              Good Deals
            </Link>
          </div>

          <div className="flex flex-col items-end gap-4 ">
            <div className="bg-lime-500  w-[50px] h-full flex flex-col items-center p-2 text-white">
              <RiShoppingCartLine size={24} />
              <Link to="/" className="text-base">
                Cart
              </Link>
            </div>

            <div className=" hidden md:flex gap-6">
              <Link
                to="/cart"
                className="text-[#554f52] text-base font-medium hover:text-lime-500 hover:border-b-2 hover:border-lime-500 cursor-pointer"
              >
                Community
              </Link>

              <Link
                to="/community"
                className="text-[#554f52] text-base font-medium hover:text-lime-500 hover:border-b-2 hover:border-lime-500 cursor-pointer"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Router>
  );
};

export default Navbar;
