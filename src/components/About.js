import React from 'react'
import { Link } from 'react-router-dom'
import md from '../images/md.png'

export const About = () => {
  return (
    <div className='pt-20  leading-loose tracking-wide'>
     <div className='flex pb-40 flex-col lg:flex-row p-8 sm:p-20  justify-between bg-brown-5 text-slate-50' >
        <div className='pt-10 ' >
          <h3 className='mb-5 text-2xl text-brown-1 tracking-wider ' >About Us</h3>
          <p className='mb-5'>
            Chowdhury MFG has been operating in Dubai for over 25 years
            with the Managing Director, Abdul Gani Chowdhury, at the helm of the operation.
            He has worked with industry experts all over the world to deliver
            products of the highest quality, matching above industry standards.
          </p>
          <p className='mb-5'>
            We have over fifteen embroidery machines and have recently
            expanded to two different locations to increase our
            production value and be able to offer better services to
            our clients, and cater to a wider market.
          </p>
          <button className='hover:bg-brown-2 duration-300 mt-5 rounded px-5 py-3 bg-brown-3 text-white ' > <Link to='/contact' >Contact Us</Link> </button>
        </div>
        <img src={md} alt="Abdul Gani Chowdhury" className='md:w-max w-full h-full lg:mt-10 sm:ml-20 rounded self-center lg:self-auto hidden lg:block'/>
      </div>
      </div>
  )
}
