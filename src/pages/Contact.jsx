import React from 'react'

const Contact = () => {
  return (
    <div className="w-full">
        <div className="w-full">
        <img src="https://maxi-cash.com/wp-content/uploads/2018/09/30_hero_img.png"/>
        </div>
        <div className="w-[70%] max-lg:w-[90%] m-auto">
            <div className="py-16">
                <h1 className="text-3xl mb-5">Contact Us</h1>
                <p className="mb-3">You are our number 1 priority and your opinion means so muc to us!</p>
                <p className="mb-3">For any feedback or queries, please contact our customer service representative at  <a className="text-[#056dae] hover:underline">+65 31297978</a>. Our customer service operating hours are as follows:</p>
                <ul className="list-disc list-inside mb-3 ml-4">
                    <li>9.:00AM to 5:00PM, Monday - Friday (Excluding Public Holidays)</li>
                </ul>
                <p className="mb-3">Alternatively, you can visit our stores located inland-wide:</p>
                <ul className="list-disc list-inside mb-3 ml-4">
                    <li>operating Hours: 8:00AM to 8:00PM, Monday - Sunday (Include Public Holiday)</li>
                </ul>
            </div>
            <div className="py-7">
                <div className="flex flex-row gap-7 w-[700px] max-md:w-full max-sm:flex-col mb-5">
                    <span className="flex flex-col gap-2 w-full">
                        <label>First Name<span className="text-red-500 text-sm mr-5">*</span></label>
                        <input type="text" className="focus:outline-none py-2 bg-slate-100 rounded-md w-full px-3"/>
                    </span>
                    <span className="flex flex-col gap-2 w-full">
                        <label>First Name<span className="text-red-500 text-sm mr-5">*</span></label>
                        <input type="text" className="focus:outline-none py-2 bg-slate-100 rounded-md w-full px-3"/>
                    </span>
                </div>
                <div className="flex flex-row gap-7 w-[700px] max-md:w-full max-sm:flex-col mb-5">
                    <span className="flex flex-col gap-2 w-full">
                        <label>Email Address<span className="text-red-500 text-sm mr-5">*</span></label>
                        <input type="text" className="focus:outline-none py-2 bg-slate-100 rounded-md w-full px-3"/>
                    </span>
                    <span className="flex flex-col gap-2 w-full">
                        <label>Contact Number<span className="text-red-500 text-sm mr-5"></span></label>
                        <input type="text" className="focus:outline-none py-2 bg-slate-100 rounded-md w-full px-3"/>
                    </span>
                </div>
                <div className="flex flex-row gap-7 w-[700px] max-md:w-full mb-5">
                    <span className="flex flex-col gap-2 w-full">
                        <label>Subject<span className="text-red-500 text-sm mr-5">*</span></label>
                        <input type="text" className="focus:outline-none py-2 bg-slate-100 rounded-md w-full px-3"/>
                    </span>
                </div>
                <div className="flex flex-row gap-7 w-[700px] max-md:w-full mb-5">
                    <span className="flex flex-col gap-2 w-full">
                        <label>Enter your Message here<span className="text-red-500 text-sm mr-5">*</span></label>
                        <textarea rows="7" className="focus:outline-none py-2 bg-slate-100 rounded-md w-full px-3"/>
                    </span>
                </div>
                <div className="flex flex-col w-[700px] max-md:w-full mb-5">
                    <span className="mb-5">
                        <input type="checkbox" className="inline-block align-middle"/>
                        <p className="inline-block align-middle ml-3">Subscribe to our Mailing List</p>
                    </span>
                    <span className="mb-5 flex flex-row items-start">
                        <input type="checkbox" className="mt-1"/>
                        <p className="ml-3">I acknowledge that by submitting this form, I consent to having my personal data collected, used, disclosed and/or processed in accordance with Maxi-Cash <a href="#" className="text-[#056dae] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#056dae] hover:underline">Terms of Use</a>.</p>
                    </span>
                    <button className="py-2 px-5 rounded-[4px] bg-[#204281] mb-5 text-white w-fit">Send Message</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact