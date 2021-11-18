import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Alert from "../components/Alert";


const Index = () =>{
  const [num, setNum] = useState('');
  const [alertQuestionnaire, setAlertQuestionnaire] = useState(false)
  const [alert, setAlert] = useState(false)
  const router = useRouter()

  useEffect(()=>{
    let existingQuestionnaire = localStorage.getItem('questions');
    if(existingQuestionnaire !== null){
      setAlertQuestionnaire(true)
    }
  },[]) 

  const onChange = evt =>{
    const value = evt.target.value
    setNum(value)
  }

  const save = () =>{
    if(num.length===0 || isNaN(num)){
      setAlert(true)
    }else{
      router.push({
        pathname: '/questions',
        query: { num: num },
      })
    }
  }
  
  return(
    <>
     <section className="bg-indigo-600 p-2">
       <div className="w-full container mx-auto my-4 flex flex-col justify-center bg-white leading-none ${props.textColor} rounded-lg p-2 shadow text-teal text-sm">
      <div className="m-2 flex flex-col sm:flex-row justify-center">
        <span className="inline-flex text-3xl m-1 sm:m-0 bg-indigo-800 text-white rounded-full h-10 px-8 justify-center items-center">
            Hello!
        </span>
        <span className="inline-flex text-3xl px-2 text-gray-700 text-center">
          CHOOSE HOW MANY QUESTIONS YOU WANT TO ANSWER:
        </span>
        </div>
        <div className ="flex flex-col items-center">
        <input className ="w-full sm:w-2/6 m-2 p-4 text-lg text-center bg-gray-100 rounded-lg border" type="text" name='num' placeholder="NUMBER OF QUESTIONS" value={num} onChange={onChange}/>
        <button className="w-full sm:w-2/6 my-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" onClick={save}>SUBMIT ANSWERS</button>
    {alertQuestionnaire && (
      <Link href ={'/report'}>
        <a className="w-full sm:w-2/6 my-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
        There is a questionnaire already carried out. Click here to see the fix.
        </a>
      </Link>
    )}
    {alert && (
    <Alert msg = {'ENTER A VALID NUMBER'}/>
    )}
        </div>
    </div>
     </section>
     </>
  )
}

export default  Index