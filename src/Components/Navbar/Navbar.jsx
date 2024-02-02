import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
 const item = useSelector((state) => state.cards);

  return (
    <div className="w-full">
      <div className="max-w-[1320px] mx-auto flex justify-around p-[20px] bg-[#eee]">
        <span className="text-slate-500">RE<span className="text-[orange]">DU</span>X</span>
        <div>
          <NavLink to='/' className={({isAction}) =>`${ isAction ? "text-orange-700" : "text-gray-700"} mx-[20px]`} >Home</NavLink>
          <Link className="mx-[20px]" to="/cards">Cards</Link>
          <span>Card Items : {item.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
