import React, {useContext, useRef} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { PlusCircle, X} from 'lucide-react';
import {Link} from 'react-router-dom';
import emailjs from "@emailjs/browser"

const Checkout = () => {

  const {products} = useContext(ShopContext);
  const {cartItems,getTotalCartAmount,removeFromCart, getTotalCartAmountWithShipping} = useContext(ShopContext);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_6kz1u3v","template_pwj5znt",form.current, "yF9X9hXsV87yTNt_E").then((result) => {
      console.log(result.text);
      console.log("message sent");
    },
    (error) => {
      console.log(error.text);
    }
  );
};
  return (
    <div>    
      <div className="ob h-40 w-full bg-primary-multiply-color mb-20"></div>
      <div className="my-5 flex justify-center items-center w-full">
        <h1 className='bold text-primary-multiply-color text-3xl md:text-6xl sm:text-4xl'>Checkout Payment</h1>
      </div>
      <div className="h-fit my-20 flex flex-col justify-center items-center">

          <div className="flex flex-wrap gap-5 justify-center items-center my-10">
           <h1 className='regular text-3xl text-primary-multiply-color mx-2'>Choose payment method:</h1>
           <button className='p-2 px-4 rounded transition-all duration-300 ease-in-out hover:scale-105 border border-primary-multiply-color'>Cash</button>
           <button className='p-2 px-4 rounded transition-all duration-300 ease-in-out hover:scale-105 border border-primary-multiply-color'>Visa</button>
           <button className='p-2 px-4 rounded transition-all duration-300 ease-in-out hover:scale-105 border border-primary-multiply-color'>Mobile Wallet</button>
          </div>
          <div className="flex flex-col justify-center items-center w-[75%] md:w-[60%] h-fit py-10 border border-primary-multiply-color rounded">
            <h1 className=' text-primary-multiply-color text-5xl bold mb-10'>Cash</h1>
            {products.map((e)=>{

if(cartItems[e.id]>0)
{
  return  <div className='mb-10 w-3/4'>
            <div className="cartitems-format-main cartitems-format border-b-4">
              <img className='w-20' src={e.image} alt="" />
              <p cartitems-product-title>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity">{cartItems[e.id]}</button>
              <p>${e.new_price*cartItems[e.id]}</p>
              <X onClick={()=>{removeFromCart(e.id)}} height={25} width={25} className='hover:cursor-pointer'  />
            </div>
             <hr />
          </div>;
}
return null;
})}
        <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col justify-center items-center'>
          <h1 className='bold text-3xl text-primary-multiply-color'>Please enter your address:</h1>
          <textarea type="text" name='user_address' className='border my-5 border-primary-multiply-color w-[60%] rounded h-40' />
          <input type="text" name='order_details' value='' className='hidden' />
          <input type="text" name='order_price' className='hidden' value={getTotalCartAmountWithShipping()} />
            <div className="flex w-full justify-around items-center my-2">
            <h1 className=' text-primary-multiply-color text-2xl regular'>Total Price</h1>
            <h1 className=' text-primary-multiply-color text-2xl regular'>{getTotalCartAmount()}</h1>
            </div>
            <div className="flex w-full justify-around items-center my-2">
            <h1 className=' text-primary-multiply-color text-2xl regular'>Shipping`</h1>
            <h1 className=' text-primary-multiply-color text-2xl regular'>{40}</h1>
            </div>
            <div className="flex w-full justify-around items-center my-2">
            <h1 className=' text-primary-multiply-color text-2xl regular'>Total Price</h1>
            <h1 className=' text-primary-multiply-color text-2xl regular'>{getTotalCartAmountWithShipping()}</h1>
            </div>
            <input type="submit" value='Place Order' className="flex justify-center items-center gap-4 w-[60%]  rounded text-white bg-primary-multiply-color px-4 py-2 my-3 hover:scale-105 transition-all duration-300 ease-in-out"></input>
        </form>
          <Link to="/" className='w-[60%]'>
            <button className='flex justify-center items-center gap-4 w-full  rounded text-white bg-primary-multiply-color px-4 py-2 my-3 hover:scale-105 transition-all duration-300 ease-in-out'>Add More Items <PlusCircle /></button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Checkout