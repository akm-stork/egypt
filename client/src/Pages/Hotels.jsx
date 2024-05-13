import React from 'react'
import { hotels } from './hotelsdata'
import { LocateFixed } from 'lucide-react'
import { Link } from 'react-router-dom'
const Hotels = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className="ob h-40 w-full bg-primary-multiply-color mb-20"></div>
        <h1 className='bold text-7xl text-primary-color'>Our Hotels</h1>
      <div className="h-fit py-10 w-full flex">
        <div className="left w-[35%] flex flex-col gap-7 h-1/2 justify-start items-center">
          <h1 className='bold text-5xl text-primary-multiply-color w-[90%] text-left'>Explore Hotels</h1>
          <p className='regular text-primary-color text-2xl w-[90%] text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quam ut excepturi, consequuntur ratione aliquam, ducimus sunt commodi corporis doloribus qui quaerat rem vero eaque! Dolor explicabo repellendus facilis labore.</p>
        </div>
        <div className="right w-[65%] flex flex-col gap-4 justify-center items-center">
          {hotels.map((hotel) => (
          <div className="flex gap-5 border border-primary-multiply-color p-7 rounded-2xl w-[90%]">
            <img src={hotel.image} alt="" width={380} />
            <div className="flex flex-col gap-5">
              <Link to={hotel.link}>
              <h1 className='bold text-3xl text-primary-multiply-color hover:text-primary-color'>{hotel.title}</h1>
              </Link>
              <h1 className='flex justify-start items-center underline text-primary-color'><LocateFixed /> {hotel.location}</h1>
              <p>{hotel.description}</p>
              <Link to={hotel.link} className='w-80'>
              <button className='p-2 bg-primary-multiply-color rounded transition-all duration-500 hover:bg-white hover:border hover:border-primary-multiply-color hover:text-primary-multiply-color hover:rounded-2xl'>Book Now</button>
              </Link>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hotels