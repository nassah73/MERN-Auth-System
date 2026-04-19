import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function LoginForm() {
  const [info,setInfo]=useState({})
  const Handelform=(formData)=>{
    
    const email=formData.get("email")
    const password=formData.get("password")
    const logInfo={
      email:email,
      password:password,
    }
    setInfo(logInfo)

     axios.post("http://localhost:3200/login/info",logInfo)
  .then(res=>console.log("data sended"+ res))
  .catch(err=>console.log(err+" errer"))
  }
 
 
 
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
     
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
       
        <div className="bg-[#164167] p-10 text-center">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Login</h2>
          <div className="h-1 w-12 bg-white/30 mx-auto mt-3 rounded-full"></div>
        </div>

        
        <form className="p-8 space-y-6" action={Handelform}>
          
          
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">
              Email Address
            </label>
            <input 
              type="email"  
              name='email'
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#164167] focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-300"
              placeholder="example@fpt.ma"
            />
          </div>

         
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">
              Password
            </label>
            <input 
              type="password" 
              name='password'
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#164167] focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-300"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#164167] hover:bg-[#0d2a45] text-white font-extrabold py-4 rounded-2xl shadow-xl shadow-blue-900/20 transform active:scale-95 transition-all duration-200 mt-4"
          >
            LET'S GO
          </button>

         
          <div className="pt-8 text-center">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              FPT Taroudant • Graduation Project
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}