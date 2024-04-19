import React from 'react'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'

const TeamCardSen = (prop) => {
  return (
    <>
      <div className='bg-zinc-600 hover:translate-y-2 text-gray-300 w-fit p-[1rem] shadow-md shadow-emerald-400 rounded-md mb-[1rem ] hover:shadow-md duration-500'>

    {/* Pic */}
    <div className=''>
      <img className=' rounded-full h-[18em] w-[17.5em] mx-[1rem]' src={prop.img} alt='Profile Image'/>
    </div>

    {/* Name */}
      <div>
        <p className='mt-[.5rem] namefont text-center text-2xl'>{prop.name}</p>
      </div>
      {/* Desig */}
      <div><p className='text-center desigfont'>{prop.desig}</p></div>
      {/* Social */}
      <div className='mt-[1rem] flex justify-center gap-10'>
        <div>
          <a className='hover:shadow-md hover:opacity-80 duration-500' href={prop.linkedin}> <img className='h-[2rem]' src={linkedin} alt='linkedin'  /></a>
        </div>
        <div> 
          <a className='cursor-pointer hover:shadow-md hover:opacity-80 duration-500' href={prop.email}><img className='h-[2rem]' src={email} alt='email' /></a>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default TeamCardSen
