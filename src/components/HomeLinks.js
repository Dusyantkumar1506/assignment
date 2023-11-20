import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const HomeLinks = () => {
  return (
    <Router>
      <div className="text-sm hidden md:flex items-center  gap-2 ">
        <Link className="underline" to="/">
          Welcome
        </Link>{" "}
        <IoIosArrowForward size={18} />
        <Link className="underline" to="/">
          Products
        </Link>{" "}
        <IoIosArrowForward size={18} />
        <Link className="underline" to="/">
          Tools
        </Link>{" "}
        <IoIosArrowForward size={18} />
        <Link className="underline" to="/">
          Power Tools
        </Link>{" "}
        <IoIosArrowForward size={18} />
        <Link className="underline" to="/">
          Electric Screwdriver and Drill
        </Link>{" "}
        <IoIosArrowForward size={18} />
        <Link className="underline" to="/">
          Screwdriver
        </Link>{" "}
        <IoIosArrowForward size={18} />
        <Link to="/">
          Makita Cordless Hammer Drill, 18v 3ah, 2 batteries dhp453rfx4
        </Link>
      </div>
    </Router>
  );
};

export default HomeLinks;
