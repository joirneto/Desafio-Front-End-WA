import React from "react";
import Buttons from "../components/Button";
import {getQuestions} from '../lib/apiQuestions';
import { useRouter } from 'next/router';

const Questions = () =>{
  const router = useRouter()
  const num = router.query.num;

  const resquestQuestions = async () =>{
    const questions = await getQuestions(num)
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