import React, { useState } from "react";
import "../css/login.css";
import axios from "axios";

export default function Login() {
    const[form,setForm]=useState({name:"",email:"",password:""});
    const[loggin,setLoggin]=useState(true);
     
    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value});
    }

   function handleLoggin(){
    setLoggin(!loggin);
   }

  async function handleSubmit(e) {
    e.preventDefault();
    if(loggin){
     const res=await axios.post("http://localhost:5000/user/login",{email:form.email,password:form.password});
     console.log(res.data.data);
     setForm({email:"",password:""});
    }else{
        const res=await axios.post("http://localhost:5000/user/signup",form);
        console.log(res.data.data);
        setForm({name:"",email:"",password:""});
        handleLoggin();
    }
  }
  

  return (
    <div className={`login-parent ${loggin?"login":"signup"}`}>
      <div className="section1">
        <h3 className="title">Get Started Now</h3>
        <form>
          {loggin?<table>
            <tr><td>Email address</td></tr>
            <tr><td><input type="email" name="email" placeholder="Enter your email"   value={form.email} required onChange={(e)=>handleChange(e)}/></td></tr>
            <tr><td>Password</td></tr>
            <tr><td><input type="password" name="password" placeholder="Enter your password" value={form.password} required onChange={(e)=>handleChange(e)}/></td></tr>
          </table>:<table>
            <tr><td>Name</td></tr>
            <tr><td><input type="text" name="name" placeholder="Enter your name" value={form.name} required onChange={(e)=>handleChange(e)}/></td></tr>
            <tr><td>Email address</td></tr>
            <tr><td><input type="email" name="email" placeholder="Enter your email"   value={form.email} required onChange={(e)=>handleChange(e)}/></td></tr>
            <tr><td>Password</td></tr>
            <tr><td><input type="password" name="password" placeholder="Enter your password" value={form.password} required onChange={(e)=>handleChange(e)}/></td></tr>
          </table>}
          <button className="btn" onClick={(e)=>handleSubmit(e)}>{loggin?<p>Login</p>:<p>Signup</p>}</button>
          {loggin?<p>Don't you have account? <span className='span'onClick={handleLoggin}>Signup</span></p>:<p>Have an account? <span className="span" onClick={handleLoggin}>Signin</span></p>}
        </form>
      </div>
      <div className="section2">
        <img src="https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="login image"/>
      </div>
    </div>
  );
}
