

import React from "react";
import apiError from "../statics/14651-error-animation.json";
import Lottie from "react-lottie";

function Error() : JSX.Element{
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: apiError,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    return <Lottie  options={defaultOptions} width="300px" height="300px"></Lottie>;
  }
  

  export default Error;