import { useTranslation } from 'react-i18next';
// import FilterComp from '../FilterComp';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import headerImg from '../../assets/headerr.png'
import logo from '../../assets/logo.png'
import "./Hero.css"

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
   useEffect(() => {
     gsap.from('.mre', {opacity: 0, y: 100});
     gsap.from('.mi', {opacity: 0, delay: .4});
   }, [])
  const { t } = useTranslation();

  return (
    <div className='header-container relative h-screen flex justify-center pb-6 items-center flex-col regular text-white'>
      <img src={headerImg} className='video absolute h-[82%] w-screen top-0 left-0 right-0 bottom-0 opacity-100 -z-10 object-cover rounded-b-[70px]' alt=''></img>
      <div className="overlay absolute h-[82%] w-full top-0 left-0 right-0 bottom-0 object-cover  bg-black/30 rounded-b-[70px]"></div>
      <div className="overlay absolute h-full w-full top-0 left-0 right-0 bottom-0 object-cover bg-white -z-30"></div>
       {/* <div className="absolute left-0 top-0 hidden sm:flex">
          <img src={bellaTri} alt="" width={405} />
        </div> */}
      <div className="paralax relative transitionnn flex w-full flex-col h-1/2 justify-center items-center sm:items-end lg:items-center text-white">
      {/* <img src={bellaLogo} alt="" width={350} className='mre mx-16' /> */}
      <img src={logo} alt="" />
      <h1 className='bold text-6xl md:text-7xl text-primary-multiply-color mre m-auto'>{t("eye")}</h1>
      <div className="btns relative flex m-auto gap-3 justify-center items-center text-center mi">
        <input type="text" className='border border-primary-multiply-color rounded-2xl px-20 p-2 flex justify-start items-center' placeholder={t("search-for")}/>
      </div>
      <h1 className='bold md:text-3xl text-2xl text-primary-multiply-color mre m-auto'>{t("discover")}</h1>
      </div>
      {/* <div className="filter-web flex justify-center items-center absolute bottom-0 w-full mi">
       <FilterComp />
      </div> */}
      {/* <div className="filter-mob flex justify-center items-center w-full">
       <FilterMob />
      </div> */}
      {/* TODO */}
    </div>
  )
}

export default Hero