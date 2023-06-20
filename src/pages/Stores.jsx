import React from 'react'

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

    </div>
  )
}

export default Stores