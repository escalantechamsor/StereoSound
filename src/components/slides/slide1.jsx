import React from "react";
import banner from "../../img/banner.jpg";
import { Slide } from "react-awesome-reveal";

function Slide1() {
  return (
    <div className="w-full min-h-[70vh] overflow-hidden flex lg:p-5">
      <div className=" w-full lg:h-[70vh] h-[50vh] flex md:flex-row flex-col j">
        <Slide>
          <div className=" lg:h-[70vh] h-[50vh] w-full ">
            <img
              id="banner"
              className="w-[90%] mx-auto h-[100%] "
              src={banner}
              alt="banner"
            />
          </div>
        </Slide>
        <div className="md:w-[50%] w-full min-h-[70vh] p-3 flex flex-col justify-center items-center pr-10 text-gray-700 ">
          <h3 className="text-[2.3em] font-sans font-bold mb-3 ">
            Experiment the power and fusion.
          </h3>
          <p className="text-xl text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            mollitia nam doloribus. Debitis harum quos id quisquam itaque velit
            nostrum unde, incidunt magni praesentium consequuntur fugiat totam
            iusto. Est, voluptatibus!
          </p>
          <div className="w-full h-[10vh] flex mt-10 items-center">
            <button className="w-56 h-16 bg-[#48afdf] rounded-md hover:bg-green-500 transition-all relative shadow-xl hover:shadow-2xl text-lg text-gray-200">
              Check products
            </button>
            <button className="w-56 h-16 bg-[#48afdf] rounded-md hover:bg-green-500 transition-all relative shadow-xl hover:shadow-2xl text-lg text-gray-200 ml-5">
              Turn around
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide1;
