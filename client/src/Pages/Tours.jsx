import React, {useEffect, useState} from 'react'
import { Star, StarOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Tours = () => {
  const [allproducts, setAllproducts] = useState([]);
  const fetchInfo = () => { 
  fetch('http://localhost:4000/allproducts') 
          .then((res) => res.json()) 
          .then((data) => setAllproducts(data))
  }
  const {t} = useTranslation();
  useEffect(() => {
    fetchInfo();
  }, [])
  return (
    <div>
      <div className="ob h-40 w-full bg-primary-multiply-color"></div>
      <div className="h-fit w-full flex flex-col justify-center items-center py-10">
        <h1 className='bold text-primary-multiply-color text-5xl'>{t("tour-guides")}</h1>
        <div className="flex flex-wrap gap-5 justify-center items-center py-10">
       {allproducts.map((tour) => {
        if(tour.category === "tour-guide"){
         return <div key={tour.id} className='flex flex-col justify-center items-center w-1/3'>
          <Link to={`/product/${tour.id}`}><img src={tour.image} className='w-80 rounded-2xl' alt="" /></Link>
           <h1 className='text-3xl text-primary-color bold pt-3'>{t(`${tour.name}`)}</h1>
           <div className="rating flex w-full justify-center items-center gap-2 py-3">
        <Star color="black" fill="#9F2B68fb" size={20}/>
            <Star color="black" fill="#9F2B68fb"size={20}/>
            <Star color="black" fill="#9F2B68fb"size={20}/>
            <Star color="black" fill="#9F2B68fb"size={20}/>
            <StarOff color="black"size={20} fill="#9F2B68fb"/>
            <div className="bold text-primary-multiply-color">(122)</div>
        </div>
           <h1 className='w-1/2 text-center regular'>{t("desc-desc")}</h1>
          </div>
          } else {
            return null;
          }
          })}
        </div>
      </div>
    </div>
  )
}

export default Tours