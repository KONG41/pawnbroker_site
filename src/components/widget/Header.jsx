import React,{useState, useEffect} from "react";
import Logo from "../../assets/images/logo/logo.9a9641e6.jpg";
import { NavLink } from "react-router-dom";
import { FaShoppingBag, FaCaretDown } from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai"
const Header = () => {
  const [isAccount, setIsAccount] = useState(false)
  const [isGoldRate, setIsGoldRate] = useState(false)
  const [isCart, setIsCart] = useState(false)
  return (
    <div className="w-full flex justify-center">
      <div className=" w-[60%] flex py-4 justify-between items-center">
        <NavLink to="/"><img src={Logo} className="h-[40px]" /></NavLink>
        <ul className="flex items-center uppercase select-none text-slate-500 text-[14px]">
          <li className="pr-7"><NavLink to="/shop" className="text-[25px]"><AiOutlineSearch/></NavLink></li>
          <li className="pr-10">
            <NavLink to="/shop"> Shop</NavLink>
          </li>
          <li className="pr-10 relative" onClick={()=>{setIsAccount(false); setIsGoldRate(!isGoldRate); setIsCart(false)}}>
            <div className="cursor-pointer"><span className="inline-block">Gold Rate</span><span className="inline-block text-sm ml-1"><FaCaretDown/></span></div>
            <ul className={`absolute z-10 top-[130%] bg-white left-0 text-[12px] border border-slate-300 w-[260px] p-2 rounded-sm ${!isGoldRate && 'hidden'}`}>
              <li className="pr-10 mb-1">999 Gold-103.00 Per Gram</li>
              <li className="pr-10 mb-1">916 Gold-97.00 Per Gram</li>
            </ul>
          </li>
          <li className="pr-10">
            <NavLink to="/stores">Stores</NavLink>
          </li>
          <li className="pr-10 relative" onClick={()=>{setIsAccount(!isAccount); setIsGoldRate(false); setIsCart(false)}}>
            <div className="cursor-pointer"><span className="inline-block">Account</span><span className="inline-block text-sm ml-1"><FaCaretDown/></span></div>
            <ul className={`absolute z-10 top-[130%] bg-white border border-slate-300 p-2 text-[12px] rounded-sm ${!isAccount && 'hidden'}`}>
              <li className="pr-10 mb-1">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="pr-10 mb-1">
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </li>
          <li className=" relative flex items-center bg-[#f8f9fa] py-3 px-4 rounded-sm hover:bg-[#e2e6ea] hover:cursor-pointer text-slate-900" onClick={()=>{setIsAccount(false); setIsGoldRate(false); setIsCart(!isCart)}}>
            <span className="inline-block pr-3 text-[15px]">SGD 0</span>
            <span className="inline-block text-2xl relative">
              <FaShoppingBag />
              <p className=" absolute right-[-6px] bottom-[-6px] flex justify-center items-center text-[#fff] text-[10px] w-[15px] h-[15px] rounded-[100%] bg-cyan-600">
                0
              </p>
            </span>
            <span className="inline-block text-sm ml-3"><FaCaretDown/></span>
            <div className={`absolute z-10 top-[110%] right-0 p-[30px] w-[200px] text-slate-500 text-center bg-white border border-slate-300 text-[12px] rounded-sm ${!isCart && 'hidden'}`}>Empty Cart</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
