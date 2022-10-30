import React, { useRef, useState } from "react";

import heroVideo from "../assets/heroVideo.mp4";
import Second from "../assets/another.mp4"
import Last from "../assets/anotheragain.mp4"
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";
import { VideoData } from "./Data";
import { useEffect } from "react";

const HeroSection = ({ isMenuShown }) => {
  const [indexer, setIndexer] = useState(0)
  const VideoBase = [
    require("../assets/heroVideo.mp4"),
    require("../assets/another.mp4"),
    require("../assets/anotheragain.mp4")
  ]
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef();

  const [vidIndex, setVidIndex] = useState(0)
  useEffect(() => {
    if (vidIndex === 0 && videoRef.current) {
      videoRef.current.play()
    }
  }, [videoRef, vidIndex])

  const handleVideoPause = () => {
    videoRef.current.pause();
    console.log(videoRef)
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        style={{ display: vidIndex === 1 ? "none" : "block" }}
        ref={videoRef}
        src={VideoBase[indexer]}
        autoPlay
        muted
        onEnded={() => {
          if (indexer !== 2) {
            setIndexer(indexer + 1)
          } else if(indexer===2){
            setIndexer(0)
          }

        }}
        className="object-cover h-full w-full absolute -z-10"
      />
      {/* <video
        style={{ display: vidIndex === 0 ? "none" : "block" }}
        ref={videoRef}
        src={Second}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      /> */}

      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${isVideoPlaying ? "" : "bg-black/80"
          } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
        <h1 className="text-5xl lg:text-7xl">BCS-ICT</h1>
        <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          the <span className="text-thBlue font-bold">future</span> is here
        </h1>

        <div className="flex flex-row justify-center items-center">
          <GradientBtn className="capitalize" title="Join Us" />
          <GradientBtn className="capitalize mx-12" title="products" />

          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPlay}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
