import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {

  const[image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
      name:"",
      image:"",
      category:"place",
      new_price:"",
      old_price:""
  });

  const AddProduct = async () => {
    
    let dataObj;
    let product = productDetails;
    
    let formData = new FormData();
    formData.append('files', image);

      // for (let i = 0; i < files.length; i++) {
      //     formData.append("files", files[i])  
      // }
      // console.log(...formData)
      // try {
      //   const response = await axios.post('http://localhost:4000/upload', formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   });
      //   console.log(response.data)
      // } catch (error) {
      //   console.error('Error uploading files: ', error)
      // }

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept:'application/json',
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

    if (dataObj.success) {
      product.image = dataObj.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => {data.success?alert("Product Added"):alert("Failed")});
      
    }

  }

  const changeHandler = (e) => {
    console.log(e);
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
    }
    
  return (
    <div className="addproduct">

      <div className="addproduct-itemfield">
        <p>Name</p>
        <input type="text" name="name" value={productDetails.name} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="new_price" value={productDetails.new_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Category</p>
        <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
          <option value="place-ancient">Ancient Monuments</option>
          <option value="place-religions">Religions</option>
          <option value="place-beaches">Beaches</option>
          <option value="place-museums">Museums</option>
          <option value="place-hotels">Hotels</option>
          <option value="tour-guide">Tour Guide</option>
        </select> 
      </div>
      <div className="addproduct-itemfield">
        <p>Image</p>
        <label for="file-input">
            <img className="addproduct-thumbnail-img" src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
        </label>
        <div className="flex justify-around">
          <input onChange={(e)=>{imageHandler(e)}} type="file" name="image" id="files"  />
        </div>
      </div>
      <button className="addproduct-btn" onClick={()=>{AddProduct()}}>ADD</button>
    </div>
  );
};

export default AddProduct;
