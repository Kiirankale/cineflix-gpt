import React from 'react'

const VideoTitle = ({ title, overview }) => {


  return (
    <div className='pt-[15%] px-8 absolute w-full aspect-video text-white 
bg-linear-to-r from-black/60 via-black/30 to-transparent'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-sm  w-3/12'>{overview}</p>
      <div>
        <button className="text-black bg-white px-5 py-2 mr-2 font-bold rounded-lg hover:opacity-70 cursor-pointer" ><i className="ri-play-large-fill"></i> Play</button>
        <button className='bg-gray-600 px-5 py-2 font-bold rounded-lg hover:opacity-70 cursor-pointer '>More Info</button>
      </div>

    </div>
  )
}

export default VideoTitle
