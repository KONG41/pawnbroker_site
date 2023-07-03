import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import SimplePromote from '../../components/promote_section/SimplePromote'
import PostPromote from '../../components/promote_section/PostPromote'
import {samplePromoteData, productLists} from '../../assets/data'
import ProductSlide from '../../components/product_section/ProductSlide'
import { useStateContext } from '../../helper/ContextProvider'
const PromoteDetail = () => {
    const {windowDimensions} = useStateContext()
    const {page} = useParams()
    const [isMobile, setIsMobile] = useState(false)
    const data = samplePromoteData.filter((x)=>{
        return(
        x.page.includes(page)
    )});
    useEffect(() => {
        if (windowDimensions.width < 768) {
        setIsMobile(true)
        } else{setIsMobile(false)}
    }, [windowDimensions]);
  return (
    <>
        <div className="w-full">
            <SimplePromote data={data[0]}/>
        </div>
        <div className="w-[65%] max-md:w-[90%] m-auto py-14">
            <h1 className="uppercase text-center text-3xl">shop.maxi-cash.com</h1>
            <p className="text-center pt-5 w-[60%] max-md:w-full m-auto">Get ahead of the style curve with authentic preloved luxury timepieces, designer bags and branded jewellery.</p>
            <div className="w-full max-xl:w-[95%] max-md:w-[300px] m-auto mb-40">
                <ProductSlide data={productLists} slidePerView={isMobile ? 1 : 3} autoplay={false} />
            </div>
        </div>
        {
            data[0].article.map((item,index)=>(
                index % 2 ?
                <div className="w-[70%] max-2xl:w-[95%] m-auto mb-20">
                    <PostPromote revers = {true} data = {item}/>
                </div>
                : 
                <div className="w-[70%] max-2xl:w-[95%] m-auto mb-20">
                    <PostPromote revers = {false} data = {item}/>
                </div>
            ))
        }
    </>
   
  )
}

export default PromoteDetail