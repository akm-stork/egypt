import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import {t} from 'i18next'
import loginHead from '../assets/login-head.png'
import TitleDivider from "../Components/TitleDivider";
import { Facebook, MailCheckIcon } from "lucide-react";
import googleIcon from '../assets/search.png'
import appleIcon from '../assets/apple-logo-svgrepo-com.svg'
import { Link } from "react-router-dom";
const LoginSignup = () => {
  const { i18n } = useTranslation();

  const userLanguage = localStorage.getItem('userLanguage') || 'en';
  useEffect(() => {
    // Get the user's preferred language or use a default language
    // Set the initial language and direction
    i18n.changeLanguage(userLanguage);
    document.documentElement.dir = userLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = userLanguage;

  }, [i18n, userLanguage]);
  
  return (
    <div>
      <div className="ob h-40 w-full bg-primary-multiply-color"></div>
    <div className="loginsignup w-1/2 h-screen bg-white pt-[100px] regular">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="text-black bold text-4xl w-3/4 text-center">{t("Nature")}</h1>
        <p className="text-gray-400 text-md w-3/4 text-center">{t("desccc")}</p>
      <button className="bg-black text-white p-2 hover:bg-white hover:text-black transition-all duration-300 rounded-2xl w-3/4 hover:border hover:border-black flex gap-2 justify-center items-center">{t("sign-G")}<img src={googleIcon} className="h-5" alt="" /></button>
      <button className="bg-black text-white p-2 hover:bg-white hover:text-black transition-all duration-300 rounded-2xl w-3/4 hover:border hover:border-black flex gap-2 justify-center items-center">{t("sign-a")} <img src={appleIcon} className="h-5" alt="" /></button>
      <button className="bg-black text-white p-2 hover:bg-white hover:text-black transition-all duration-300 rounded-2xl w-3/4 hover:border hover:border-black flex gap-2 justify-center items-center">{t("sign-f")} <Facebook /></button>
      <div className="flex gap-4 relative right-2">
      <TitleDivider name=""/>
      <TitleDivider name="Or"/>
      </div>
      <Link to="/signup" className="w-full flex justify-center items-center">
        <button className="bg-white text-black p-2 hover:bg-black hover:text-white transition-all duration-300 rounded-2xl w-3/4 border-primary-color border flex gap-2 justify-center items-center">{t("sign-e")} <MailCheckIcon /></button>
        </Link>
        <p className="text-gray-400 text-md w-3/4 text-center">{t("Agree")}</p>
      </div>
    </div>
    <div className={`absolute ${userLanguage === 'en' ?'right-0' : 'left-0'} top-[10rem] w-1/2 h-full`}>
      <img src={loginHead} alt="" className="h-full w-full" />
    </div>
    </div>
  );
};

export default LoginSignup;
