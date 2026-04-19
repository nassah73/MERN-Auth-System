import React from 'react';

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      {/* Container الرئيسي */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Header - الزرق اللي خدامين بيه فالمشروع */}
        <div className="bg-[#164167] p-10 text-center">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Login</h2>
          <div className="h-1 w-12 bg-white/30 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Form - البلاصة فين غاتزيد الـ Logic ديالك */}
        <form className="p-8 space-y-6">
          
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">
              Email Address
            </label>
            <input 
              type="email" 
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#164167] focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-300"
              placeholder="example@fpt.ma"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">
              Password
            </label>
            <input 
              type="password" 
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#164167] focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-300"
              placeholder="••••••••"
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="w-full bg-[#164167] hover:bg-[#0d2a45] text-white font-extrabold py-4 rounded-2xl shadow-xl shadow-blue-900/20 transform active:scale-95 transition-all duration-200 mt-4"
          >
            LET'S GO
          </button>

          {/* Footer */}
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