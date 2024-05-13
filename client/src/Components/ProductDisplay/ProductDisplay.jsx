import React, { useLayoutEffect, useRef, useState } from "react";
import "./ProductDisplay.css";
import { Star, StarOff, X } from "lucide-react";
import emailjs from "@emailjs/browser"
import {Link} from 'react-router-dom';
import { t } from "i18next";


const ProductDisplay = (props) => {
  const [open, setOpen] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_nej6dxf","template_7kc7bks",form.current, "yF9X9hXsV87yTNt_E").then((result) => {
      console.log(result.text);
      console.log("message sent");
      setOpen(false)
    },
    (error) => {
      console.log(error.text);
    }
  );
};
const handleClose = () => {
  setOpen(false)
}
const handleOpen = () => {
  setOpen(true)
}
  const {product} = props;
  
  const goBack = () => {
    window.history.back()
  }
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="flex flex-col justify-center items-center bg-white relative">
     {product.category === 'tour-guide' && open === true ? <div className="absolute bg-primary-color h-full w-full">
      <form className="flex flex-col gap-5 justify-center items-center h-full" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name" className="text-white text-3xl bold mb-2">Name</label>
        <input type="text" className="p-2 rounded-2xl w-1/2" name="user_name" />
        <label htmlFor="number" className="text-white text-3xl bold mb-2">Phone Number</label>
        <input type="number" className="p-2 rounded-2xl w-1/2"  name="user_number"/>
        <label htmlFor="email" className="text-white text-3xl bold mb-2">E-Mail</label>
        <input type="email" className="p-2 rounded-2xl w-1/2" name="user_email"/>
        <label htmlFor="date" className="text-white text-3xl bold mb-2">Date of Tour</label>
        <input type="date" className="p-2 rounded-2xl w-1/2" name="tour_date"/>
        <input type="text" className="p-2 rounded-2xl w-1/2" name="tour_name" value={product.name} hidden/>
        <input type="number" className="p-2 rounded-2xl w-1/2" name="tour_price" value={product.new_price} hidden/>
        <button className="p-2 bg-primary-multiply-color rounded-2xl text-white w-1/2 mt-2">Submit</button>
        <div className="absolute top-10 right-10 cursor-pointer" onClick={handleClose}>
          <X stroke="white" />
        </div>
      </form>
     </div> : ''}
      <div className={`flex ${product.category === 'place' ? 'flex-col h-fit' : 'h-screen'} justify-center items-center product-display`}>
      <div className="flex justify-center items-center w-3/4 gap-4 m-5 product-image">
        {/* {product.category === 'place' ? <div className="flex flex-col h-[75%] justify-between small-images">
          <img src={product.image} className="box w-28 h-34 rounded-2xl shadow-2xl" alt="" />
          <img src={product.image} className="box w-28 h-34 rounded-2xl shadow-2xl" alt="" />
          <img src={product.image} className="box w-28 h-34 rounded-2xl shadow-2xl" alt="" />
          <img src={product.image} className="box w-28 h-34 rounded-2xl shadow-2xl" alt="" />
        </div> : ''} */}
        <div className="h-[75%] flex justify-center items-center shadow-2xl rounded-2xl w-3/4 product-big-image">
          <img className="h-full rounded-2xl" src={product.image} alt="img" />
        </div>
      </div>
      <div className="flex flex-col w-3/4 justify-center items-center m-5 gap-5 product-data">
        <h1 className="text-5xl text-primary-multiply-color bold">{t(`${product.name}`)}</h1>
        <div className="rating flex w-full justify-center items-center gap-2">
        <Star color="black" fill="#9F2B68fb" size={20}/>
            <Star color="black" fill="#9F2B68fb"size={20}/>
            <Star color="black" fill="#9F2B68fb"size={20}/>
            <Star color="black" fill="#9F2B68fb"size={20}/>
            <StarOff color="black"size={20} fill="#9F2B68fb"/>
            <div className="bold text-primary-multiply-color">(122)</div>
        </div>
        <h1 className="text-primary-color regular text-center data-parag">{t("desc-desc")}</h1>
        {product.category === 'place' ? '' : <div className="flex w-full justify-around items-center">
        <h1 className="bold text-primary-multiply-color text-3xl">${product.new_price}</h1>
        {localStorage.getItem('auth-token') ? <button className="p-2 bg-primary-multiply-color rounded-2xl text-white" onClick={handleOpen}>Book Tour</button> : <h1 className="flex gap-3 justify-center items-center regular">{t("Needd")}
          <Link to="/login" className="p-2 bg-primary-multiply-color text-white rounded-2xl regular">{t("login")}</Link></h1>}
        </div> }
      </div>
      {product.category === 'place' ? <div className="w-1/2"><iframe width="100%" title="map" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div> : ''}
      </div>
      <button className="m-5 p-2 rounded bg-primary-color text-white" onClick={goBack}>{t("previous")}</button>
    </div>
  );
};

export default ProductDisplay;
