import React from 'react'
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
const Home = () => {
  const hero = [Hero1,Hero2,Hero3,Hero4];
  const promoteData = [
    {
      title:'Citigems', 
      desc:'Discover brand new 916 & 999 pure gold and contemporary fine jewellery for modern women. Get the best 916 & 999 gold prices with Citigems, available at Maxi-Cash.',
      url: '/citigems',
      img: 'https://maxi-cash.com/wp-content/uploads/2021/08/Maxi-Cash-SG_New-Gold-Jewellery.png'
    },
    {
      title: 'LuxeSTYLE',
      desc: 'Stay in trend with our highly-coveted timepieces, bags, and branded fine jewellery. Be at the forefront in luxury style with Maxi-Cash, Singapore’s most trusted preloved luxury goods retailer',
      url: '/luxestyle',
      img: 'https://maxi-cash.com/wp-content/uploads/2021/07/Maxi-Cash-SG_LuxeSTYLE-Preloved-Luxury-Timepieces.png'
    }
  ]
  const blockRowData = [
    {
      title: 'How Pawning Works',
      img: 'https://maxi-cash.com/wp-content/uploads/2021/08/Maxi-Cash-SG_Leading-Pawnshop-Islandwide.png'
    },
    {
      title: 'Maxi-Cash App',
      img: 'https://maxi-cash.com/wp-content/uploads/2021/09/08_WebUpdate_MCapp.png'
    },
    {
      title: 'Sell or Consign',
      img: 'https://maxi-cash.com/wp-content/uploads/2021/09/Consign-HomePg-V3.png'
    }
  ]

  return (
    <div className="w-full bg-gray-50">
        <HeroSlide  slideShow={hero} />
        <div className="w-[650px] m-auto text-center py-16">
          <h1 className="text-4xl uppercase pb-4">Shop.Maxi-Cash.com</h1>
          <p className="text-2xl pb-4">Shop at Maxi-Cash Online, Singapore's trusted new gold jeweller and preloved luxury goods retailer</p>
          <p className="">Enjoy Singapore's best gold rate with Maxi-Cash Everyday Low Gold Price.</p>
        </div>
        <div className="w-[60%] m-auto mb-40">
          <ProductSlide data={productLists} slidePerView={3} autoplay={true} url="/product_detail"/>
        </div>
        <div className="w-[70%] m-auto mb-20">
          <PostPromote revers = {false} data = {promoteData[0]}/>
        </div>
        <div className="w-[70%] m-auto pb-20">
          <PostPromote revers = {true} data = {promoteData[1]}/>
        </div>
        <div className="w-[70%] m-auto">
          <BlockRow data = {blockRowData}/>
        </div>
        <div className="w-[70%] m-auto mt-20">
          <Subscribe />
        </div>
    </div>
  )
}

export default Home