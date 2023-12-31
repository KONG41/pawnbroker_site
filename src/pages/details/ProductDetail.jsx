import React, {useState, useEffect} from "react";
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
import { useLocation } from 'react-router-dom';
import {productLists} from '../../assets/data';
import {Link, useParams} from 'react-router-dom';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './ProductDetailStyle.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from "lightgallery/plugins/video";
import {getWindowDimensions} from "../../helper/ScreenSize.js";
import { useStateContext } from "../../helper/ContextProvider";
const FB_URL = import.meta.env.VITE_FACEBOOK;
const WA_URL = import.meta.env.VITE_WHATAPP;
const WC_URL = import.meta.env.VITE_WECHAT;
const LINE_URL = import.meta.env.VITE_LINE;
const MS_URL = import.meta.env.VITE_MESSENGER;
const TW_URL = import.meta.env.VITE_TWITTER;

const ProductDetail = () => {
  const {windowDimensions} = useStateContext()
  const location = useLocation();
  const [productState,setProductState] = useState(location.state);
  const {id,cate,search} = useParams();
  const [curIndex,setCurIndex] = useState(id - 1);
  const [isMobile, setIsMobile] = useState(false)
  const products = productLists.filter((x)=>{
    return(
      cate == 'all' ? x.category.includes('') : x.category.includes(cate)
    )
  });
  const searchProducts = products.filter((x) => {
    return (
      search == 'search' ? x.title.includes('') : x.title.includes(search)
    );
  });
  const [detail,setDetail] = useState(searchProducts[curIndex]);
  const [description, setDescription] = useState(detail.description);
  const [rate,setRate] = useState(detail.rate);
  const [attributes,setAttributes] = useState(detail.attributes);
  const [starRated,setStarRated] = useState([]);
  const [starTotal,setStarTotal] = useState([]);
  const [taps, setTaps] = useState('detail');
  const [openImg,setOpenImg] = useState(false);
  for (let i = 0; i < rate; i++) {
      starRated.push(
        <FaStar className="mr-1 inline-block align-middle text-yellow-300" key={`rate-${i}`}/>
      );
  }

  for(let i = 0; i < 5-rate; i++){
    starTotal.push(
      <FaStar className="mr-1 inline-block align-middle" key={`unrate-${i}`}/>
    )
  }

  useEffect(() => {
    if(rate > 5){
      setRate(5)
    }else if (rate < 0){
      setRate(0)
    }
  }, [])
  
  const onInit = (detail) => {
    console.log("detail");
  };

  useEffect(() => {
    if (windowDimensions.width < 768) {
      setIsMobile(true)
    } else{setIsMobile(false)}
  }, [windowDimensions]);

  return (
    <div className="w-full bg-[#f7f7f7]">
      {/* menu section */}
      <div className="w-[65%] max-xl:w-[90%] m-auto py-14 text-[#305d94] flex flex-row gap-20 max-md:gap-10 max-lg:text-sm">
        <Link to="/shop"><MdOutlineArrowBackIosNew className="inline-block align-middle"/><span className="inline-block align-middle pl-2">Back to shop</span></Link>
        <span>
          <Link to="/">Home</Link><span className="px-2">/</span><Link to="/shop">Shop</Link><span className="px-2">/</span><Link to="/shop" className="capitalize">{detail.category}</Link>
        </span>
      </div>
      <div className="w-[65%] max-xl:w-[90%] m-auto bg-[#e5e5e5] max-md:w-full">
        {/* detail section */}
        <div className="w-full px-7 max-md:py-7">
          <div className="flex flex-row gap-11 mb-7 max-md:flex-col">
            <div className="flex flex-row bg-white p-7 w-[70%] max-md:w-full max-md:flex-col gap-4">
              <LightGallery
                plugins={[lgZoom, lgVideo, lgThumbnail]}
                onInit={onInit}
                speed={700}
                mode="lg-slide"
              >
                {
                  detail.img.map((item,index)=>(
                    index == 0 ?
                    <a 
                      key={`product_00${index}`}
                      href={item}
                      className="gallery-item"
                      // data-src={item}
                      data-sub-html={`<div><h4>${detail.title}</h4><p>SGD ${detail.price}</p></div>`}
                    >
                      <img  className="img-responsive w-[550px]"  src={item} alt="img" />
                    </a>
                    : 
                    <a 
                      key={`product_00${index}`}
                      href={item}
                      className="gallery-item"
                      // data-src={item}
                      data-sub-html={`<div><h4>${detail.title}</h4><p>SGD ${detail.price}</p></div>`}
                    >
                      <img  className="img-responsive w-[90px] inline-block mr-3"  src={item} alt="img" />
                    </a>
  
                  ))
                }
              </LightGallery>

              <div className="w-full">
                <p className="font-bold">{detail.title}</p>
                <h1 className="font-bold text-2xl text-[#00A0AF] mt-7 mb-3">SGD {detail.price}</h1>
                <p className="text-gray-400 text-sm">
                {starRated}
                {starTotal}
                <span   className="mr-1 inline-block align-middle">({rate})</span>
                </p>
                <p className="border-b my-7" />
                <span className="flex items-center my-7">
                  <label className="mr-4">
                    Quantity<span className="text-sm text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    defaultValue = {1}
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
                  <a href={FB_URL}  target="_blank" className="bg-[#4267B2] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#4267b2af] hover:-translate-y-[5px] duration-300">
                    <img src={i_facebook} className="w-[16px] h-[16px] mt-[8px] ml-[8px]"/>
                  </a>
                  <a href={WA_URL}  target="_blank" className="bg-[#25d366] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#25d3659a] hover:-translate-y-[5px] duration-300">
                    <img src={i_whatsapp}className="w-[16px] h-[16px] mt-[8px] ml-[8px]" />
                  </a>
                  <a href={WC_URL} target="_blank" className="bg-[#4EC034] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#4ec034ad] hover:-translate-y-[5px] duration-300" >
                    <img src={i_wechat} className="w-[16px] h-[16px] mt-[8px] ml-[8px]"/>
                  </a>
                  <a href={LINE_URL}  target="_blank" className="bg-[#00c300] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#00c30096] hover:-translate-y-[5px] duration-300" >
                    <img src={i_line} className="w-[16px] h-[16px] mt-[8px] ml-[8px]" />
                  </a>
                  <a href={MS_URL}  target="_blank" className="bg-[#448AFF] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#4489ffa2] hover:-translate-y-[5px] duration-300" >
                    <img src={i_messenger}  className="w-[16px] h-[16px] mt-[8px] ml-[8px]" />
                  </a>
                  <a href={TW_URL}   target="_blank" className="bg-[#55acee] w-[32px] h-[32px] rounded-full mr-2 inline-block align-middle hover:bg-[#55acee98] hover:-translate-y-[5px] duration-300">
                    <img src={i_twitter}  className="w-[16px] h-[16px] mt-[8px] ml-[8px]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-7 w-[30%] max-md:w-full">
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
                  <span dangerouslySetInnerHTML={{ __html: description }}></span>
                </article>
              </div>

              <div className={`${taps == "attributes" ? "block" : "hidden"}`}>
                <table className="table-auto w-full">
                  <tbody className="border-t capitalize">
                    {
                      attributes &&
                      attributes.map((item,index)=>(
                        <tr className="border-b" key={`attribute-${index}`} >
                        <td className="p-3 ">{item.title}</td>
                        <td className="p-3 text-gray-500">{item.desc}</td>
                      </tr>
                      ))
                    }
                    
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
          <h1 className="text-2xl font-semibold float-left">Related Products</h1>
          <div className="max-xl:w-[90%] max-md:w-[330px] m-auto">
            <ProductSlide data={productLists} slidePerView={isMobile ? 1 : 4}  reload={true}/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
