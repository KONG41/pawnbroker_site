import React from 'react'
import {Link} from 'react-router-dom'
const MoreBtn = ({text,url}) => {
  return (
    <Link to={url} className="px-9 py-3 select-none rounded-md w-fit text-white text-sm font-semibold bg-blue-900 hover:cursor-pointer">{text}</Link>
  )
}

export default MoreBtn