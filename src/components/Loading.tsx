

import React from "react";
import rocketLoader from "../statics/52692-rocket-launching.json";
import Lottie from "react-lottie";

function Loading() : JSX.Element{
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: rocketLoader,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    return <Lottie  options={defaultOptions} width="300px" height="300px"></Lottie>;
  }
  

  export default Loading;