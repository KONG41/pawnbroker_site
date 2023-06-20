import React from 'react'
import {Link} from 'react-router-dom'
const ProductBox = (props) => {
  const{img,title,desc,url} = props
  return (
    <div className="h-[auto] bg-white shadow my-10">
        <div className="w-full p-[10px] flex flex-col items-center">
            <img src={img} className='h-[320px]'/>
            <h1 className="mb-7 text-2xl">{title}</h1>
            <p className="mb-7 text-sm text-gray-400">{desc}</p>
            <Link to={url} className="px-9 py-3 mb-5 rounded-md w-fit text-white text-sm font-semibold bg-blue-900 hover:cursor-pointer">Shop Now</Link>
        </div>
    </div>
  )
}

export default ProductBox