import React,{useState} from 'react'
import {MdArrowDropDown} from 'react-icons/md'
import { productCategory, productLists } from '../assets/data'
import {Link} from 'react-router-dom'
const Shop = () => {
  const [isShow24, setIsShow24] = useState(false);
  const [isSort,setIsSort] = useState(false);
  const [search,setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const product = productLists.filter((x)=>{
    return(
    x.category.includes(categoryFilter)
  )})
  const searchProducts = product.filter((x) => {
    return (
      x.title.includes(search)
    );
  });

  return (
    <div className="w-full bg-[#f7f7f7] block">
      <div className="w-[65%] m-auto py-7 text-[#305d94] flex flex-row gap-20">
        <span>
          <a href="/">Home</a>
          <span className="px-2">/</span>
          <a href="/shop">Shop</a>
        </span>
      </div>
      <div className="w-[65%] m-auto flex flex-row">
        <div className="w-[30%] p-5 bg-white">
          <div className={`border p-3 rounded-t-[4px] hover:cursor-pointer ${categoryFilter == '' && "bg-[#f7f7f7]" }`} onClick={()=>setCategoryFilter('')}>
            Shop All
          </div>
          <ul className="capitalize">
            {
              productCategory.map((item,index)=>(
                <li key="index" className={`border border-t-0 hover:cursor-pointer hover:bg-[#f7f7f7] p-3 ${categoryFilter == item && "bg-[#f7f7f7]"}`} onClick={()=>{setCategoryFilter(item)}}>{item}</li>
              ))
            }
          </ul>
        </div>
        <div className="w-[70%] p-5 pt-0">
          <div className="w-full border p-5 bg-white flex flex-row gap-5 rounded-[4px]">
            <input type="text" className="focus:outline-none border w-full rounded-[4px] px-3" onChange={(e)=>{setSearch(e.target.value)}}/>
            <span className=" hover:cursor-pointer select-none py-2 px-3 bg-[#0c4ca3] text-white rounded-[4px]">Search</span>
            <span className=" hover:cursor-pointer select-none py-2 text-[#0c4ca3] font-light" onClick={()=>{setSearch('')}}>Clear</span>
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
              searchProducts.length > 0 ?
                searchProducts.map((item,index)=>(
                  <div className="w-[32%] bg-white border rounded-[4px] p-4 mb-5">
                    <Link to="/product_detail" state={item}>
                      <img src={item.img[0]}/>
                      <div className="h-[170px] flex flex-col justify-between">
                        <h1 className="font-bold">{item.title}</h1>
                        <p className="text-[#00457C] text-lg">SGD {item.price}</p>
                      </div>
                    </Link>
                  </div>     
              )): <div className="text-center w-full text-xl font-light">Not Found</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop