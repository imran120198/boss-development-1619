import { } from '@chakra-ui/react'
import React from 'react'
import Banner1 from '../Components/Home/Banner1'
import Banner2 from '../Components/Home/Banner2'
import Banner3 from '../Components/Home/Banner3'
import DropDownNavbar from "../Components/Home/DropDownNavbar"
import HomeTabs from '../Components/Home/HomeTabs'
import HotDeal from '../Components/Home/HotDeal'
import Navbar from '../Components/Home/Navbar'
import Threecol from '../Components/Home/Threecol'
// import BasicSlider from './BasicSlider'
import Sidebar from '../Components/Home/Sidebar'
import Banner4 from '../Components/Home/Banner4'
import '../Components/Home/Home.css';
import WelcomeToBeautyProducts from '../Components/Home/WelcomeToBeautyProducts'
// import Footer from './Footer'
function Home() {

  return (
    <div name="home">
        {/* <Navbar/>
        <DropDownNavbar/> */}
        <Sidebar/>
        <Banner1/>
        <HotDeal/>
        <Banner2/>
        <HomeTabs/>
        <Banner3/>
        {/* <Threecol/> */}
        <Banner4/>
        <WelcomeToBeautyProducts/>
        {/* <Footer/> */}

    </div>
  )
}

export default Home
