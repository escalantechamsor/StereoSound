import { BsMusicNote, BsHeadphones } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {

  const [ isOpen, setIsOpen]= useState(false)
  const listaItems =
    "p-3 mr-3 justify-center text-[1.3em] font-semibold text-gray-500 hover:cursor-pointer h-[100%] flex items-center w-20 hover:border-b-4 border-gray-500";
    const listadoItems =
    "w-full p-5 text-center text-xl mt-2 hover:font-bold hover:bg-gradient-to-r from-[#48afdf] hover:cursor-pointer";
  return (
  <div className="w-full h-[12vh] relative z-40">
      <nav className="w-full h-[12vh] fixed top-0 left-0 bg-gray-100 bg-opacity-50 flex items-center justify-between pr-5">
      <div
        id="brandcontainer"
        className="md:p-0  px-5 relative h-[100%] md:w-[300px] bg-gray-800 bg-opacity-90 flex items-center justify-center rounded-br-[1em] "
      >
        <h1
          id="brand"
          className="md:text-[2.2rem] text-[1.5em] font-bold  font-serif text-gray-200 "
        >
          <Link to={"/"}>StereoSound</Link>
        </h1>
        <span className="iconsbrand w-7 h-7 bg-red absolute top-0 right-0  flex items-center justify-center text-2xl text-[#48afdf]">
          <BsHeadphones />
        </span>
        <span className="iconsbrand w-7 h-7 bg-red absolute bottom-0 left-0  flex items-center justify-center text-2xl text-[#48afdf]">
          <BsMusicNote />
        </span>
      </div>
      <ul className="h-[100%]  md:flex items-center mr-8 hidden font-serif">
        <li className={`${listaItems}`}>Services</li>
        <li className={`${listaItems}`}>About</li>
        <li className={`${listaItems}`}>Info</li>
        <li className={`${listaItems}`}>Some</li>
      </ul>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10  mr-5  md:hidden flex items-center justify-center text-3xl transition-all "
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      
      

      
    </nav>

    <div
          className={`${
            isOpen ? " w-[100%] fixed right-0 mt-[12vh]" : "w-[0%] "
          } md:hidden transition-all  min-h-screen bg-gray-800 pt-8 bg-opacity-95   text-gray-100 `}
        >
          <ul className="h-[100%] flex flex-col items-center justify-center ">
            <li className={`${listadoItems} `}>Services</li>
            <li className={`${listadoItems}`}>About</li>
            <li className={`${listadoItems}`}>Info</li>
            <li className={`${listadoItems}`}>Some</li>
          </ul>
        </div>








  </div>
  );
}

export default NavBar;
