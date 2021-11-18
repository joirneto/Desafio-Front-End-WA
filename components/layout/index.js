import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({children}) =>(
  <>
  <Navbar/>
  <Header/>
    {children}
  <Footer/>
  </>
)

export default Layout