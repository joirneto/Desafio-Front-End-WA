import React, {useState, useEffect} from "react";
import Buttons from "../components/Button";
import {getQuestions} from '../lib/apiQuestions';
import { useRouter } from 'next/router';


const Questions = () =>{
  const [questions, setQuestions] = useState([]);
  const router = useRouter()
  const num = router.query.num;
  const questionsX = [];

  const [form, setForm] = useState ([]);

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]:value
      
    }))

  }

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
      let answersAll = []
      answersAll.push(question.correct_answer.replace(/&quot;/g,' ' ).replace('&#039;',7).replace("&eacute;", 'e').replace(/&amp;/, '&'))
      
      for(let i=0; i<question.incorrect_answers.length;++i){
        answersAll.push(question.incorrect_answers[i].replace(/&quot;/g,' ' ).replace('&#039;',7).replace("&eacute;", 'e').replace(/&amp;/, '&'))
      }
      const aux1 = {
        question: question.question.replace(/&quot;/g,' ' ).replace('&#039;',7).replace("&eacute;", 'e').replace(/&amp;/, '&'),
        answers: answersAll
      }

      questionsX.push(aux1)
      
    });

  }
 
 console.log("OI = ", form)
  return(
    <>
    <div className="bg-indigo-600 p-2">
      <div className=" w-full container mx-auto my-4 flex flex-col justify-center items-center  bg-white leading-none ${props.textColor} rounded-lg p-2 shadow text-teal text-sm">
    <Buttons></Buttons>
    <section className='w-full sm:w-9/12 p-4 flex flex-col items-center justify-center bg-gray-100 rounded-lg border'>
    {questionsX.map((item, index) =>{
          return(
            <section className='flex flex-col items-center'>
            <label className='p-2 m-2 font-bold text-lg' >{`Question ${index+1}: `} {item.question}</label>
            {item.answers.map(ans =>{
                return(
                  <div className="flex items-center mb-4">
                  <input name={item.question} className="h-4 w-4 my-2 border-gray-300 focus:ring-2 focus:ring-blue-300" type='radio' value={ans} onChange={onChange} />
                  <label className="text-sm font-medium text-gray-900 ml-2 block text-lg">{ans} <br/> </label>
                  </div>
                )
            })}         
            </section>
            
          )
        })}
        
    </section>
    <button className="w-full sm:w-3/12 m-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" onClick={''}>SUBMIT ANSWERS</button>
    </div>
    </div>
    </>
  )
};

export default Questions;