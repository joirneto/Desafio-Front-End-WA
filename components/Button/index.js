import React from "react";
import Link from "next/link";

const Buttons = () =>(
      <div class="w-full container mx-auto flex flex-col sm:flex-row justify-center items-center" >
      <button type="button" class="w-full sm:w-3/12 m-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
      START
      </button>
      <Link href ='/'>
      <a className="w-full sm:w-3/12 m-2 p-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
      CANCEL
      </a>
    </Link>
      </div>
)

export default Buttons;