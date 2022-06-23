import React from 'react'
import barudan from '../images/barudan.png'
import tajima2 from '../images/tajima2.png'
import swf from '../images/swf.png'

export const Machinery = () => {
  return (
    <div className='  pt-16 sm:pt-20 tracking-wider  ' >
     <div className='flex flex-col pt-5  content-center items-center' >
      <div className="w-full bg-brown-5 flex flex-col items-center p-7 sm:p-10">
      <h1 className='text-slate-50 text-3xl' >Our Machinery</h1>
      </div>
      {/* barudan  */}
      <div className='p-7 sm:p-20 flex flex-col items-center  w-full ' >
        <h3 className='text-brown-4 text-2xl mb-5 sm:mb-10' >Barudan 18-Head</h3>
        <img src={barudan} alt="barudan embroidery machine" className='rounded ' />
      </div>
      {/* tajima  */}
      <div className='p-7 sm:p-20 flex flex-col items-center  w-full bg-brown-4 '>
        <h3 className='text-slate-50 text-2xl mb-5 sm:mb-10'>Tajima 18-Head</h3>
        <img src={tajima2} alt="tajima embroidery machine" className='rounded '/>
      </div>
      {/* sfw  */}
      <div className='p-7 sm:p-20 flex flex-col items-center  w-full '>
        <h3 className='text-brown-4 text-2xl mb-5 sm:mb-10'>SWF 18-Head</h3>
        <img src={swf} alt="SWF embroidery machine" className='rounded ' />
      </div>
     </div>
    </div>
  )
}
