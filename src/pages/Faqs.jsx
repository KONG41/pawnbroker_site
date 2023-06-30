import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdOutlineArticle} from 'react-icons/md'
import Lam from '../assets/images/icons/lamfaq.svg'
import icon1 from '../assets/images/icons/icon01.png'
const Faqs = () => {
  return (
    <div className="w-full">
       <div className="w-full bg-[#204281] h-[400px] flex">
            <div className="w-[700px] max-md:w-[90%] m-auto">
                <h1 className="text-white text-2xl font-bold text-center mb-5">How can we help you today?</h1>
                <span className="w-full flex flex-row border-2 rounded-md">
                    <input type="text" placeholder="Enter the search term here..." className=" text-xl p-3 w-full focus:outline-none"/>
                    <div className="bg-slate-100 p-4 hover:cursor-pointer"><BiSearch className="inline-block align-middle text-slate-400 text-2xl"/></div>
                </span>
             
            </div>
       </div>
       <div className="w-full h-[170px] max-md:h-[350px] bg-[#f5f7f9] flex">
            <div className="w-[700px] max-md:w-[90%] h-[170px] flex flex-row gap-10 mx-auto mt-[-50px] max-md:flex-col">
                <div className="bg-white rounded-xl border-2 flex flex-row p-5 gap-5 text-[#264966]">
                    <img src={Lam} className="w-[75px]" />
                    <span>
                        <h1 className="text-lg font-semibold mb-1">Browse articles</h1>
                        <p>Quickly resolve your by exploring our self-help articles</p>
                    </span>
                </div>
                <div className="bg-white rounded-xl border-2 flex flex-row p-5 text-[#264966]">
                    <img src={icon1} className="w-[75px] object-contain" />
                    <span>
                        <h1 className="text-lg font-semibold mb-1">Submit a ticked</h1>
                        <p>Describe your issue by filling up the support ticket form</p>
                    </span>
                </div>
            </div>
        </div>
        <div className="w-[60%] max-xl:w-full m-auto p-7">
            <div className="w-full flex flex-row max-md:flex-col max-md:gap-3 max-md:items-center justify-between p-7">
                <h1 className="text-[#2C5CC5] font-bold text-xl">Most popular articles</h1>
                <a href="#" className="text-[#2C5CC5]">View all articles</a>
            </div>
            <div className="p-7">
                <div className="flex flex-row max-md:flex-col w-full border-b-[1px] max-md:border-b-0">
                    <a href="#" className="p-9 max-sm:px-1 w-full odd:border-r-[1px] max-md:odd:border-r-0 max-md:border-b-[1px]">
                        <MdOutlineArticle className="inline-block align-middle text-xl mr-2"/> <span className="text-xl text-[#2C5CC5] hover:text-black">What items do you accept?</span>
                    </a>
                    <a href="#" className="p-9 max-sm:px-1 border-b-1 border-r-1 w-full odd:border-r-[1px] max-md:odd:border-r-0 max-md:border-b-[1px]">
                        <MdOutlineArticle className="inline-block align-middle text-xl mr-2"/> <span className="text-xl text-[#2C5CC5] hover:text-black">What is Down-load?</span>
                    </a>
                </div>
                <div className="flex flex-row max-md:flex-col w-full">
                    <a href="#" className="p-9 max-sm:px-1 w-full odd:border-r-[1px] max-md:odd:border-r-0 max-md:border-b-[1px]">
                        <MdOutlineArticle className="inline-block align-middle text-xl mr-2"/> <span className="text-xl text-[#2C5CC5] hover:text-black">What are the branded bags accepted for pawn?</span>
                    </a>
                    <a href="#" className="p-9 max-sm:px-1 border-b-1 border-r-1 w-full odd:border-r-[1px] max-md:odd:border-r-0 max-md:border-b-[1px]">
                        <MdOutlineArticle className="inline-block align-middle text-xl mr-2"/> <span className="text-xl text-[#2C5CC5] hover:text-black">Are all your stores closing?</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs