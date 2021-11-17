import React from "react";
import Buttons from "../components/Button";

const Questions = () =>{
  return(
    <div className="bg-indigo-600 p-2">
      <div className=" w-full container mx-auto my-4 flex flex-col justify-center bg-white leading-none ${props.textColor} rounded-full p-2 shadow text-teal text-sm">
    <Buttons></Buttons>
    </div>
    </div>
  )
};

export default Questions;