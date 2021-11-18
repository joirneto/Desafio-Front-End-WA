import React, { useState, useEffect } from "react";
import { getQuestions } from '../lib/apiQuestions';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Alert from "../components/alert";

const Questions = () => {

  const [success, setSuccess] = useState(false)
  const [alert, setAlert] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [questionsAnswersCorrects, setQuestionsAnswersCorrects] = useState({});
  const [form, setForm] = useState([]);
  const router = useRouter()
  const num = router.query.num;


  const alertVerify = () => {
    setAlert(false)
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  const onClick = async () => {
    const { questionsConverted, questionsCorrects } = await getQuestions(num)
    setQuestions(questionsConverted)
    setQuestionsAnswersCorrects(questionsCorrects)
    setSuccess(true)
  }

  const save = () => {
    if (Object.keys(form).length !== questions.length) {
      setAlert(true)
    } else {
      localStorage.setItem('questions', JSON.stringify(questions),);
      localStorage.setItem('questionsCorrects', JSON.stringify(questionsAnswersCorrects));
      localStorage.setItem('questionsUser', JSON.stringify(form));
      router.push('/report')
      setAlert(false)
    }
    setTimeout(alertVerify, 3000)
  }

  return (
      <div className="bg-indigo-600 p-2">
        <div className=" w-full container mx-auto my-4 flex flex-col justify-center items-center  bg-white leading-none ${props.textColor} rounded-lg p-2 shadow text-teal text-sm">
          {!success && (
            <div className="w-full container mx-auto flex flex-col sm:flex-row justify-center items-center" >
              <button onClick={onClick} type="button" className="w-full sm:w-3/12 m-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                START
              </button>
              <Link href='/'>
                <a className="w-full sm:w-3/12 m-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                  CANCEL
                </a>
              </Link>
            </div>
          )}
          {success && (
            <section className='w-full sm:w-9/12 p-4 m-4 flex flex-col shadow-lg rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden'>
              {questions.map((item, index) => {
                return (
                  <section className='flex flex-col'>
                    <label className='p-2 m-2 font-bold text-lg' >{`Question ${index + 1}: `} {item.question}</label>
                    {item.answers.map(ans => {
                      return (
                        <div className="flex">
                          <input name={item.question} className="h-4 w-4 my-2 border-gray-300 focus:ring-2 focus:ring-purple-700" type='radio' value={ans} onChange={onChange} />
                          <label className="font-medium text-gray-900 ml-2 block text-lg">{ans} <br /> </label>
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
            <Alert msg={'All questions have to be answered'} />
          )}
        </div>
      </div>
  )
};

export default Questions;