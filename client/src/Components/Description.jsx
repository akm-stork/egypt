import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import img from '../assets/1.jpeg'
import { t } from 'i18next';
gsap.registerPlugin(ScrollTrigger);
const Description = () => {
  useEffect(() => {
    gsap.from('.desc-t', {scrollTrigger: {
      trigger: '.desc-t',
      toggleActions: 'play none none reverse',
      start: 'top 70%',
    }, opacity: 0, x: -200})
    // gsap.from('.sld-image', {scrollTrigger: {
    //   trigger: '.sld-image',
    //   toggleActions: 'play none none reverse',
    //   start: 'top 70%',
    // }, opacity: 0, x: -200, delay: 1})
    gsap.from('.sld-border', {scrollTrigger: {
      trigger: '.sld-border',
      toggleActions: 'play none none reverse',
      start: 'top 70%',
    }, height: 0, width: 0, duration: 1, ease: 'back.inOut'})
    gsap.from(['.desc-tt', '.desc-p'], {scrollTrigger: {
      trigger: '.desc-tt',
      toggleActions: 'play none none reverse',
      start: 'top 80%',
    }, opacity: 0, y: 200})
  }, [])
  return (
    <div className="h-fit bg-white w-full flex modon-desc overflow-hidden">
      <section className="w-1/2 h-[110vh] flex flex-col justify-center items-center desc1">
        <h1 className="bold text-primary-color text-4xl m-5 text-center desc-t">{t("book")}</h1>
        <div className="sc-desc w-full flex justify-around items-center">
          <h1 className="bold text-primary-color text-2xl m-3 desc-tt">{t("mission")}</h1>
          <h1 className="bold text-primary-color text-2xl m-3 desc-tt">{t("vision")}</h1>
        </div>
        <div className="sc-desc w-full flex justify-around items-center">
          <h1 className="regular text-primary-color text-lg mx-10 desc-p w-1/2 h-full">{t("Tour")}</h1>
          <h1 className="regular text-primary-color text-lg mx-10 desc-p w-1/2 h-full">{t("world")}</h1>
        </div>
      </section>
      <section className="w-1/2 md:h-[110vh] hidden justify-center items-center relative desc2 md:flex h-0">
        <div className="sld-image h-[80%] w-1/2 relative rounded-t-full"></div>
        <div className="sld-border border h-[80%] w-[80%] rounded-t-full absolute left-16 top-10 border-primary-multiply-color">
          <img src={img} alt="" className='h-full w-[90%] rounded-t-full relative right-10 top-10' />
        </div>
      </section>
    </div>
  )
}

export default Description