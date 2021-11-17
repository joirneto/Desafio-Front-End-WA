import React from 'react';

const Index = () =>{
  return(
     <section className="bg-indigo-600 p-2">
       <div className="w-full container mx-auto my-4 flex flex-col justify-center bg-white leading-none ${props.textColor} rounded-full p-2 shadow text-teal text-sm">
      <div className="m-2 flex justify-center items-center">
        <span className="inline-flex text-3xl bg-indigo-800 text-white rounded-full h-10 px-8 justify-center items-center">
            Hello!
        </span>
        <span className="inline-flex text-3xl px-2 text-gray-700">
          CHOOSE HOW MANY QUESTIONS YOU WANT TO ANSWER:
        </span>
        </div>
        <div className ="flex flex-col items-center">
        <input className ="w-2/12 m-2 p-4 text-lg text-center bg-gray-100 rounded-full border" type="text" placeholder="NUMBER OF QUESTIONS"/>
        <button type="button" className="w-2/12 my-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        REQUEST
      </button>
        </div>
    </div>
     </section>
  )
}

export default  Index