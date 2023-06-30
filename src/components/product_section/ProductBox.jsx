import React from 'react'
import {Link} from 'react-router-dom'
const ProductBox = (props) => {
  const{img,title,desc,url,data, reload} = props
  const ReloadPage = () => {
    if(reload){
      setTimeout(()=>{
         window.location.reload();
      },0) 
    }
  }
  return (
    <div className="h-[auto] bg-white shadow my-10">
        <div className="w-full p-[10px] flex flex-col items-center justify-between">
            <img src={img} className='h-[320px]'/>
            <h1 className="mb-7 text-2xl h-[64px]">{title}</h1>
            {/* <p className="mb-7 text-sm text-gray-400">{desc}</p> */}
            <Link to={url} className="px-9 py-3 mb-5 rounded-md w-fit text-white text-sm font-semibold bg-blue-900 hover:cursor-pointer" state={data} onClick={()=>{ReloadPage()}}>Shop Now</Link>
        </div>
    </div>
  )
}

export default ProductBox