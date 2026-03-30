import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore.js';
import toast, { Toaster } from "react-hot-toast";
import { Mail, Lock, Loader2, MessageSquare, Send, ShieldCheck, User } from "lucide-react";

/**
 * FULL PAGE MESSAGE RAIN BACKGROUND
 * The animation covers the entire viewport.
 */
const FullPageMessageRain = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f0f4f8]">
      {/* Soft Background Orbs for Depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#668AFF]/10 rounded-full blur-[120px]" />

      {/* Message Rain - Full Screen */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="message-element absolute flex items-center gap-2 p-3 rounded-2xl bg-white/60 border border-white shadow-sm backdrop-blur-[2px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-100px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 8}s`,
            transform: `scale(${0.6 + Math.random() * 0.4})`,
          }}
        >
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <User size={12} className="text-[#668AFF]" />
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-12 bg-blue-200/50 rounded" />
            <div className="h-1.5 w-8 bg-gray-200/50 rounded" />
          </div>
        </div>
      ))}

      <style>{`
        @keyframes rainFall {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(110vh) translateX(20px); opacity: 0; }
        }
        .message-element {
          animation: rainFall linear infinite;
        }
        .glass-login-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default function LoginPage() {
  const { login, isLoggingIn } = useAuthStore();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return toast.error("Please fill in all fields");
    }
    login(formData);
  };

  return (
    <div className='relative min-h-screen flex items-center justify-center p-6 overflow-hidden'>
      <Toaster position="top-right" />
      
      {/* The Full Background Animation */}
      <FullPageMessageRain />
      
      {/* Your Original Blue Theme Form */}
      <div className='w-full max-w-md glass-login-card p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] text-gray-800 relative z-10'>
        
        {/* Branding */}
        <div className='flex flex-col items-center mb-10'>
          <div className='w-16 h-16 bg-[#668AFF] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 animate-pulse'>
             <MessageSquare className='text-white' size={32} />
          </div>
          <h1 className='mt-6 text-3xl font-extrabold text-gray-900 tracking-tight'>
            Selsons Chat
          </h1>
          <p className='text-gray-500 text-sm font-medium mt-1'>Welcome back to the community.</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* Email */}
          <div className='space-y-2 group'>
            <label className="text-sm font-bold text-gray-600 ml-1">Phone</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#668AFF] transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Mobile" 
                className="w-full pl-12 pr-4 h-14 bg-white/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-[#668AFF] outline-none transition-all font-medium"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Password */}
          <div className='space-y-2 group'>
            <label className="text-sm font-bold text-gray-600 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#668AFF] transition-colors" size={20} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-12 pr-4 h-14 bg-white/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-[#668AFF] outline-none transition-all font-medium"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          {/* Button using your specific blue #668AFF */}
          <button 
            type="submit" 
            disabled={isLoggingIn}
            className="w-full bg-[#668AFF] hover:bg-[#5575E6] text-white h-14 rounded-2xl font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
          >
            {isLoggingIn ? (
              <Loader2 className="animate-spin" size={22} />
            ) : (
              <>
                <span>Sign In</span>
                <Send size={18} />
              </>
            )}
          </button>
        </form>

        <div className='mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest'>
          <ShieldCheck size={14} className="text-[#668AFF]" />
          Secured by Selsons Auth
        </div>
      </div>
    </div>
  );
}
