import React, { useEffect } from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
 

  return (
    <div>
      <div className="absolute w-full -z-10">
        <img className="w-full"
          src={BG_IMG}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />

    </div>
  )
}

export default GptSearch
