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
      aux.push(question.correct_answer.replace(/&quot;/g,' ' ).replace("&#039;",' ').replace("&eacute;", 'e'))
      
      for(let i=0; i<question.incorrect_answers.length;++i){
        aux.push(question.incorrect_answers[i].replace(/&quot;/g,' ' ).replace("&#039;",' ').replace("&eacute;", 'e'))
      }
      const aux1 = {
        question: question.question.replace(/&quot;/g,' ' ).replace(/&#039;/,' ').replace("&eacute;", 'e'),
        answers: aux
      }

      questionsX.push(aux1)
      
    });

    console.log('TRE=',questionsX)
    
    questions.forEach(question =>{
      console.log("Q=",question.question)
    })
  }
 
 
  return(
    <>
    <div className="bg-indigo-600 p-2">
      <div className=" w-full container mx-auto my-4 flex flex-col justify-center bg-white leading-none ${props.textColor} rounded-lg p-2 shadow text-teal text-sm">
    <Buttons></Buttons>
    {questionsX.map((item, index) =>{
          return(
            <>
            <label className='' >{`Question ${index+1}`} {item.question}</label>
            {item.answers.map(ans =>{
                return(
                  <div className="flex items-center mb-4">
                  <input name={item.question} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" type='radio' value={ans} />
                  <label className="text-sm font-medium text-gray-900 ml-2 block">{ans} <br/> </label>
                  </div>
                )
            })}
              
            
            </>
          )
        })}
    </div>
    </div>
    </>
  )
};

export default Questions;