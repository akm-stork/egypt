import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import { useTranslation } from 'react-i18next'
// import Offers from '../Components/Offers/Offers'
// import InfiniteScroll from '../Components/InfiniteScroll/InfiniteScroll'
import InfiniteScrollText from '../Components/InfiniteScroll/InfiniteScrollText'
import Description from '../Components/Description'
// import SideImage from '../Components/SideImage/SideImage'
import bigImage from '../assets/3.jpeg';
import bigImage2 from '../assets/4.jpeg';
import bigImage3 from '../assets/2.jpeg';
import { useLayoutEffect } from 'react'
const Home = () => {
   const {t} = useTranslation();
    useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });
 

  return (
    <div>
      <Hero/>
      <InfiniteScrollText isLeft />
      <div className="flex flex-col justify-center items-center h-[150vh] w-full gap-2 px-10">
        <h1 className='bold text-3xl text-primary-multiply-color'>{t("Popular")}</h1>
        <div className="flex gap-2 h-full">
        <div className="leftt w-1/2 h-full py-10 flex justify-start">
          <img src={bigImage2} className='h-[71%] rounded-2xl' alt="" />
        </div>
        <div className="rightt w-1/2 h-full py-10 flex flex-col gap-2 justify-start">
          <img src={bigImage3} className='h-[35%] rounded-2xl' alt="" />
          <img src={bigImage} className='h-[35%] rounded-2xl' alt="" />
        </div>
        </div>
      </div>
      <Popular category="place-ancient" title="Ancient-Monuments" />
      {/* <InfiniteScroll isLeft /> */}
      <Description />
      {/* <Offers/> */}
      {/* <NewCollections /> */}
      <Popular category="place-religions" title="Religions" />
      <Popular category="place-beaches" title="Beaches" />
      <Popular category="place-museums" title="Musuems" />
      <Popular category="place-hotels" title="Hotels"/>
      {/* <SideImage /> */}
    </div>
  )
}

export default Home
