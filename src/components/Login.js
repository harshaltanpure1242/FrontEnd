import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

 
  const loginHandling= async()=>{
    // let result=await fetch("http://localhost:5000/login",
    // {
    //   method:'post',
    //   body:JSON.stringify({email,password}),
    //   headers:{
    //     'Content-Type':'application/json'
    //   }
    // })
    // result=await result.json()

  //   let result =  await axios.post('http://localhost:5000/login',{email,password},)
  //  // result= await result
  //   console.log(result); 
  //   if(result.auth)
  //   {
  //     localStorage.setItem('user',JSON.stringify(result.user));
  //     localStorage.setItem("token",JSON.stringify(result.auth));
  //     navigate('/')
  //   }
  //   else
  //   {
  //     alert("Please enter correct credentials")
  //   }


   let result= await fetch('http://localhost:5000/login',{
    method:'post',
    body:JSON.stringify({email,password}),
    headers:{'Content-Type':'application/json'}
   })
  result=await result.json()
  if(result.auth)
  {
    localStorage.setItem('user',JSON.stringify(result.user));
    localStorage.setItem("token",JSON.stringify(result.auth));
    navigate('/')
  }
  else
  {
    alert("Please enter correct credentials")
  }

  }
  return (
    <div className="login">
      Login
      <input
        className="LogininputBox"
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
      ></input>
      <input
        className="LogininputBox"
        type="password"
        value={password}
        placeholder="Enter Password"
        onChange={(e)=>{setPassword(e.target.value)}}
      ></input>
      <button className="loginbtn"
       onClick={loginHandling}>Login</button>
    </div>
  );
}
