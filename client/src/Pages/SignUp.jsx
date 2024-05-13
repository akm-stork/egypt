import React, {useState} from 'react'
import signHeader from '../assets/signing-head.png'
import {t} from 'i18next'
const SignUp = () => {
  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({userName:"",email:"",password:""});

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    }

    const login = async () => {
        let dataObj;
        await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  }
  const signup = async () => {
    let dataObj;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  }

  // const login = async () => {
  //   axios.post('http://localhost:5000/auth/login', {
  //     userName: formData.userName,
  //     email: formData.email,
  //     password: formData.password    
  //     }).then((res) => {
  //       console.log("Server Response: S", res)
  //     }).catch((err) => {
  //       console.log("Server Response with error: ", err)
  //     })
  //   }
  // const signup = () => {
  //   // e.preventDefault();
  //    axios.post("http://localhost:5000/auth/signup", {
  //     userName: formData.userName,
  //     email: formData.email,
  //     password: formData.password
  //   }).then((res) => {
  //     console.log("Server response: S", res);
  // })
  // .catch((err) => {
  //     console.log("Server respondend with error: ", err);
  // })
  // }
  return (
    <div>
      <div className="ob h-40 w-full bg-primary-multiply-color"></div>
      <div className="h-screen w-full flex justify-center items-center regular">
     <img className="absolute h-full w-full -z-30" src={signHeader} alt=''/>
      <div className="z-20 relative text-primary-color flex flex-col gap-4 justify-center items-center h-[85%] w-[40%] bg-white rounded-2xl p-10">
        <h1 className='text-4xl bold text-primary-multiply-color'>{state==='Sign Up'?t("create"):t("login")}</h1>
        <div className="flex flex-col gap-5 w-full justify-center items-center">
          {state==="Sign Up"?<input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler} className='w-[90%] rounded-2xl py-2 px-3 border text-black border-primary-multiply-color'/>:<></>}
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler} className='w-[90%] rounded-2xl py-2 px-3 border text-black border-primary-multiply-color'/>
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler} className='w-[90%] rounded-2xl py-2 px-3 border text-black border-primary-multiply-color'/>
        </div>

        <button onClick={()=>{state==="Login"?login():signup()}} className='w-[90%] bg-primary-multiply-color text-white rounded-2xl p-2 hover:border hover:border-primary-multiply-color hover:text-primary-multiply-color transition-all duration-500 hover:bg-white'>{t("continue")}</button>

        {state==="Login"?
        <p className="loginsignup-login">{t("create")}? <span onClick={()=>{setState("Sign Up")}} className='text-primary-multiply-color cursor-pointer'>{t("signup")}</span></p>
        :<p className="loginsignup-login">{t("already")} <span onClick={()=>{setState("Login")}} className='text-primary-multiply-color cursor-pointer'>{t("login")}</span></p>}

        <div className="loginsignup-agree flex gap-2 py-5 justify-center items-center">
          <input type="checkbox" name="" id="" />
          <p className='text-sm'>{t("Agree")}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignUp