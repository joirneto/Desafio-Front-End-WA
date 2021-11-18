import React, {useState} from "react";
import {getQuestions} from '../lib/apiQuestions';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Alert from "../components/Alert";






const Questions = () =>{
  
  const [questions, setQuestions] = useState([]);
  const [success, setSuccess] = useState(false)
  const [alert, setAlert] = useState(false)
  
  const router = useRouter()
  const num = router.query.num;
  const questionsConverted = [];
  const questionsCorrects = [];
  
  

  const [form, setForm] = useState ([]);

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]:value
      
    }))

  }

  const onClick = async () =>{
    const response = await getQuestions(num)
    setQuestions(response)
    setSuccess(true)
  }

  const save = async () => {
   
     if(Object.keys(form).length !== questions.length){

      setAlert(true)
     

    }else{
      localStorage.setItem('form', JSON.stringify(questionsConverted));
      localStorage.setItem('formCorrect', JSON.stringify(questionsCorrects));
      localStorage.setItem('formUser', JSON.stringify(form));
      router.push('/report')
      setAlert(false)
    } 
    
    

    
  }

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

      const aux2 = {
        question: question.question.replace(/&quot;/g,' ' ).replace('&#039;',7).replace("&eacute;", 'e').replace(/&amp;/, '&'),
        answers: question.correct_answer.replace(/&quot;/g,' ' ).replace('&#039;',7).replace("&eacute;", 'e').replace(/&amp;/, '&')
      }

      questionsConverted.push(aux1)
      questionsCorrects.push(aux2)
      
    });

  }
  return(
    <>
    <div className="bg-indigo-600 p-2">
      <div className=" w-full container mx-auto my-4 flex flex-col justify-center items-center  bg-white leading-none ${props.textColor} rounded-lg p-2 shadow text-teal text-sm">
      <div className="w-full container mx-auto flex flex-col sm:flex-row justify-center items-center" >
      <button onClick={onClick} type="button" className="w-full sm:w-3/12 m-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
      START
      </button>
      <Link href ='/'>
      <a className="w-full sm:w-3/12 m-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
      CANCEL
      </a>
    </Link>
      </div>
      {success && (
    <section className='w-full sm:w-9/12 p-4 m-4 flex flex-col items-center justify-center bg-gray-100 rounded-lg border'>
    {questionsConverted.map((item, index) =>{
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
    )}
    
    {success && (
    <button className="w-full sm:w-3/12 m-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" onClick={save}>SUBMIT ANSWERS</button>
    )}
    {alert && (
    <Alert/>
    )}
    </div>
    </div>
    </>
  )
};

export default Questions;