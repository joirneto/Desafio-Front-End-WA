import React from "react";
import Buttons from "../components/Button";
import {getQuestions} from '../lib/apiQuestions'

const Questions = () =>{
  const resquestQuestions = async () =>{
    const questions = await getQuestions(3)
    console.log('questions: ', questions)
  } 
  resquestQuestions()
 
  
  return(
    <>
    <div className="bg-indigo-600 p-2">
      <div className=" w-full container mx-auto my-4 flex flex-col justify-center bg-white leading-none ${props.textColor} rounded-lg p-2 shadow text-teal text-sm">
    <Buttons></Buttons>
    </div>
    </div>
    </>
  )
};

export default Questions;