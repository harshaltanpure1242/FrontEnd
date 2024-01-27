import React, { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  let AddProduct = async () => {
    console.warn(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    console.warn(name, price, category, company);

    const userId = JSON.parse(localStorage.getItem("user")).data._id;

    console.warn(userId);
    let result = await axios.post("http://localhost:5000/add-product", {
      name,
      price,
      category,
      company,
      userId,
    });
    if(result)
    {
      alert("Product Added")
    }
  };

  return (
    <div className="AddProductDiv">
      <h3 className="AddProductHeading">Add Product</h3>
      <input
        className="AddProductInput"
        type="text"
        placeholder=" Enter Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      {error && !name && (
        <span className="InvalidInput">
          *This field is Mandatory
        </span>
      )}
      <input
        className="AddProductInput"
        type="text"
        placeholder=" Enter Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      {error && !price && (
        <span className="InvalidInput">
          *This field is Mandatory
        </span>
      )}
      <input
        className="AddProductInput"
        type="text"
        placeholder="Enter category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      ></input>
      {error && !category && (
        <span className="InvalidInput">
          *This field is Mandatory
        </span>
      )}{" "}
      <input
        className="AddProductInput"
        type="text"
        placeholder=" Enter company"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      ></input>
      {error && !company && (
        <span className="InvalidInput">
          *This field is Mandatory
        </span>
      )}
      <button className="AddProductdButton" onClick={AddProduct}>
        Add Product
      </button>
    </div>
  );
}
