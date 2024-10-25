import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  return (
    <>
      <div>
        <div className="felx flex-col items-center mt-6 lg:mt-20"></div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
          Iam Vinay Kumar Ellulla{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            This is a Landing page for Practice
          </span>
        </h1>
        <p className=" container mx-auto mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          This clips the background gradient to the shape of the text. When
          combined with text-transparent, it makes the background gradient
          visible only within the text boundaries.
        </p>
        <div className="flex justify-center my-10 ">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Start for Free
          </a>
          <a href="#" className="py-3 px-4 rounded-md border">
            Documentation
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your Browser does not Support the video tag
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-2/4 border border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your Browser does not Support the video tag
          </video>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
