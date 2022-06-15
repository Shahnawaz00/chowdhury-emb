import React from 'react'
import Slider from 'react-slick';
import barudan from '../images/barudan.png'
import tajima2 from '../images/tajima2.png'
import swf from '../images/swf.png'


export const Design = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
      autoplaySpeed: 2000
        
      };
  return (
    <div className='sm:pt-20 pt-14 pb-10  bg-white tracking-wider ' >
        <div className='w-full sm:mt-5 p-7 sm:p-10 bg-brown-5 flex flex-col items-center'>
          <h2 className='text-slate-50 text-3xl'> Our Design</h2>
        </div>
        <Slider {...settings} className='  '>
            <div  >
              <div className='flex flex-col items-center px-10 pb-10 pt-20'>
                <img src={swf} alt="" className=' ' />
              </div>
            </div>
            <div>
              <div className='flex flex-col items-center px-10  pb-10 pt-20'>
               <img src={barudan} alt="" />
              </div> 
            </div>
            <div>
              <div className='flex flex-col items-center px-10  pb-10 pt-20'>
               <img src={tajima2} alt="" />
              </div>            
            </div>
        </Slider>
      </div>
  )
}
