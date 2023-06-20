import React from 'react'
import MoreBtn from "../widget/button/MoreBtn"
const subscribe = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 pb-20">
        <h1 className="text-3xl font-medium">Be at The Forefront</h1>
        <p className="text-gray-500">Subscribe to our newsletter and receive our latest promotions, product launches and news.</p>
        <div className="flex flex-row w-[70%] justify-between">
            <span className="border-[1px] relative border-gray-500 px-[10px] py-[15px] rounded-[4px] w-[30%]">
                 <label className="bg-gray-50 absolute top-[-13px] left-[13px] px-2">E-mail<span className="text-red-400 text-[12px]">*</span></label>
                 <input type="text" placeholder="user@gmail.com" className="bg-transparent focus:outline-none text-sm font-semibold"/>
            </span>
            <span className="border-[1px] relative border-gray-500 px-[10px] py-[15px] rounded-[4px] w-[30%]">
                 <label className="bg-gray-50 absolute top-[-13px] left-[13px] px-2">First Name<span className="text-red-400 text-[12px]">*</span></label>
                 <input type="text" placeholder="Enter your first name" className="bg-transparent focus:outline-none text-sm font-semibold"/>
            </span>
            <span className="border-[1px] relative border-gray-500 px-[10px] py-[15px] rounded-[4px] w-[30%]">
                 <label className="bg-gray-50 absolute top-[-13px] left-[13px] px-2">Last Name<span className="text-red-400 text-[12px]">*</span></label>
                 <input type="text" placeholder="Enter your last name" className="bg-transparent focus:outline-none text-sm font-semibold"/>
            </span>
        </div>
        <div className="w-[70%] flex items-start gap-2">
            <input type="checkbox" className="mt-[6px]"/>
            <p className="font-medium">I acknowledge that by submitting this form, i consent to having my personal data collected, use disclosed and/or processed in accordance with Maxi-Cash 
                <a href="#" className="text-blue-600 hover:underline"> Privacy Policy</a> and <a href="#" className="text-blue-600 hover:underline">Terms of Use</a>
            </p>
        </div>
        <MoreBtn text="Subscribe"/>
    </div>
  )
}

export default subscribe