import React, { useContext, useRef, useState,useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { ShopContext } from '../../Context/ShopContext'
import { Facebook, Instagram, Phone } from 'lucide-react'
import Cart from '../Cart'
import LangSwitcher from '../LangSwitcher'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const {t} = useTranslation();
  const {getTotalCartItems} = useContext(ShopContext);

  const menuRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const menuTrig = document.querySelector(".menu-trig");
    const logo = document.querySelector('.logo');
    const ham = document.querySelector('.ham');
    const navInner = document.querySelector('.navbarInner');
    const navList = document.querySelector('.nav-list');
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');
    if(window.innerWidth < 1200) {
      navList?.classList.add('hidden');
    } else {
      navList?.classList.remove('hidden');
    }
    ham?.addEventListener('click', ()=> {
    if(open===false) {
      setOpen(true)
      navList?.classList.add('h-screen');
      navList?.classList.remove('hidden');
      navList?.classList.add('flex-imp');
      line1.classList.add('bg-white')
      line2.classList.add('bg-white')
      line3.classList.add('bg-white')
    } else {
      line1.classList.remove('bg-white')
      line2.classList.remove('bg-white')
      line3.classList.remove('bg-white')
      navList?.classList.remove('h-screen');
      navList?.classList.add('hidden');
      navList?.classList.remove('flex-imp');
      setOpen(false)
    }
    })
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        navInner?.classList.add('hidden');
        navInner?.classList.remove('h-16');
        navInner?.classList.add('h-0');
        navbar?.classList.remove('h-36');
        navbar?.classList.add('h-16')
        navbar?.classList.add("bg-primary-multiply-color");
        // navbar?.classList.remove("text-white");
        // navbar?.classList.add("text-black");
        navbar?.classList.add("box-shadow-nav");
        menuTrig?.classList.add("snd-color-imp");
        logo?.classList.remove('h-14');
        logo?.classList.add('h-12');
      } else {
        navInner?.classList.remove('hidden');
        navInner?.classList.remove('h-0');
        navInner?.classList.add('h-16')
        navbar?.classList.remove('h-16')
        navbar?.classList.add('h-36');
        logo?.classList.remove('h-12');
        logo?.classList.add('h-14');
        menuTrig?.classList.remove("snd-color-imp");
        navbar?.classList.remove("box-shadow-nav");
        navbar?.classList.remove("bg-primary-multiply-color");
        // navbar?.classList.remove("text-black");
        // navbar?.classList.add("text-white");
      }
    });
  })
  return (
    <div id='nav' className='navbar flex flex-col justify-center text-white h-36 pr-6 pl-6 fixed top-0 w-full light z-30'>
       <div className="navbarInner flex w-full justify-between items-center h-16 border-b-[0.1px] border-black">
        <h1 className="mx-3">{t("email-e")}</h1>
        <div className="social-items flex justify-around items-center cursor-pointer w-[20%]">
          <a href="/"><Instagram height={20} /></a>
          <a href="/"><Facebook height={20} /></a>
          <div className="h-8 w-0.5 m-3 bg-gray-400"></div>
          <h1 className="flex justify-center items-center regular text-xl"><Phone className="mx-1" height={15} width={15} /> +20 128 100 4800</h1>
        </div>
      </div>
      <div className="navMain flex w-full justify-between items-center h-20">
        <div className="logo-cont flex justify-center items-center">
      <Link to='/' className="nav-logo">
        <img src={logo} className='logo h-16 m-1 lg:mx-12 mx-8 cursor-pointer clickable' alt="logo" />
      </Link>
        </div>
        <div className="ham flex-col justify-center items-end gap-2 cursor-pointer hidden z-40">
        <div className="line1 h-0.5 w-5 bg-primary-multiply-color"></div>
        <div className="line2 h-0.5 w-7 bg-primary-multiply-color"></div>
        <div className="line3 h-0.5 w-5 bg-primary-multiply-color"></div>
      </div>
        <div className="nav-list gap-4 w-[90%] items-center justify-around text-sm md[1300px]:flex hidden md:flex-row flex-col md:light regular" ref={menuRef}>
        <a href='/' >{t("home")}</a>
        <a href='/tours'>{t("find")}</a>
        <a href='/hotels'>{t("hotels")}</a>
        <a href='/about' >{t("about")}</a>
        <a href='/contact' >{t("contact")}</a>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>{t("logout")}</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button className='bg-primary-multiply-color text-white p-2 rounded-xl'>{t("login")}</button></Link>}
      <LangSwitcher />
      <div className="cart flex justify-center items-center clickable h-20 w-20">
        <Link to="/cart"><Cart /></Link>
        {getTotalCartItems()}
      </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
