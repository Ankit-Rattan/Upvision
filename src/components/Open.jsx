import React from 'react'
import { Link } from 'react-router-dom'
import "./open.css"
import vid from "../images/Hero_vid.mp4"

const Open = () => {
  return (
    <>
    <div className='open'>
    <div className="Hero_vid">
            <video id="background-video" src={vid} autoPlay loop muted />
        </div>
    <div className='temp mx-[35rem] mt-[10rem]' >
    <a href="https://testupvision.netlify.app/">
      <button className='p-[2rem] text-[#16E6B4] bg-black border-4 border-[#16E6B4] rounded-full hover:shadow-xl hover:shadow-[#16E6B4] duration-500 ease-in-out'>
        <p className='text-4xl font-serif '>
        START NOW
        </p>
      </button>
      </a>
    </div>
    </div>
    </>
  )
}

export default Open
