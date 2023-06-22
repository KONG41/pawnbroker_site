import React from 'react'
import {BsTelephone} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {central} from '../assets/data'
const Stores = () => {
  return (
    <div className="w-full bg-[#f7f7f7]">
      <div className="flex flex-row">
        <div className="w-[50%] flex flex-col items-center justify-center">
          <div className="w-[70%]">
            <h1 className="text-4xl mb-7">Our Stores</h1>
            <p className="mb-7">Maxi-Cash has the largest network of pawnshops and retail outlets which are conveniently located near amenities like bus interchanges and MRT stations.</p>
            <p className="mb-7">Find a store near you. Love our services? Click on the location icon of the store that you have visited and give us your review.</p>
            <div>
                <span className="border-2 border-[#204281] py-3 px-4 mr-1 rounded-[4px] text-[#204281] hover:cursor-pointer hover">Central</span>
                <span className="border-2 border-[#204281] py-3 px-4 mr-1 rounded-[4px] text-[#204281] hover:cursor-pointer hover">North</span>
                <span className="border-2 border-[#204281] py-3 px-4 mr-1 rounded-[4px] text-[#204281] hover:cursor-pointer hover">West</span>
                <span className="border-2 border-[#204281] py-3 px-4 mr-1 rounded-[4px] text-[#204281] hover:cursor-pointer hover">East</span>
            </div>
          </div>
        </div>
        <img src="https://maxi-cash.com/wp-content/uploads/2021/07/Maxi-Cash-SG_Locate-Our-Stores.png" className="w-[50%]"/>
      </div>
      <div className="w-[70%] m-auto">
        <h1 className="text-xl my-7">Central</h1>
        <div className="flex flex-row flex-wrap justify-between">
          {central.map((item,index)=>(
            <div className="w-[200px] pb-16" key={`central_${index}`}>
              <a href="#" className="font-bold pb-3 block"><span className="inline-block">{item.name}</span> <GoLocation className="inline-block text-[#056dae]"/></a>
              <p className="text-gray-500 pb-1">{item.location}</p>
              <p className="text-[#056dae] hover:text-[#056daeaf] hover:cursor-pointer italic"><BsTelephone className="inline-block text-sm"/>{item.tel}</p>
            </div>
        ))}
        </div>
        
       
      </div>
    </div>
  )
}

export default Stores