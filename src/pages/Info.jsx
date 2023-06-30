import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import Cookie from '../components/info/Cookie'
import Policy from '../components/info/Policy'
import Terms from '../components/info/Terms'
const Info = () => {
    const {page} = useParams()
    console.log(page)
    const Page = (e) => {
        switch (e) {
            case 'cookie':
                return (<Cookie />)
                break;
            case 'terms':
                return(<Terms />)
                break;
            case 'policy':
                return(<Policy />)
                break;
            default:
                break;
        }
    }
  return (
    <div className="w-full">
        <div className="w-full">
        <img src="https://maxi-cash.com/wp-content/uploads/2018/09/30_hero_img.png"/>
        </div>
        <div className="w-[70%] max-lg:w-[90%] m-auto my-16">
        {Page(page)}
        </div>

    </div>
  )
}

export default Info