import React,{useState, useEffect} from 'react'
import {MdArrowDropDown} from 'react-icons/md'
import { productCategory, productLists } from '../assets/data'
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate'
const Shop = () => {
  const [isShow24, setIsShow24] = useState(false);
  const [isSort,setIsSort] = useState(false);
  const [search,setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

 

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage,setItemPerPage] = useState(9);

  const product = productLists.filter((x)=>{
    return(
      x.category.includes(categoryFilter)
  )});
  const searchProducts = product.filter((x) => {
    return (
      x.title.includes(search)
    );
  });

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(searchProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searchProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, categoryFilter, search]);

    const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % searchProducts.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
    
  };
  
  return (
    <div className="w-full bg-[#f7f7f7] block">
      <div className="2xl:w-[65%] xl:w-[90%] max-xl:w-[90%] max-md:px-7 m-auto py-7 text-[#305d94] flex flex-row gap-20">
        <span>
          <a href="/">Home</a>
          <span className="px-2">/</span>
          <a href="/shop">Shop</a>
        </span>
      </div>
      <div className="w-[65%] max-2xl:w-[90%] m-auto flex flex-row max-md:flex-col">
        <div className="w-[30%] max-md:w-full p-5 bg-white">
          <div className={`border p-3 rounded-t-[4px] hover:cursor-pointer ${categoryFilter == '' && "bg-[#f7f7f7]" }`} onClick={()=>setCategoryFilter('')}>
            Shop All
          </div>
          <ul className="capitalize">
            {
              productCategory.map((item,index)=>(
                <li key={`cat-${index}`} className={`border border-t-0 hover:cursor-pointer hover:bg-[#f7f7f7] p-3 ${categoryFilter == item && "bg-[#f7f7f7]"}`} onClick={()=>{setCategoryFilter(item)}}>{item}</li>
              ))
            }
          </ul>
        </div>
        <div className="w-[70%] max-md:w-full p-5 pt-0 max-md:pt-7">
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
              currentItems &&
              currentItems.map((item,index)=>(
                  <div className="w-[32%] max-lg:w-[48%] bg-white border rounded-[4px] p-4 mb-5" key={`products-${index}`}>
                    <Link to={{ pathname: `/product_detail/${index + 1}/${categoryFilter.length > 0 ? item.category : 'all'}/${search.length > 0 ? search : 'search'}` }} state={searchProducts}>
                      <img src={item.img[0]}/>
                      <div className="h-[170px] flex flex-col justify-between">
                        <h1 className="font-bold">{item.title}</h1>
                        <p className="text-[#00457C] text-lg">SGD {item.price}</p>
                      </div>
                    </Link>
                  </div>     
              ))
              // <div className="text-center w-full text-xl font-light">Not Found</div>
            }
            
          </div>
          <div className="my-7 ">
            <ReactPaginate
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="previous"
                pageClassName="inline py-2 border border-slate-400 mx-1 text-[#0c4ca3] rounded-[4px] select-none"
                breakClassName="inline py-2 border border-slate-400 mx-1 text-[#0c4ca3] rounded-[4px] select-none"
                previousClassName="inline py-2 border border-slate-400 mr-3 uppercase text-[#0c4ca3] rounded-[4px] hover:bg-slate-100 hover:text-slate-500 select-non"
                nextClassName="inline py-2 border border-slate-400 ml-3 uppercase text-[#0c4ca3] rounded-[4px] hover:bg-slate-200 hover:text-slate-500 select-none "
                pageLinkClassName="page-link px-3"
                previousLinkClassName="page-link px-3"
                nextLinkClassName="page-link px-3"
                breakLabel="..."
                breakLinkClassName="page-link px-3"
                containerClassName="pagination"
                activeClassName="bg-[#0c4ca3] text-slate-50"
                render
              OnZeroPageCount={null}
            />   
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Shop