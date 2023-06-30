import React,{useState, useEffect, createRef, createContext} from "react";
import Logo from "../../assets/images/logo/logo.9a9641e6.jpg";
import { NavLink } from "react-router-dom";
import { FaShoppingBag, FaCaretDown } from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import {RxHamburgerMenu} from "react-icons/rx";
import {getWindowDimensions} from "../../helper/ScreenSize.js";
import {RiFacebookLine, RiInstagramLine, RiYoutubeLine} from "react-icons/ri";
import { useTranslation } from "react-i18next";
import gb from '../../assets/images/icons/gb.svg';
import skr from '../../assets/images/icons/kr.svg';
const Header = () => {
  const [isAccount, setIsAccount] = useState(false)
  const [isGoldRate, setIsGoldRate] = useState(false)
  const [isCart, setIsCart] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLang, setIsLang] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const handleIsMobile = () =>{
    setIsMobile(!isMobile)
  }
  const { i18n } = useTranslation();
  const onChangeLag = (e)=> {
    i18n.changeLanguage(e);
    localStorage.setItem("lang", e);
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    if (window.innerWidth > 768) {
      setIsMobile(false)
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);
  return (
    <div className="w-full flex justify-center sticky top-0 z-10 bg-white border-b">
        

      <div className=" w-[60%] max-xl:w-[90%] max-lg:w-full flex py-4 justify-between items-center relative">
      
        <NavLink to="/"><img src={Logo} className="h-[40px]" onClick={()=>{setIsMobile(false)}}/></NavLink>
        <span className="hidden max-md:block text-2xl px-7 hover:cursor-pointer" onClick={handleIsMobile}><RxHamburgerMenu/></span>
        <ul className={`${isMobile?'flex flex-col items-center py-7 w-full gap-5 uppercase select-none text-black text-[18px] absolute top-[100%] z-20 bg-[rgba(255,255,255,.9)] h-auto':'flex items-center uppercase select-none text-slate-500 text-[14px] max-md:hidden'}`}>
          <li className="pr-7 max-md:pr-0" onClick={()=>{setIsMobile(false)}}><NavLink to="/shop" className="text-[25px]"><AiOutlineSearch/></NavLink></li>
          <li className="pr-10 max-md:pr-0" onClick={()=>{setIsMobile(false)}}>
            <NavLink to="/shop"> Shop</NavLink>
          </li>
          <li className="pr-10 max-md:pr-0 relative" onClick={()=>{setIsAccount(false); setIsGoldRate(!isGoldRate); setIsCart(false);}}>
            <div className="cursor-pointer flex"><span className="inline-block whitespace-nowrap">Gold Rate</span><span className="inline-block text-sm ml-1"><FaCaretDown/></span></div>
            <ul className={`absolute z-10 top-[130%] bg-white left-0 text-[12px] border border-slate-300 w-[260px] p-2 rounded-sm ${!isGoldRate && 'hidden'}`}>
              <li className="pr-10 mb-1">999 Gold-103.00 Per Gram</li>
              <li className="pr-10 mb-1">916 Gold-97.00 Per Gram</li>
            </ul>
          </li>
          <li className="pr-10 max-md:pr-0" onClick={()=>{setIsMobile(false)}}>
            <NavLink to="/stores">Stores</NavLink>
          </li>
          <li className="pr-10 max-lg:pr-2 max-md:pr-0 relative" onClick={()=>{setIsAccount(!isAccount); setIsGoldRate(false); setIsCart(false);}}>
            <div className="cursor-pointer flex"><span className="inline-block whitespace-nowrap">Account</span><span className="inline-block text-sm ml-1"><FaCaretDown/></span></div>
            <ul className={`absolute z-10 top-[130%] bg-white border border-slate-300 p-2 text-[12px] rounded-sm ${!isAccount && 'hidden'}`}>
              <li className="pr-10 mb-1" onClick={()=>{setIsMobile(false)}}>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="pr-10 mb-1" onClick={()=>{setIsMobile(false)}}>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </li>
          <li className=" relative flex items-center bg-[#f8f9fa] py-3 px-4 rounded-sm hover:bg-[#e2e6ea] hover:cursor-pointer text-slate-900 max-md:w-fit" onClick={()=>{setIsAccount(false); setIsGoldRate(false); setIsCart(!isCart);}}>
            <span className="inline-block pr-3 text-[15px] max-lg:text-[13px]">SGD 0</span>
            <span className="inline-block text-2xl max-lg:text-xl relative">
              <FaShoppingBag />
              <p className=" absolute right-[-6px] bottom-[-6px] flex justify-center items-center text-[#fff] text-[10px] w-[15px] h-[15px] rounded-[100%] bg-cyan-600">
                0
              </p>
            </span>
            <span className="inline-block text-sm ml-3"><FaCaretDown/></span>
            <div className={`absolute z-10 top-[110%] right-0 p-[30px] w-[200px] text-slate-500 text-center bg-white border border-slate-300 text-[12px] rounded-sm ${!isCart && 'hidden'}`}>Empty Cart</div>
          </li>

          <ul className="hidden max-md:block">
              <li><h1 className="font-semibold text-[20px] mb-2">Follow us on</h1></li>
              <div className="m-auto w-fit">
              <li className="inline-block"><NavLink to="#" className="bg-[#0c4ca3] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle group hover:bg-[#fff] hover:border-[#0c4ca3] hover:border"><RiFacebookLine className="w-[16px] h-[16px] mt-[8px] ml-[8px] text-[#fff] group-hover:text-[#0c4ca3] text-2xl"/></NavLink></li>
              <li className=" inline-block"><NavLink to="#" className="bg-[#0c4ca3] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle group hover:bg-[#fff] hover:border-[#0c4ca3] hover:border"><RiInstagramLine className="w-[16px] h-[16px] mt-[8px] ml-[8px] text-[#fff] group-hover:text-[#0c4ca3] text-2xl"/></NavLink></li>
              <li className="inline-block"><NavLink to="#" className="bg-[#0c4ca3] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle group hover:bg-[#fff] hover:border-[#0c4ca3] hover:border"><RiYoutubeLine className="w-[16px] h-[16px] mt-[8px] ml-[8px] text-[#fff] group-hover:text-[#0c4ca3] text-2xl"/></NavLink></li>
            </div>
          </ul>
          <div className="ml-5 self-center relative hover:cursor-pointer" onClick={()=>{setIsLang(!isLang)}}>
            {i18n.resolvedLanguage == 'en' && <img src={gb} className="max-w-[30px] h-[30px] rounded-full border"/>}
            {i18n.resolvedLanguage == 'kr' && <img src={skr} className="max-w-[30px] h-[30px]  rounded-full border"/>}
            <ul className={`absolute w-[110px] flex justify-around z-10 top-[130%] left-0 bg-white border border-slate-300 p-2 text-[12px] rounded-sm ${!isLang && 'hidden'}`}>
              <li className=" mb-1" onClick={()=>{setIsMobile(false);onChangeLag('en')}}>
               <img src={gb} className="max-w-[30px] h-[30px] rounded-full border"/>
              </li>
              <li className="mb-1" onClick={()=>{setIsMobile(false);onChangeLag('kr')}}>
               <img src={skr} className="max-w-[30px] h-[30px] rounded-full border"/>
              </li>
            </ul>
        </div>
        </ul>
       
      </div>
    </div>
  );
};

export default Header;
