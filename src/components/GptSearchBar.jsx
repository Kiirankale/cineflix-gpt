import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.lang)
    
    
    return (
        <div className='pt-[15%]'>
            <form action="" className='w-6/12 flex mx-auto gap-4 bg-black py-3 px-3 text-white'  >
                <input className='w-full px-3 rounded bg-white text-gray-700 py-2' type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='px-6 py-2 rounded cursor-pointer bg-green-300 text-white'>{lang[langKey].search}</button>
            </form>


        </div>
    )
}

export default GptSearchBar


