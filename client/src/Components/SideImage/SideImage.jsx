// import React from 'react'

import TitleDivider from "../TitleDivider"
import instagram from "../../assets/alexander-shatov-71qk8odibko-unsplash-1.webp"
import { ArrowLeftRightIcon, EarthIcon, Hand, PackagePlus, PanelTopOpenIcon } from "lucide-react"
import './SideImage.css'
const SideImage = () => {
  return (
    <div className='last-page w-full h-fit bg-white text-black'>
      <section className='last-section flex justify-end'>
       <div className="first-text">
         <TitleDivider name="A DIGITAL EXPERIENCE"/>
         <h1 className="bigger-h1 bold text-slate-500" style={{fontSize: '3rem'}}>ONE PAGE FOR ALL <span style={{color: '#9F2B68fb'}}>BELLA SERVICES</span></h1>
         <p className="mb-10 mt-3 regular text-primary-multiply-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam fugiat aliquam unde. Facilis, debitis perferendis sint tenetur suscipit praesentium? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, suscipit?</p>
        </div> 
         <div className="icons-last regular text-primary-color">
          <div className="ab flex flex-col gap-4">
           <div className="icon flex gap-2 "><EarthIcon /> <h1>Accessory Updates</h1></div>
           <div className="icon flex gap-2"><PanelTopOpenIcon /><h1>Enquiring About Prices</h1></div>
           <div className="icon flex gap-2"><PackagePlus /> <h1>Requesting Special Part</h1></div>
           <div className="icon flex gap-2 "><ArrowLeftRightIcon /><h1>Transfers</h1></div>
           <div className="icon flex gap-2"><Hand /> <h1>Part & Accessories Services</h1></div>
         </div>
         </div>
         <div className="mt-5 mb-2">
         <TitleDivider name="Go to Instagram" />
         </div>
         <div className="store-links">
          <a className="store-link clickable" href="/"><img src={instagram} className="h-20 w-34 rounded-2xl" alt=""/></a>
         </div>
      </section>
      <section className='last-section2 h-screen'>
          <div className="image-last h-full w-full"></div>
      </section>
    </div>
  )
}

export default SideImage