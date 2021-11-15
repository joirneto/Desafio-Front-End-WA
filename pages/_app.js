import React from "react";
import '../css/styles.css'
import Layout from '../components/layout'

const MyApp = ({Component, pageProps}) =>(
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp