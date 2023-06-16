import React from 'react'
import{ Link }from 'react-router-dom'
const PostPromote = (props) => {
    const{revers, data} = props
  return (
    <div className={`w-full h-[590px] flex ${revers?'flex-row-reverse':'flex-row'}`}>
        <Link to="#" className="w-[50%]">
             <img src={data.img} className="w-full object-cover transition-all duration-[0.3s] ease-in-out delay-0 hover:scale-[1.04] hover:opacity-[1] opacity-[0.85]"/>
        </Link>
        <div className="w-[50%]">
            <div className={`${revers?'mr-20': 'ml-20'} flex flex-col justify-center h-full`}>
                <h1 className="text-3xl mb-7 relative pt-[20px] after:content-[''] after:border-t-[4px] after:border-blue-900 after:absolute after:left-0 after:w-[40px] after:top-0">{data.title}</h1>
                <p className="font-medium mb-10">{data.desc}</p>
               <Link to={data.url} className="px-9 py-3 mb-5 rounded-md w-fit text-white text-sm font-semibold bg-blue-900 hover:cursor-pointer">See More</Link>
            </div>
        </div>
    </div>
  )
}

export default PostPromote