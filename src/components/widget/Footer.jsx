import React from 'react'
import footerLogo from '../../assets/images/logo/footer-logo.jpg'
import { NavLink, Link } from "react-router-dom";
import {BsFillChatLeftDotsFill} from "react-icons/bs"
import {RiFacebookLine, RiInstagramLine, RiYoutubeLine} from "react-icons/ri"
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { i18n } = useTranslation();
  const onChangeLag = (e)=> {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  }
  return (
    <div className="w-full bg-[#0c4ca3] flex justify-center text-white relative">
      <div className="w-[60%] py-14 flex justify-around max-md:flex-col max-xl:w-[90%] max-lg:w-full max-md:w-[90%] max-md:gap-5">
        <div className="w-[300px]">
          <Link to="/"><img className="w-[250px]" src={footerLogo} /></Link>
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
          <li><NavLink to="/contactUs" className="text-white text-[14px]">Contact Us</NavLink></li>
          <li><NavLink to="/faqs" className="text-white text-[14px]">FAQs</NavLink></li>
          <li><NavLink to="#" className="text-white text-[14px]">Shipping & Returns</NavLink></li>
          <li><NavLink to="#" className="text-white text-[14px]">Tax and Insurance</NavLink></li>
        </ul>
        <ul>
          <li><h1 className="font-semibold text-[20px] mb-2">Info</h1></li>
          <li><NavLink to="/info/cookie" className="text-white text-[14px]">Cookie Policy</NavLink></li>
          <li><NavLink to="/info/policy" className="text-white text-[14px]">Privacy Policy</NavLink></li>
          <li><NavLink to="/info/terms" className="text-white text-[14px]">Terms of Use</NavLink></li>
        </ul>

        <ul>
          <li><h1 className="font-semibold text-[20px] mb-2">Follow us on</h1></li>
          <li className="inline-block"><NavLink to="#" className="bg-[#fff] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle group hover:bg-[#0c4ca3] hover:border-[#fff] hover:border"><RiFacebookLine className="w-[16px] h-[16px] mt-[8px] ml-[8px] text-[#0c4ca3] group-hover:text-[#fff] text-2xl"/></NavLink></li>
          <li className=" inline-block"><NavLink to="#" className="bg-[#fff] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle group hover:bg-[#0c4ca3] hover:border-[#fff] hover:border"><RiInstagramLine className="w-[16px] h-[16px] mt-[8px] ml-[8px] text-[#0c4ca3] group-hover:text-[#fff] text-2xl"/></NavLink></li>
          <li className="inline-block"><NavLink to="#" className="bg-[#fff] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle group hover:bg-[#0c4ca3] hover:border-[#fff] hover:border"><RiYoutubeLine className="w-[16px] h-[16px] mt-[8px] ml-[8px] text-[#0c4ca3] group-hover:text-[#fff] text-2xl"/></NavLink></li>
        </ul>

        <ul>
          <li><h1 className="font-semibold text-[20px] mb-2">Language</h1></li>
          <li className="w-full">
            <select className="w-full focus:outline-none bg-inherit" defaultValue={i18n.resolvedLanguag} onChange={(e)=>onChangeLag(e)}>
              <option className="text-[#0c4ca3]" value="en">English</option>
              <option className="text-[#0c4ca3]" value="kr">Korea</option>
            </select>
          </li>
        </ul>

      </div>
      <div className="absolute hover:cursor-pointer active:text-slate-500 active:bg-[#ffffff70] right-5 bottom-5 p-5 bg-white text-slate-950  rounded-tl-[50%] rounded-bl-[50%] rounded-br-[50%] rounded-tr-[5px]"><BsFillChatLeftDotsFill/></div>
    </div>
  )
}

export default Footer