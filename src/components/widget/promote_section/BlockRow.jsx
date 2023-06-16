import React from 'react'
import MoreBtn from '../button/MoreBtn'

const BlockRow = (props) => {
  const {data} = props
  return (
    <div className="w-full flex flex-row justify-between">
      {
        data.map((item,index)=>(
          <div className="w-[30%]" key={index}>
          <img src={item.img}/>
          <div className="w-full flex flex-col items-center py-8 gap-8">
            <h1 className="text-2xl font-medium">{item.title}</h1>
            <MoreBtn text='Learn More' url='/' />
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default BlockRow