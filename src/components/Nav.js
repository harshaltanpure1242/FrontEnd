import React from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "./Logo.png";

export default function Nav() {
  const auth = localStorage.getItem("user");

  const navigate = useNavigate();
  const logout = () => {
    console.warn("logout clicked");
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      <img className="logo" src={image} alt="logo"></img>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Product</Link>{" "}
          </li>
          <li>
            <Link to="/add">Add Product</Link>{" "}
          </li>
          <li>
            <Link to="/update">Update Product</Link>{" "}
          </li>
          <li>
            <Link to="/profile">Profile</Link>{" "}
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout 
            </Link>
          </li>
          {/* <li className="username">{JSON.parse(localStorage.getItem("user")).data.name}</li> */}
        </ul>
      ) : (
        <ul className="nav-ul-right nav-ul">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
