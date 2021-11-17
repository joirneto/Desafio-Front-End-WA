import React, {useState} from 'react';
import Link from 'next/link';




const Index = () =>{
  const [num, setNum] = useState('');

  const onChange = evt =>{
    const value = evt.target.value
    setNum(value)
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
        <input className ="w-full sm:w-2/6 m-2 p-4 text-lg text-center bg-gray-100 rounded-full border" type="text" name='num' placeholder="NUMBER OF QUESTIONS" value={num} onChange={onChange}/>
        <Link href ={ { pathname: '/questions', query: { num: num } }}>
      <a className="w-full sm:w-2/6 my-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
      REQUEST!
      </a>
    </Link>
        </div>
    </div>
     </section>
     </>
  )
}

export default  Index