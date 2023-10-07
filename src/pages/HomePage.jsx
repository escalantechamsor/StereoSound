import React from "react";
import "./homepage.css";
import Slide1 from "../components/slides/slide1";
import MainBannerHome from "../components/mainbannerhome";
import podcast from "../img/podcast.jpg";
import { Fade } from "react-awesome-reveal";
import Slide2 from "../components/slides/slide2";
import Slide3 from "../components/slides/slide3";

function HomePage() {
  return (
    <section className="w-full min-h-[200vh]  p-3 ">
      <MainBannerHome />
      <Slide1 />
      <div className="w-full min-h-[60vh] mt-10 flex justify-center items-center relative ">
        <Fade>
          <div className="md:w-[450px] w-full h-[60vh]  md:rounded-full ">
            <img
              className="w-full h-[60vh] animate-wiggle object-cover"
              src={podcast}
              alt=""
            />
          </div>
        </Fade>
      </div>
      <Slide2 />
      <Slide3 />
    </section>
  );
}

export default HomePage;
