import React from "react";
import {calcWidthCss} from '../../lib/calcWidthCss'

const Result = ({total, right, errors}) => {
    
    const convertRights = calcWidthCss(right/total*100)
    const convertErros = calcWidthCss(errors/total*100)

    return(
    <div class="shadow-lg rounded-xl w-60 md:w-1/2 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden">
    <a href="#" class="w-full h-full block">
        <div class="w-full">
            <p class="text-indigo-700 dark:text-white  text-3xl font-light mb-4">
            CORRECTION
            </p>
            <div class="flex items-center justify-between text-gray-400 text-2xl">
                <p>
                    All Questions
                </p>
                <p>
                    {total}
                </p>
            </div>
            <div className="w-full h-2 bg-green-100 rounded-full mb-4">
                <div class={`w-${'full'} h-full text-center text-xs text-white bg-indigo-400 rounded-full`}>
                </div>
            </div>
            <div class="flex items-center justify-between text-gray-400 text-2xl">
                <p>
                    RIGHTS
                </p>
                <p>
                    {right}/{total}
                </p>
            </div>
            <div class="w-full h-2 bg-indigo-100 rounded-full mb-4">
                <div class={
                    right === 0 ?
                    `w-0 h-full text-center text-xs text-white bg-green-400 rounded-full`:
                    `w-${convertRights} h-full text-center text-xs text-white bg-green-400 rounded-full`
                }>
                </div>
            </div>
            <div class="flex items-center justify-between text-gray-400 text-2xl">
                <p>
                    ERRORS
                </p>
                <p>
                {errors}/{total}
                </p>
            </div>
            <div class="w-full h-2 bg-blue-100 rounded-full mb-4">
            <div class={
                    errors === 0 ?
                    `w-0 h-full text-center text-xs text-white bg-red-400 rounded-full`:
                    `w-${convertErros} h-full text-center text-xs text-white bg-red-400 rounded-full`
                }>
                </div>
            </div>
            
        </div>
    </a>
</div>
)
}

export default Result;