import React from "react";
import { Link } from "react-router-dom";
import frecuencia from "../img/frecuencia.svg";

import { BsHeart, BsMusicNoteBeamed, BsPen, BsStar } from "react-icons/bs";

function Login() {
  const iconStyle =
    "w-[20%] h-20 flex items-center justify-center  transition-all  text-[4em] rounded-t-xl";
  return (
    <div className="w-full h-[100vh] relative flex items-center justify-between ">
      <div className="md:flex justify-center items-center hidden lg:w-[20%] md:w-[30%] h-[85%]  rounded-r-full overflow-hidden bg-cover bg-listening bg-top text-gray-100">
        <div className="flex flex-col justify-center items-center h-[100%] w-[100%] bg-[#48afdf] bg-opacity-50 ">
          <button id="note1" className={iconStyle}>
            <BsMusicNoteBeamed />
          </button>
          <button id="note1" className={iconStyle}>
            <BsStar />
          </button>
          <button id="note1" className={`ml-20 ${iconStyle}`}>
            <BsMusicNoteBeamed />
          </button>
          <button id="note1" className={`mr-5 ${iconStyle}`}>
            <BsMusicNoteBeamed />
          </button>

          <button id="note1" className={`ml-14 ${iconStyle}`}>
            <BsHeart />
          </button>
          <button id="note1" className={`mr-16 ${iconStyle}`}>
            <BsMusicNoteBeamed />
          </button>
          <button id="note1" className={`ml-20 ${iconStyle}`}>
            <BsMusicNoteBeamed />
          </button>
        </div>
      </div>

      <div className="  md:w-[60%] w-full h-[100%] flex justify-center flex-col items-center overflow-hidden ">
        <div className="w-full h-[50vh] relative flex justify-center flex-col items-center">
          <div className="md:text-[3rem] lg:text-[4em] text-[2.8em] font-bold  font-serif text-gray-700">
            StereoSound
          </div>
          <img className="w-full h-[60%] flex " src={frecuencia} alt="" />
          <h1 className="md:text-[1.5em] text-[1.2em] text-gray-600  font-sans flex font-medium">
            All the power in your hands
          </h1>
        </div>
        <div className="w-full h-[30vh] flex justify-center items-center">
          <Link to={"/homepage"}>
            <button className="w-[300px] h-[80px] mx-10 hover:bg-gray-800 hover:bg-opacity-70 transition-all rounded-sm text-2xl text-gray-100 bg-[#48afdf]">
              Access
            </button>
          </Link>
        </div>
      </div>
      <div className="md:flex justify-center items-center hidden lg:w-[20%] md:w-[30%] h-[85%] rounded-l-full overflow-hidden bg-cover bg-dancing">
        <div className="flex flex-col justify-center items-center  w-[100%] h-[100%] bg-gray-800 bg-opacity-50 text-gray-100">
          <button id="note1" className={` ${iconStyle}`}>
            <BsMusicNoteBeamed />
          </button>
          <button id="note1" className={`${iconStyle}`}>
            <BsPen />
          </button>
          <button id="note1" className={`ml-20 ${iconStyle}`}>
            <BsMusicNoteBeamed />
          </button>
          <button id="note1" className={`mr-16 ${iconStyle}`}>
            <BsMusicNoteBeamed />
          </button>
          <button id="note1" className={`${iconStyle}`}>
            <BsHeart />
          </button>
          <button id="note1" className={`mr-16 ${iconStyle}`}>
            <BsMusicNoteBeamed />
          </button>
          <button id="note1" className={`ml-20 ${iconStyle}`}>
            <BsMusicNoteBeamed />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
