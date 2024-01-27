import Axios from "axios";
import React,{useEffect, useState,} from "react";
import {useParams,useNavigate} from 'react-router-dom'
//useParams hook allows us to access URL parameters within our components.

export default function UpdateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        console.warn(params);
        getProductDetails()
    },[])

    let getProductDetails=async()=>{
        let result=await fetch(`http://localhost:5000/product/${params.id}`)
            result=await result.json()
            console.warn(result);
            setName(result.name);
            setPrice(result.price)
            setCategory(result.category)
            setCompany(result.company)
        // let result=await Axios.get(`http://localhost:5000/product/${params}`)
        // result=await result.data
        // console.warn(result);
    }
    
    let updateprd =  async() => {
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-type':"application/json"
            }
        })
        result=await result.json()
        console.warn(result);
        navigate('/')
    };
  return (
    <div className="AddProductDiv">
      <h3>Update Product</h3>
      <input
        className="AddProductInput"
        type="text"
        placeholder=" Enter Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      
      <input
        className="AddProductInput"
        type="text"
        placeholder=" Enter Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      
      <input
        className="AddProductInput"
        type="text"
        placeholder="Enter category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      ></input>
     
      <input
        className="AddProductInput"
        type="text"
        placeholder=" Enter company"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      ></input>
      
      <button className="AddProductdButton" onClick={updateprd}>
        Update Product
      </button>
    </div>
  );
}
