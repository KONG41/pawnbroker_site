import React, {useState} from "react";
import ProductSlide from "../../components/product_section/ProductSlide";
import i_facebook from "../../assets/images/icons/facebook.svg";
import i_whatsapp from "../../assets/images/icons/whatsapp.svg";
import i_line from "../../assets/images/icons/line.svg";
import i_messenger from "../../assets/images/icons/messenger.svg";
import i_twitter from "../../assets/images/icons/twitter.svg";
import i_wechat from "../../assets/images/icons/wechat.svg";
import i_person_pin from "../../assets/images/icons/person_pin_circl.png";
import i_replay from "../../assets/images/icons/replay.png";
import i_add_comment from "../../assets/images/icons/add_comment.png";
import {FaInfoCircle, FaStar} from 'react-icons/fa';
import {MdOutlineArrowBackIosNew} from 'react-icons/md';
import MoreBtn from '../../components/widget/button/MoreBtn';
const ProductDetail = () => {
  const productData = [
    {
      title: "Citigems 18K Gold Shooting ...",
      desc: "Citigems Fine Jewelry",
      img:
        "https://maxi-cash.com/wp-content/uploads/2022/08/shooting-star-diamond-earrings.jpeg"
    },
    {
      title: "Citigems 18K Gold Shooting ...",
      desc: "Citigems Fine Jewelry",
      img:
        "https://maxi-cash.com/wp-content/uploads/2022/08/shooting-star-diamond-necklace.jpeg"
    },
    {
      title: "Citigems 916 Love Lock Pendant",
      desc: "Citigems 916/999 Gold",
      img:
        "https://maxi-cash.com/wp-content/uploads/2021/07/96915-01-06-916-gold-heart-lock-key-pendant.jpg"
    },
    {
      title: "Citigems 916 Gold Earrings",
      desc: "Citigems 916/999 Gold",
      img: "https://maxi-cash.com/wp-content/uploads/2021/07/97403-01-06.jpg"
    },
    {
      title: "Citigems 18K Gold Shooting ...",
      desc: "Citigems Fine Jewelry",
      img:
        "https://maxi-cash.com/wp-content/uploads/2022/08/shooting-star-diamond-earrings.jpeg"
    },
    {
      title: "Citigems 18K Gold Shooting ...",
      desc: "Citigems Fine Jewelry",
      img:
        "https://maxi-cash.com/wp-content/uploads/2022/08/shooting-star-diamond-necklace.jpeg"
    },
    {
      title: "Citigems 916 Love Lock Pendant",
      desc: "Citigems 916/999 Gold",
      img:
        "https://maxi-cash.com/wp-content/uploads/2021/07/96915-01-06-916-gold-heart-lock-key-pendant.jpg"
    },
    {
      title: "Citigems 916 Gold Earrings",
      desc: "Citigems 916/999 Gold",
      img: "https://maxi-cash.com/wp-content/uploads/2021/07/97403-01-06.jpg"
    }
  ];

  const [taps, setTaps] = useState('detail');
  return (
    <div className="w-full bg-[#f7f7f7]">
      {/* menu section */}
      <div className="w-[65%] m-auto py-14 text-[#305d94] flex flex-row gap-20">
        <a href="#"> <MdOutlineArrowBackIosNew className="inline-block align-middle"/><span className="inline-block align-middle pl-2">Back to shop</span></a>
        <span>
          <a href="/home">Home</a><span className="px-2">/</span><a href="/shops">Shop</a>
        </span>
      </div>
      <div className="w-[65%] m-auto bg-[#e5e5e5]">
        {/* detail section */}
        <div className="w-full px-7">
          <div className="flex flex-row gap-11 mb-7">
            <div className="flex flex-row bg-white p-7 w-[70%] gap-4">
              <img
                src="https://shop.maxi-cash.com/media/cache/sylius_shop_product_large_thumbnail/f2/70/aa9f78a0a8826c82eecef3149c00.jpeg"
                className="w-[350px]"
              />
              <div className="w-full">
                <p className="font-bold">916 Fold Intertwined Circles Bracelet</p>
                <h1 className="font-bold text-2xl text-[#00A0AF] mt-7 mb-3">SGD 640</h1>
                <p className="text-gray-400 text-sm">
                <FaStar className="mr-1 inline-block align-middle"/>
                <FaStar className="mr-1 inline-block align-middle"/>
                <FaStar className="mr-1 inline-block align-middle"/>
                <FaStar className="mr-1 inline-block align-middle"/>
                <FaStar className="mr-1 inline-block align-middle"/>
                <span   className="mr-1 inline-block align-middle">(0)</span>
                </p>
                <p className="border-b my-7" />
                <span className="flex items-center my-7">
                  <labe className="mr-4">
                    Quantity<span className="text-sm text-red-600">*</span>
                  </labe>
                  <input
                    type="number"
                    value ={1}
                    className="focus:outline-none border p-2 rounded-[4px] w-full"
                  />
                </span>
                <div className="flex flex-row gap-10 my-7">
                  <span className="text-white text-[12px] select-none bg-[#00457C] py-2 rounded-[4px] hover:cursor-pointer w-full text-center">
                    Buy Now
                  </span>
                  <span className="text-white text-[12px] select-none bg-[#0096D7] py-2 rounded-[4px] hover:cursor-pointer w-full text-center">
                    Add to Card
                  </span>
                </div>
                <div className="my-7">
                  <span className="text-[#6c757d] font-semibold mr-4">
                    Share:
                  </span>
                  <a
                    href="#"
                    className="bg-[#4267B2] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#4267b2af] hover:-translate-y-[5px] duration-300"
                  >
                    <img
                      src={i_facebook}
                      className="w-[16px] h-[16px] mt-[8px] ml-[8px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="bg-[#25d366] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#25d3659a] hover:-translate-y-[5px] duration-300"
                  >
                    <img
                      src={i_whatsapp}
                      className="w-[16px] h-[16px] mt-[8px] ml-[8px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="bg-[#4EC034] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#4ec034ad] hover:-translate-y-[5px] duration-300"
                  >
                    <img
                      src={i_wechat}
                      className="w-[16px] h-[16px] mt-[8px] ml-[8px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="bg-[#00c300] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#00c30096] hover:-translate-y-[5px] duration-300"
                  >
                    <img
                      src={i_line}
                      className="w-[16px] h-[16px] mt-[8px] ml-[8px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="bg-[#448AFF] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#4489ffa2] hover:-translate-y-[5px] duration-300"
                  >
                    <img
                      src={i_messenger}
                      className="w-[16px] h-[16px] mt-[8px] ml-[8px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="bg-[#55acee] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#55acee98] hover:-translate-y-[5px] duration-300"
                  >
                    <img
                      src={i_twitter}
                      className="w-[16px] h-[16px] mt-[8px] ml-[8px]"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-7 w-[30%]">
              <h1 className="text-[#00457c]">Delivery Options</h1>
              <div className="mt-4">
                <img
                  src={i_person_pin}
                  className="inline-block w-[24px] mr-[8px]"
                />
                <p className="inline-block text-[#6c757d]">+$0.00</p>
              </div>
              <h1 className="text-[#00457c] mt-4">Other Information</h1>
              <div className="mt-4">
                <div className="inline-block w-[50%]">
                  <img src={i_replay} className="h-[40px] m-auto" />
                  <p className="text-center mt-2">7 Day Exchange</p>
                </div>
                <div className="inline-block w-[50%]">
                  <img src={i_add_comment} className="h-[40px] m-auto" />
                  <p href="#" className="text-center mt-2">
                    <a href="#">Write a review</a>
                  </p>
                </div>
              </div>
              <div className="inline-block w-[50%] mt-4">
                <p className="text-center text-[#00a0af] text-[30px]">0</p>
                <p href="#" className="text-center mt-1">
                  Review/s
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-white mb-7 border rounded-[4px]">
            <ul className="border-b flex flex-row gap-7 py-4 px-7">
              <li>
                <span className={`${taps == 'detail' ? 'text-black' : 'text-[#305d94]'} hover:cursor-pointer select-none`} onClick={()=>setTaps('detail')}>Detail</span>
              </li>
              <li>
                <span className={`${ taps == 'attributes'? 'text-black' : 'text-[#305d94]'} hover:cursor-pointer select-none`} onClick={()=>setTaps('attributes')}>Attributes</span>
              </li>
              <li>
                <span className={`${taps == 'reviews' ? 'text-black' : 'text-[#305d94]'} hover:cursor-pointer select-none`} onClick={()=>setTaps('reviews')}>Reviews(0)</span>
              </li>
            </ul>
            <div className="p-7">
              <div className={`${taps == "detail" ? "block" : "hidden"}`}>
                <article className="text-gray-500">
                  <strong className="text-black">Description</strong>
                  <br/><br/>
                  <p>Product Description:</p>
                  <p>Product Type: 916 Gold Intertwined Circles Bracelet</p>
                  <p>Model: 97929-01-06</p>
                  <p>Gold Weight: approx: 5g</p>
                  <p>Size: 20cm</p>
                  <p>Condition: Brand New</p>
                  <br/><br/>
                  <p>Package Contents:</p>
                  <p>1x916 Fold Intertwined Circled Bracelet</p>
                  <p>1 x Gift Box</p>
                  <p>1 x Invoice</p>
                  <br/><br/>
                  <p>Delivery/Self-collection</p>
                  <p>- Please check your method of delivery before purchase.</p>
                  <p>- If you wish to Self-Collection, please let us know your preferred Maxi-Cash outlet to collect your order. Please do not proceed straight to the outlet.</p>
                  <p>- We will notify you via chat/email once the item is ready for courier delivery or self-collection.</p>
                  <br/><br/>
                  <p>Notes: Actual product color may vary due to studio lighting conditions or variances in device screen calibration.</p>
                </article>
              </div>
              <div className={`${taps == "attributes" ? "block" : "hidden"}`}>
                <table class="table-auto w-full">
                  <tbody className="border-t">
                    <tr className="border-b">
                      <td className="p-3 ">Gold Type</td>
                      <td className="p-3 text-gray-500">916 Gold</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 ">Product Condition</td>
                      <td className="p-3 text-gray-500">Brand new</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 ">SKU</td>
                      <td className="p-3 text-gray-500">97929-01-06</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={`${taps == "reviews" ? "block" : "hidden"}`}>
                <div className="text-[#0c5460] p-7 border border-[#bee5eb] bg-[#f6fbfc] rounded-[4px] text-sm">
                  <span className="text-3xl inline-block align-middle mr-4"><FaInfoCircle/></span><p className="inline-block align-middle"><span className="font-semibold">Info</span> There are no reviews</p>
                </div>
                <div className="flex items-center gap-4 my-4 text-sm">
                  <MoreBtn text="Add your review"/>
                  <a href="#" className="text-[#305d94] hover:underline select-none">View more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* relate product section */}
        <div className="px-7">
          <h1 className="text-2xl font-semibold">Related Products</h1>
          <ProductSlide data={productData} slidePerView={4} url=''/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
