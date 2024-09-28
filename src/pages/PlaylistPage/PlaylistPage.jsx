import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistPage = () => {
  return (
    <div className='p-4 w-full h-full bg-black rounded-xl overflow-hidden'>
      <div className='flex w-full justify-between'>
        <h3 className='text-white font-medium '>Playlist</h3>
        <Link to='/'><i class='bx bx-arrow-back'></i></Link>
      </div>
    </div>
  )
}

export default PlaylistPage