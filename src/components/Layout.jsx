import React ,{useRef,useEffect} from "react"
import Header from "./widget/Header";
import Footer from "./widget/Footer";
import { Outlet,useLocation } from "react-router-dom";
const Layout = (props) => {
  const homeRef = useRef(null);
  const location = useLocation();
  
  

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: 'auto'
    })
  },[location])

  return (
    <div className="relative">
        <Header></Header>
          <Outlet context={[homeRef]}></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout