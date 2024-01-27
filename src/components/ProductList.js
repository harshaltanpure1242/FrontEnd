import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [products]);

  //Get Product
  let getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };

  //Delete Product
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    } else {
      console.warn("something wrong");
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
   if(key)
   {
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if (result) {
      setProducts(result);
    }
   }
   else{
    getProducts()
   }
  };

  return (
    <div className="Product-list">
      <h3 className="ProductListHeading">Product List</h3>
      <input
        className="SearchBox"
        placeholder="Search Product "
        type="text"
        onChange={searchHandle}
      ></input>
      <ul>
        <li>Sr No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>${item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button
              onClick={() => {
                deleteProduct(item._id);
              }}
            >
              Delete
            </button>
            <Link to={"/update/" + item._id}>Update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
