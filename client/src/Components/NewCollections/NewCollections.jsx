import React from 'react'
import './NewCollections.css'
// import Item from '../Item/Item'
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll'

const NewCollections = (props) => {
  return (
    <div className='new-collections'>
      <h1 className='bold text-primary-multiply-color'>Ancient Monuments</h1>
      <hr />
      <div className="collections flex justify-center items-center">
        {/* {props.data.map((item,i)=>{
                return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
            })} */}
            <HorizontalScroll />
      </div>
    </div>
  )
}

export default NewCollections
