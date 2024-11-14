import {assets} from "../assets/assets";
import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [showMM,setShowMM] = useState(false);

    // to prevent from scrolling when menu is open
    useEffect(()=>{
        if(showMM){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'auto';
        }

        //immediate return
        return ()=>{
            document.body.style.overflow = 'auto';
        };
    },[showMM]) // dependency Array

    return(
        <>
        <div className="absolute top-0 left-0 w-full z-10 ">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img src={assets.logo} className="z-10" alt="" />
                <ul className="hidden md:flex gap-7 text-white">
                <a href="#Header" className="cursor-pointer hover:text-gray-400 ">Home</a>
                <a href="#About" className="cursor-pointer hover:text-gray-400 ">About</a>
                <a href="#Projects" className="cursor-pointer hover:text-gray-400 ">Projects</a>
                <a href="#Testimonials" className="cursor-pointer hover:text-gray-400 ">Testimonials</a>
                </ul>
                <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign Up</button>

                <img onClick={()=> setShowMM(true)} src={assets.menu_icon} className="md:hidden w-7 cursor-pointer" alt="" />
            </div>

            {/* mobile-menu */}
            <div className={`md:hidden ${showMM ? 'fixed w-full' : 'h-0 w-0' }  right-0 top-0 bottom-0 overflow-hidden bg-slate-800 transition-all`}>
                <div className="flex p-6 justify-end cursor-pointer">
                    <img onClick={()=>setShowMM(false)} src={assets.cross_icon} className="w-6 " alt="" />
                </div>
                <ul className="flex flex-col items-center gap-2 mt-5 mx-5 text-large font-medium ">
                    <a href="#Header" className="px-4 py-2 rounded-full inline-block text-white" onClick={()=>setShowMM(false)}>Home</a>
                    <a href="#About" className="px-4 py-2 rounded-full inline-block  text-white" onClick={()=>setShowMM(false)}>About</a>
                    <a href="#Projects" className="px-4 py-2 rounded-full inline-block  text-white" onClick={()=>setShowMM(false)}>Project</a>
                    <a href="#Testimonials" className="px-4 py-2 rounded-full inline-block  text-white" onClick={()=>setShowMM(false)}>Testimonials</a>
                </ul>
            </div>
        </div>
        </>
    )
}