"use client"

import Link from "next/link";
import React ,{useEffect, useState} from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Navabr = () => {
   
  const [nav , setNav]= useState(false);
   const [color , setColor] = useState('transparent');
   const [textColor , setTextColor] = useState('white');


  const handleNav =()=>{
      setNav((pre)=>!pre);
  }

  const handleNavclose = ()=> {
    setNav(false);
}

  useEffect(()=>{
       const changeColor =()=>{
         if(window.scrollY >= 90){
          setColor('#ffffff');
          setTextColor('#000000');
         }else{
          setColor('transparent');
          setTextColor('#ffffff');
         }
       }
  
       window.addEventListener('scroll',changeColor);

       

  },[])

  return (
    <div style={{backgroundColor:`${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href={"/"}>
          <h1  style={{color:`${textColor}`}} className="text-4xl font-bold font-serif">capture</h1>
        </Link>

        <ul style={{color:`${textColor}`}} className="hidden sm:flex  ">
          <li  className="p-4">
            <Link className="capitalize text-[1.2rem] font-semibold font-serif " href={"/"}>home</Link>
          </li>
          <li className="p-4">
            <Link className="capitalize text-[1.2rem] font-semibold font-serif " href={"/gallery"}>gallery</Link>
          </li>
          <li className="p-4">
            <Link className="capitalize text-[1.2rem] font-semibold font-serif " href={"/portfolia"}>portfolia</Link>
          </li>
          <li className="p-4">
            <Link className="capitalize text-[1.2rem] font-semibold font-serif " href={"/contact"}>contact</Link>
          </li>
        </ul>

        {/* mobile button*/}
        <div onClick={handleNav} className="block sm:hidden z-40">
          {
            nav ? <IoIosCloseCircleOutline  size={40} style={{color:`${textColor}`}}/> : <IoMenuOutline  size={40} style={{color:`${textColor}`}} /> 
          }
         
        </div>
        {/* mobile navabr*/}
        <div className={nav? 'sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
          <ul>
            <li  className="p-4 text-4xl  hover:text-gray-500  capitalize ">
              <Link onClick={handleNavclose} href={"/"}>home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 capitalize ">
              <Link onClick={handleNavclose} href={"/gallery"}>gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 capitalize ">
              <Link onClick={handleNavclose} href={"/portfolia"}>portfolia</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 capitalize ">
              <Link onClick={handleNavclose} href={"/contact"}>contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
