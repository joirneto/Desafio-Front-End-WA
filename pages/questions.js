import React, {useState, useEffect} from "react";
import Buttons from "../components/Button";
import {getQuestions} from '../lib/apiQuestions';
import { useRouter } from 'next/router';

const Questions = () =>{
  const [questions, setQuestions] = useState([]);
  const router = useRouter()
  const num = router.query.num;

  useEffect(async () => {
    try {
      const response = await getQuestions(num)
      setQuestions(response)
    } catch (error) {
      console.log(error)
    }
  }, []);

  console.log(questions)

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