import React ,{useRef,useEffect} from "react"
import Header from "./widget/Header";
import Footer from "./widget/Footer";
import { Outlet } from "react-router-dom";
const Layout = (props) => {

  const homeRef = useRef(null);
  
  return (
    <>
        <Header></Header>
          <Outlet context={[homeRef]}></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Layout