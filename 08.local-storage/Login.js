import React, { useRef } from 'react';
import './login.css';
import Home from './Home';
function Login() {
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handelSubmit=()=>{
        if(email.current.value=="abc@gmail.com" && password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }
  return (
    <div className='card'>
        {
            getEmail && getPassword ?
            <Home/> :
    <form onSubmit={handelSubmit}>
    <div>
        <input type='email' ref={email} placeholder='Enter Email ID'/>
    </div>
    <div>
        <input type='password' ref={password} placeholder='Enter Password'/>
    </div>
    <button>Login</button>
    </form>
    }
    </div>
   );
}
export default Login;
