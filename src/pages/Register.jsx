import React from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className="w-full bg-[#f7f7f7]">
      <div className="w-[65%] max-xl:w-[90%] m-auto pb-44 pt-5">
        <div className='flex flex-row max-lg:flex-col max-lg:items-start justify-between items-center'>
          <span>
            <h1 className="text-xl font-semibold mb-3">Register in the store</h1>
            <p className="text-[#adb5bd] capitalize text-sm mb-7">Create a new customer account</p>
          </span>
          <Link to='/login' className=" text-[#0c4ca3] inline-block ml-3 max-lg:ml-0 max-lg:mb-7 font-light text-sm">Have an account already? Sign in here.</Link>
        </div>
       
          <div className="w-full border rounded-[4px] p-4 bg-white">
           
            <div className="mb-7">
              <h1 className="text-xl font-bold mb-3">Personal information</h1>
              <div className="flex flex-row gap-12 max-lg:flex-col">
                <div className="w-full">
                  <span className="w-full text-[#6c757d] mb-5 flex flex-row text-sm items-center">
                    <label className="mr-4 w-[200px]">First name<span className="text-red-500 text-sm">*</span></label>
                    <input type="text" className="border rounded-[4px] focus:outline-none w-full py-2 px-1"/>
                  </span>
                  <span className="w-full text-[#6c757d] text-sm mb-5 flex flex-row items-center">
                    <label className="mr-4 w-[200px]">Phone number<span className="text-red-500">*</span></label>
                    <div className="flex justify-between w-full gap-7">
                       <select className="border rounded-[4px] w-fit max-md:w-[50%] focus:outline-none py-2 px-1 uppercase">
                        <option className="uppercase">singapore(+65)</option>
                        <option className="uppercase">south korea(+65)</option>
                        <option className="uppercase">china(+65)</option>
                       </select>
                       <input type="text" className="border rounded-[4px] w-full focus:outline-none py-2 px-1"/>
                    </div>
                  </span>
                  <span className="w-full text-[#6c757d] mb-5 flex flex-row text-sm items-center">
                    <label className="mr-4 w-[200px]">Birthday<span className="text-red-500 text-sm">*</span></label>
                    <input type="date" className="border rounded-[4px] focus:outline-none w-full py-2 px-1"/>
                  </span>
                  <span className="w-full text-[#6c757d] text-sm mb-5 flex flex-row items-center">
                    <label className="mr-4 w-[200px]">Race<span className="text-red-500">*</span></label>
                    <select className="border rounded-[4px] w-full focus:outline-none py-2 px-1 capitalize">
                      <option className="capitalize">please select race</option>
                      <option className="capitalize">chinese</option>
                      <option className="capitalize">malay</option>
                      <option className="capitalize">indian</option>
                      <option className="capitalize">other</option>
                    </select>
                  </span>
                </div>
                <div className="w-full">
                  <span className="w-full text-[#6c757d] mb-5 flex flex-row text-sm items-center">
                    <label className="mr-4 w-[200px]">Last name<span className="text-red-500 text-sm">*</span></label>
                    <input type="text" className="border rounded-[4px] focus:outline-none w-full py-2 px-1"/>
                  </span>
                  <span className="w-full text-[#6c757d] text-sm mb-5 flex flex-row items-center">
                    <label className="mr-4 w-[200px]">Email<span className="text-red-500">*</span></label>
                    <input type="email" className="border rounded-[4px] w-full focus:outline-none py-2 px-1"/>
                  </span>
                  <span className="w-full text-[#6c757d] mb-5 flex flex-row text-sm items-center">
                    <label className="mr-4 w-[200px]">Country<span className="text-red-500 text-sm">*</span></label>
                    <select className="border rounded-[4px] focus:outline-none w-full py-2 px-1 capitalize">
                      <option className="capitalize">please select country</option>
                      <option className="capitalize">singapore</option>
                      <option className="capitalize">india</option>
                      <option className="capitalize">south korea</option>
                    </select>
                  </span>
                  <span className="w-full text-[#6c757d] text-sm mb-5 flex flex-row items-center">
                    <label className="mr-4 w-[200px]">Gender<span className="text-red-500">*</span></label>
                    <select className="border rounded-[4px] w-full focus:outline-none py-2 px-1 capitalize">
                      <option className="capitalize">please select gender</option>
                      <option className="capitalize">male</option>
                      <option className="capitalize">female</option>
                   
                    </select>
                  </span>
                </div>
              </div>
              
             
            </div>

            <div className="mb-3">
              <h1 className="text-xl font-bold mb-3">Account credentials</h1>
              <span className="w-full text-[#6c757d] mb-5 flex flex-row text-sm items-center">
                <label className="mr-4 w-[200px]">Password<span className="text-red-500 text-sm">*</span></label>
                <input type="password" className="border rounded-[4px] focus:outline-none w-full py-2 px-1"/>
              </span>
              <span className="w-full text-[#6c757d] text-sm mb-5 flex flex-row items-center">
                <label className="mr-4 w-[200px]">Verification<span className="text-red-500">*</span></label>
                <input type="password" className="border rounded-[4px] w-full focus:outline-none py-2 px-1"/>
              </span>
              <button className="px-4 py-2 text-white rounded-[4px] bg-[#0c4ca3] inline-block text-sm">Create an account</button>
            </div>
           
            

          </div>
    
      </div>
    </div>
  )
}

export default Register