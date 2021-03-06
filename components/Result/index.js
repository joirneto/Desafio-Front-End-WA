import React from "react";
import {calcWidthCss} from '../../lib/calcWidthCss'

const Result = ({total, right, errors}) => {
    
    const convertRights = calcWidthCss(right/total*100)
    const convertErros = calcWidthCss(errors/total*100)

    return(
    <div className="shadow-lg rounded-xl w-60 md:w-1/2 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden">
        <div className="w-full h-full block">
            <p className="text-indigo-700 dark:text-white  text-3xl font-light mb-4">
            CORRECTION
            </p>
            <div className="flex items-center justify-between text-gray-400 text-2xl">
                <p>
                    All Questions
                </p>
                <p>
                    {total}
                </p>
            </div>
            <div className="w-full h-2 bg-indigo-100 rounded-full mb-4">
                <div className={`w-full h-full text-center text-xs text-white bg-blue-400 rounded-full`}>
                </div>
            </div>
            <div className="flex items-center justify-between text-gray-400 text-2xl">
                <p>
                    RIGHTS
                </p>
                <p>
                    {right}/{total}
                </p>
            </div>
            <div className="w-full h-2 bg-indigo-100 rounded-full mb-4">
                <div className={
                    right === 0 ?
                    `w-0 h-full text-center text-xs text-white bg-green-400 rounded-full`:
                    `w-${convertRights} h-full text-center text-xs text-white bg-green-400 rounded-full`
                }>
                </div>
            </div>
            <div className="flex items-center justify-between text-gray-400 text-2xl">
                <p>
                    ERRORS
                </p>
                <p>
                {errors}/{total}
                </p>
            </div>
            <div className="w-full h-2 bg-blue-100 rounded-full mb-4">
            <div className={
                    errors === 0 ?
                    `w-0 h-full text-center text-xs text-white bg-red-400 rounded-full`:
                    `w-${convertErros} h-full text-center text-xs text-white bg-red-400 rounded-full`
                }>
                </div>
            </div>
            
        </div>
</div>
)
}

export default Result;