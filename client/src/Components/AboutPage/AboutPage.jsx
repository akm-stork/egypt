import { useLayoutEffect } from "react";
import bellaAbout from '../../assets/headerimg.png'
// import FixedImage from "./sections/FixedImage";
import { HandHeartIcon } from "lucide-react"; 
import AboutCard from "./AboutCard";
import { t } from "i18next";
const AboutPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

  return (
    <div className="bg-white w-full h-fit flex flex-col justify-center items-center relative text-black">
      <div className="ob h-40 w-full bg-primary-multiply-color"></div>
    <div className="constructs flex w-full">
      <div className="construct1 flex flex-col justify-center items-center">
         <div className="flex flex-wrap justify-center gap-5 my-20 animate-fade-down animate-duration-1000 animate-delay-500">
          <div className="flex flex-col gap-5 mb-10 justify-center items-center">
          <h1 className="md:text-5xl text-3xl text-center regular text-primary-multiply-color">{t("overview")}</h1>
          <div className="overview-p md:text-lg text-md w-3/4 text-center light text-black">{t("Visit")}</div>
          </div>
         <div className="videos relative flex flex-wrap justify-center items-center mx-5">
            <div className="flex md:w-1/2 w-3/4 justify-center items-center">
          <img src={bellaAbout} alt="BELLA" className="rounded-2xl shadow-xl shadow-primary-multiply-color" /> 
            </div>
          <div className="flex flex-col md:w-1/2 w-full justify-center items-start light text-primary-color">
          <div className="overview-p2 m-3 regular md:text-3xl text-xl text-center">{t("as-team")}</div>
          <div className="overview-d md:text-md text-sm text-center w-full">{t("users-egypt")}</div> 
          </div> 
          </div>
          <div className="about-cards flex flex-wrap gap-10 justify-center items-center h-70 my-10 w-full m-5 text-black">
          <AboutCard icon={HandHeartIcon} title={t("Widee")} description={t("tours")} />
          <AboutCard icon={HandHeartIcon} title={t("selection")} description={t("select-guide")} />
          <AboutCard icon={HandHeartIcon} title={t("perfection")} description={t("priority")} />
          <AboutCard icon={HandHeartIcon} title={t("building-future")} description={t("Futuree")}/>
          </div>
         </div>
         </div>
         </div>

         </div>
        
  )
}

export default AboutPage