import { useEffect, useState, useMemo } from "react";
import { X, Search, Check } from "lucide-react";
import { ArrowLeft } from 'lucide-react';


export default function GroupInfoModalAdmin({ open, onClose }) {


  return (
    <div
      className={`fixed inset-0 z-50  flex items-center justify-center ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition ${
          open ? "opacity-100 backdrop-blur-sm" : "opacity-0"
        }`}
      />

      {/* modal */}
      <div
        className={`relative  z-10 w-[100%] sm:w-full max-w-md h-[80%] sm:h-[90vh] bg-white rounded-xl p-4 shadow-xl transition ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } flex flex-col`}
      >
        {/* header */}
        <div className="flex justify-between items-center mb-2">

          <button onClick={()=>{
            onClose();
          }} >
            <X className="cursor-pointer" size={20} />
          </button>
        </div>

        



        
        <div className="mt-3 flex-1 overflow-y-auto">
         fgfgh
        </div>

        {/* footer */}
        
      </div>
    </div>
  );
}
