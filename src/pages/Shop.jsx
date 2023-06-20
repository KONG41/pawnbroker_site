import React,{useState} from 'react'
import {MdArrowDropDown} from 'react-icons/md'
import { productCategory, productLists } from '../assets/data'
const Shop = () => {
  const [isShow24, setIsShow24] = useState(false);
  const [isSort,setIsSort] = useState(false);
  return <div className="w-full bg-[#f7f7f7] block">
      <div className="w-[65%] m-auto py-7 text-[#305d94] flex flex-row gap-20">
        <span>
          <a href="/home">Home</a>
          <span className="px-2">/</span>
          <a href="/shops">Shop</a>
        </span>
      </div>
      <div className="w-[65%] m-auto flex flex-row">
        <div className="w-[30%] p-5">
          <div className="border p-3 bg-transparent rounded-t-[4px]">
            Shop
          </div>
          <ul className="bg-white capitalize">
            {
              productCategory.map((item,index)=>(
                 <li key="index" className="border border-t-0 hover:cursor-pointer hover:bg-[#f7f7f7] p-3">{item}</li>
              ))
            }
          </ul>
        </div>
        <div className="w-[70%] p-5">
          <div className="w-full border p-5 bg-white flex flex-row gap-5 rounded-[4px]">
            <input type="text" className="focus:outline-none border w-full rounded-[4px] px-3"/>
            <span className=" hover:cursor-pointer select-none py-2 px-3 bg-[#0c4ca3] text-white rounded-[4px]">Search</span>
            <span className=" hover:cursor-pointer select-none py-2 text-[#0c4ca3] font-light">Clear</span>
          </div>
          <div className="py-3 w-full flex justify-end gap-7">
            <div className="text-[#0c4ca3] text-sm hover:cursor-pointer relative select-none p-4" onClick={()=>{setIsShow24(!isShow24); setIsSort(false)}}><span className="inline-block align-middle hover:underline">Show 24</span> <MdArrowDropDown className="inline-block align-middle text-lg"/>
              <ul className={`bg-white text-black py-4 border rounded-[4px] absolute top-[100%] w-full text-sm ${isShow24 ? 'block' : 'hidden'}`}>
                <li className="py-1 hover:cursor-pointer hover:bg-slate-50"><p className="px-3">48</p></li>
                <li className="py-1 hover:cursor-pointer hover:bg-slate-50"><p className="px-3">96</p></li>
              </ul>
            </div>
            <div className="text-[#0c4ca3] text-sm hover:cursor-pointer relative select-none p-4" onClick={()=>{setIsShow24(false); setIsSort(!isSort)}}><span className="inline-block align-middle hover:underline">Sort By Popularity</span> <MdArrowDropDown className="inline-block align-middle text-lg"/>
              <ul className={`bg-white text-black py-4 border rounded-[4px] absolute top-[100%] w-full text-sm ${isSort ? 'block' : 'hidden'}`}>
                <li className="py-1 hover:cursor-pointer hover:bg-slate-50"><p className="px-3">By Popularity</p></li>
                <li className="py-1 hover:cursor-pointer hover:bg-slate-50"><p className="px-3">New Arrivals</p></li>
                <li className="py-1 hover:cursor-pointer hover:bg-slate-50"><p className="px-3">Price:Low to Hight</p></li>
                <li className="py-1 hover:cursor-pointer hover:bg-slate-50"><p className="px-3">Price: Hight to Low</p></li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap justify-between">
            {
              productLists.map((item,index)=>(
                  <div className="w-[32%] bg-white border rounded-[4px] p-4 mb-5">
                    <img src={item.img}/>
                    <div className="h-[170px] flex flex-col justify-between">
                      <h1 className="font-bold">{item.title}</h1>
                      <p className="text-[#00457C] text-lg">SGD {item.price}</p>
                    </div>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
}

export default Shop