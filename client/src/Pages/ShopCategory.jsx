import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

const ShopCategory = (props) => {

  const [allplaces, setAllPlaces] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllPlaces(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])
    useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });
  return (
    <div className="shopcategory">
      <div className="ob h-40 w-full bg-primary-multiply-color mb-20"></div>
      {/* <img src={props.banner} className="shopcategory-banner" alt="" /> */}
      <div className="shopcategory-products">
        {allplaces.map((item) => {
            if(props.category===item.category)
            {
              return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>;
            }
            else
            {
              return null;
            }
        })}
      </div>
      <div className="shopcategory-loadmore">
      <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ShopCategory;
