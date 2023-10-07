
import auriculares from "../img/auriculares.png";
import { BsMagic} from "react-icons/bs";


export default function MainBannerHome() {
  return (
    <div className="w-full h-[100vh] flex ">
    <div
      id="heading-container"
      className="md:w-[50%] w-full h-[90vh]  flex items-center justify-center relative"
    >
      <div className="p-5 flex items-center justify-center flex-col text-gray-700  ">
        <h1 className="md:text-[5.3em] text-[3em] font-extrabold text-center font-serif relative">
          Music player
          <span  className="iconsbrand w-10 h-10 absolute top-2 -right-10  flex items-center justify-center text-[2em] text-[#48afdf]">
              <BsMagic />
            </span>
        </h1>
        <h2 className="md:text-[1.8em] font-serif font-semibold">
          Style and gracefull

        </h2>
        <div className="w-full h-[20vh]  flex items-center p-3 text-xl text-gray-100 mt-5 md:justify-start justify-center">
          <button className="w-56 h-16 bg-[#48afdf] rounded-md hover:bg-green-500 transition-all relative shadow-xl hover:shadow-2xl">
            Let's rock
          
          </button>
        </div>
      </div>
    </div>
    <div className="md:w-[50%] w-full min-h-[90vh]  md:flex hidden">
      <img
        id="auriculares"
        className="md:w-[100%] h-[90%] "
        src={auriculares}
        alt="auriculares"
        srcset=""
      />
    </div>
  </div>
  )
}
