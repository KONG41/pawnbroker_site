import React from 'react'
import{ Link }from 'react-router-dom'
const SimplePromote = (props) => {
    const{data} = props
  return (
    <div className={`w-full h-[auto] max-md:h-auto flex flex-row-reverse max-md:flex-col max-md:gap-7`}>
        <div className="w-[50%] max-md:w-full">
             <img src={data.img} className="w-full object-cover"/>
        </div>
        <div className="w-[50%] max-md:w-full mr-5 max-md:mr-0">
            <div className={` w-[70%] max-md:w-[90%] float-right max-md:float-none max-md:m-auto flex flex-col justify-center h-full max-lg:h-auto`}>
                <h1 className="text-3xl mb-7 relative pt-[20px]">{data.title}</h1>
                <p className="font-medium mb-10" dangerouslySetInnerHTML={{ __html: data.desc }}></p>
            </div>
        </div>
    </div>
  )
}

export default SimplePromote