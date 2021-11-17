import React, {useState, useEffect} from "react";
import Buttons from "../components/Button";
import {getQuestions} from '../lib/apiQuestions';
import { useRouter } from 'next/router';


const Questions = () =>{
  const [questions, setQuestions] = useState([]);
  const router = useRouter()
  const num = router.query.num;
  const questionsX = [];

  useEffect(async () => {
    try {
      const response = await getQuestions(num)
      setQuestions(response)
    } catch (error) {
      console.log(error)
    }
  }, []);

  if(questions.length !== 0){

    questions.map((question, index) => {
      let aux = []
      aux.push(question.correct_answer)
      for(let i=0; i<question.incorrect_answers.length;++i){
        aux.push(question.incorrect_answers[i])
      }
      const aux1 = {
        question: question.question,
        answers: aux
      }

      questionsX.push(aux1)
      
    });

    console.log('TRE=',questionsX)
    
    questions.forEach(question =>{
      console.log("Q=",question.question.replace(/&quot;/g, '"'))
    })
  }
  console.log("Q=",questions)

  return(
    <>
    <div className="bg-indigo-600 p-2">
      <div className=" w-full container mx-auto my-4 flex flex-col justify-center bg-white leading-none ${props.textColor} rounded-lg p-2 shadow text-teal text-sm">
    <Buttons></Buttons>
    {questions.map(item =>{
          return(
            <>
            <label className=''>{item.question.replace(/&quot;/g, '"')}</label>
            
            </>
          )
        })}
    </div>
    </div>
    </>
  )
};

export default Questions;