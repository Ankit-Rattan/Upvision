import React from 'react'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'
import "../Styles/TeamCard.css"

const TeamCard = (prop) => {
  return (
    <>
      <div className='text-slate-100 bg-zinc-900 hover:translate-y-2 w-fit p-[1rem] m-auto rounded-md hover:shadow-lg shadow-md hover:shadow-emerald-400 duration-500 mb-[1rem]'>
        {/* Pic */}
        <div className=''>
          <img className='rounded-tl-3xl rounded-br-3xl image h-[16em] w-[16rem]' src={prop.img} alt='Profile Image'/>
        </div>
        {/* Name */}
        <div>
          <p className='mt-[.5rem] namefont text-center text-2xl'>{prop.name}</p>
        </div>
        {/* Desig */}
        <div>
          <p className='text-center desigfont'>{prop.desig}</p>
        </div>
        {/* Social */}
        <div className='mt-[.5rem] flex justify-center gap-10'>
          <div>
            <a className='hover:shadow-md hover:opacity-80 duration-500' href={prop.linkedin}>
              <img className='h-[2rem]' src={linkedin} alt='linkedin'/>
            </a>
          </div>
          <div>
            <a className='hover:shadow-md hover:opacity-80 duration-500' href={prop.email}>
              <img className='h-[2rem]' src={email} alt='linkedin'/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamCard
