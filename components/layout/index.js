import React from "react";
import Navbar from "../navbar";
import Header from "../header";
import Footer from "../footer";

const Layout = ({children}) =>(
  <>
  <Navbar/>
  <Header/>
    {children}
  <Footer/>
  </>
)

export default Layout