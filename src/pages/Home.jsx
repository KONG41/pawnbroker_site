import React, {useEffect, useState} from 'react'
import HeroSlide from '../components/hero_section/HeroSlide'
import ProductSlide from '../components/product_section/ProductSlide'
import PostPromote from '../components/promote_section/PostPromote'
import BlockRow from '../components/promote_section/BlockRow'
import Subscribe from '../components/contact_section/Subscribe'
import Hero1 from '../assets/images/hero/10-MC-APP-Web-Banner-2880x1220px-FA-1.png'
import Hero2 from '../assets/images/hero/D15878-MXC_MYS-E-ShopWebBanners-FA-Corporate-Site-1-scaled.jpg'
import Hero3 from '../assets/images/hero/MaxiPAY_webpage_2800x1200_FA-4-scaled.jpg'
import Hero4 from '../assets/images/hero/PAYNOW_V2.png'
import {productLists} from '../assets/data'
import {getWindowDimensions} from "../helper/ScreenSize.js";
import { promoteData, blockRowData } from '../assets/data'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const hero = [Hero1,Hero2,Hero3,Hero4];
  const [isMobile, setIsMobile] = useState(false)
  const { t } = useTranslation()

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions()) 
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    console.log(windowDimensions)
    window.addEventListener('resize', handleResize);
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else{setIsMobile(false)}
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);
  return (
    <div className="w-full bg-gray-50">
        <HeroSlide  slideShow={hero} />
        <div className="w-[650px] max-md:w-[95%] m-auto text-center py-16">
          <h1 className="text-4xl max-md:text-2xl uppercase pb-4">Shop.Maxi-Cash.com</h1>
          <p className="text-2xl max-md:text-lg pb-4">Shop at Maxi-Cash Online, Singapore's trusted new gold jeweller and preloved luxury goods retailer</p>
          <p className="max-md:text-md">Enjoy Singapore's best gold rate with Maxi-Cash Everyday Low Gold Price.</p>
          <p>{t('products')}</p>
        </div>
        <div className="w-[60%] max-xl:w-[95%] max-md:w-[300px] m-auto mb-40">
          <ProductSlide data={productLists} slidePerView={isMobile ? 1 : 3} autoplay={true} />
        </div>
        <div className="w-[70%] max-xl:w-[95%] m-auto mb-20">
          <PostPromote revers = {false} data = {promoteData[0]}/>
        </div>
        <div className="w-[70%] max-xl:w-[95%] m-auto pb-20">
          <PostPromote revers = {true} data = {promoteData[1]}/>
        </div>
        <div className="w-[70%] m-auto max-xl:w-[95%]">
          <BlockRow data = {blockRowData}/>
        </div>
        <div className="w-[70%] max-xl:w-[90%] m-auto mt-20">
          <Subscribe />
        </div>
    </div>
  )
}

export default Home