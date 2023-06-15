import React from 'react'
import footerLogo from '../../assets/images/logo/footer-logo.jpg'
import { NavLink } from "react-router-dom";
import {BsFillChatLeftDotsFill} from "react-icons/bs"
const Footer = () => {
  return (
    <div className="w-full bg-[#0c4ca3] flex justify-center text-white relative">
      <div className="w-[60%] py-14 flex justify-around">
        <div className="w-[300px]">
          <img className="w-[250px]" src={footerLogo} />
          <p className="text-[14px]">© Copyright 2020-2023 Maxi-Cash</p>
        </div>
        <ul>
          <li><h1 className="font-semibold text-[20px] mb-2">Services</h1></li>
          <li><NavLink to="#" className="text-white text-[14px]">E-Shop</NavLink></li>
          <li><NavLink to="#" className="text-white text-[14px]">Maxi-Cash App</NavLink></li>
          <li><NavLink to="#" className="text-white text-[14px]">Value Now</NavLink></li>
        </ul>
        <ul>
          <li><h1 className="font-semibold text-[20px] mb-2">Support</h1></li>
          <li><NavLink to="#" className="text-white text-[14px]">Contact Us</NavLink></li>
          <li><NavLink to="#" className="text-white text-[14px]">FAQs</NavLink></li>
          <li><NavLink to="#" className="text-white text-[14px]">Shipping & Returns</NavLink></li>
          <li><NavLink to="#" className="text-white text-[14px]">Tax and Insurance</NavLink></li>
        </ul>
        <ul>
          <li><h1 className="font-semibold text-[20px] mb-2">Info</h1></li>
          <li><NavLink to="#" className="text-white text-[14px]">Cookie Policy</NavLink></li>
          <li><NavLink to="#" className="text-white text-[14px]">Privacy Policy</NavLink></li>
          <li><NavLink to="#" className="text-white text-[14px]">Terms of Use</NavLink></li>
        </ul>
      </div>
      <div className="absolute hover:cursor-pointer active:text-slate-500 active:bg-[#ffffff70] right-5 bottom-5 p-5 bg-white text-slate-950  rounded-tl-[50%] rounded-bl-[50%] rounded-br-[50%] rounded-tr-[5px]"><BsFillChatLeftDotsFill/></div>
    </div>
  )
}

export default Footer