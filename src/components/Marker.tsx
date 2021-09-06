

import React from "react";
import rocket from "../statics/34115-rocket-lunch.json";
import Lottie from "react-lottie";

function Marker({ lng, lat }: { lng: string; lat: string }) : JSX.Element{
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: rocket,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    return <Lottie  options={defaultOptions} width="50px" height="50px"></Lottie>;
  }
  

  export default Marker;