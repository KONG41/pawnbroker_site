import React from 'react'

const Login = () => {
  return (
    <div className="w-full bg-[#f7f7f7]">
      <div className="w-[65%] m-auto pb-44">
        <h1 className="text-xl font-semibold mb-3">Customer Login</h1>
        <p className="text-[#adb5bd] capitalize text-sm mb-7">Access your store account or create a new one</p>
        <div className="w-full mt-3 flex flex-row justify-between">
          <div className="w-[47.99%] border rounded-[4px] p-4 bg-white">
            <h1 className="text-xl font-bold mb-3">Registered customers</h1>
            <p className="mb-5 text-sm text-[#6c757d]">If you have an account, sign in with your e-mail address</p>
            <span className="w-full text-[#6c757d] mb-5 flex flex-row text-sm items-center">
              <label className="mr-4">Username<span className="text-red-500 text-sm">*</span></label>
              <input type="text" className="border rounded-[4px] focus:outline-none w-full py-2 px-1"/>
            </span>
            <span className="w-full text-[#6c757d] text-sm mb-5 flex flex-row items-center">
              <label className="mr-4">Password<span className="text-red-500">*</span></label>
              <input type="password" className="border rounded-[4px] w-full focus:outline-none py-2 px-1"/>
            </span>
            <p className="text-[#6c757d] mb-5 text-sm">Remember me</p>
            <span className="mb-7 block">
              <button className="px-4 py-2 text-white rounded-[4px] bg-[#0c4ca3] inline-block text-sm">Login</button>
              <a href="#" className=" text-[#0c4ca3] inline-block ml-3 font-light text-sm">Forget password?</a>
            </span>
          </div>
          <div className="w-[47.99%] border rounded-[4px] p-4 bg-white">
            <h1 className="font-bold text-xl mb-5">New Customers</h1>
            <button className="w-full py-5 bg-[#0c4ca3] text-white text-lg rounded-[4px] select-none">Create an account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login