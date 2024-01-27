import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("Inside useEffect");
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError(true);
      return false;
    }
    let result = await axios.post("http://localhost:5000/register", {
      name,
      email,
      password,
    });
     result = await collectData;
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate("/");
    }

    //===========================================================================================
    //using Fetch method of javascript

    //   let result = await fetch('http://localhost:5000/register',
    //    {
    //     method: "post",
    //     body: JSON.stringify({ name, email, password }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   result = await result.json();
    //   console.warn(result);
    //   localStorage.setItem("user",JSON.stringify(result))

    //   if(result)
    //   {
    //     navigate('/')
    //   }
  };

  return (
    <div className="SignUpDiv">
      <h2>SignUp component</h2>
      <input
        className="signUpinputBox"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Name"
      ></input>

      {error && !name && (
        <span className="InvalidInput">*This field is required</span>
      )}
      <input
        className="signUpinputBox"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter Email"
      ></input>
      {error && !email && (
        <span className="InvalidInput">*This field is required</span>
      )}

      <input
        className="signUpinputBox"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter Password"
      ></input>
      {error && !password && (
        <span className="InvalidInput">*This field is required</span>
      )}

      <button className="SignUpButton" type="button" onClick={collectData}>
        {" "}
        SignUp
      </button>
    </div>
  );
}
