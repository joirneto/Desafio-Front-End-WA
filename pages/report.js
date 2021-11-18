import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Result from '../components/Result'

const Report = () => {

  const [questions, setQuestions] = useState([]);
  const [questionsCorrects, setQuestionsCorrects] = useState([]);
  const [questionsUser, setQuestionsUser] = useState([]);
  const [hits, setHits] = useState();
  const router = useRouter()

  function correct(questions, questionsCorrects, questionsUser) {
    let i = 0;
    questions.forEach(item => {
      if (questionsCorrects[item.question] === questionsUser[item.question]) {
        i++
      }
    })
    return i;
  }

  useEffect(() => {
    let questionsTemp = localStorage.getItem('questions');
    let questionsCorrectsTemp = localStorage.getItem('questionsCorrects');
    let questionsUserTemp = localStorage.getItem('questionsUser');
    if (questionsTemp !== null) {
      questionsTemp = JSON.parse(questionsTemp);
      questionsCorrectsTemp = JSON.parse(questionsCorrectsTemp);
      questionsUserTemp = JSON.parse(questionsUserTemp);

      setQuestions(questionsTemp);
      setQuestionsCorrects(questionsCorrectsTemp);
      setQuestionsUser(questionsUserTemp);
      setHits(correct(questions, questionsCorrects, questionsUser))
    }
    else {
      router.push('/');
    }
  }, [hits]);

  return (
    <>
      <div className="bg-indigo-600 p-2">
        <div className=" w-full container mx-auto my-4 flex flex-col justify-center items-center  bg-white leading-none ${props.textColor} rounded-lg p-2 shadow text-teal text-sm ">
          <div className="w-full container mx-auto flex flex-col justify-center items-center" >
            <Result total={questions.length} right={hits} errors={questions.length - hits} />
          </div>
          <section className='w-full sm:w-9/12 p-4 m-4 flex flex-col shadow-lg rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden'>
            {questions.map((item, index) => {
              return (
                <section className='flex flex-col'>
                  <label className='p-2 m-2 font-bold text-lg' >{`Question ${index + 1}: `} {item.question}</label>
                  {item.answers.map(ans => {
                    return (
                      <div className="flex mb-2">
                        <input disabled name={item.question} className="h-4 w-4 my-2 border-gray-300 focus:ring-2 focus:ring-blue-300" type='radio' value={ans} checked={questionsUser[item.question] === ans} />
                        <label className={questionsCorrects[item.question] === ans ? "bg-green-400 font-medium text-gray-900 ml-2 block text-lg" : "bg-red-400 font-medium text-gray-900 ml-2 block text-lg"}>{ans} <br /> </label>
                      </div>
                    )
                  })}
                </section>
              )
            })}
          </section>
          <Link href='/'>
            <a className="w-full sm:w-3/12 m-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              RETURN
            </a>
          </Link>
        </div>
      </div>
    </>
  )
};

export default Report;