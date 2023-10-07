import React from "react";
import { Slide } from "react-awesome-reveal";
import people from "../../img/people.jpg";
import dj from "../../img/dj.jpg";
function Slide2() {
  return (
    <div className="w-full min-h-[80vh]  flex md:flex-row flex-col ">
   
       <div className="lg:h-[80vh] h-[50vh] md:w-[50%] w-full flex justify-center items-center">
        <Slide>
           <img
        className="w-full lg:h-[80vh] h-[50vh] object-cover lg:scale-75"
        src={people} alt="" />  
        </Slide>
      
      </div>  

     <div className="md:w-[50%] w-full lg:h-[80vh] h-[50vh]  flex flex-col justify-center items-center md:p-20 p-3 text-gray-700 ">
     <h3 className="text-[3em] font-sans font-bold mb-3 w-full">
              Join to our big family
            </h3>
            <p className="text-xl text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              mollitia nam doloribus.
            </p>
            <div className="w-full h-[10vh] flex  items-center">
              <button className="w-56 h-16 bg-[#48afdf] rounded-md hover:bg-green-500 mt-14 transition-all relative shadow-xl hover:shadow-2xl text-lg text-gray-200">
                Become Premium 
              </button>
          
            </div>
     </div>
     
    </div>
  );
}

export default Slide2;
