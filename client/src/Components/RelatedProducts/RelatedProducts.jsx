import React, {useState, useEffect} from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'

const RelatedProducts = (props) => {
  const [allproducts, setAllProducts] = useState([]);

  // const fetchInfo = () => { 
  //   fetch('http://localhost:4000/allproducts') 
  //           .then((res) => res.json()) 
  //           .then((data) => setAllProducts(data))

  // }
  

  //   useEffect(() => {
  //     fetchInfo();
  //   }, [])
    
  return (
    <div className='relatedproducts mt-20'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {allproducts.map((item)=>{
          if(props.category === item.category) {
            return <Item id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
