import React from 'react'
import Slider from 'react-slick';
import design1 from '../images/design1.png'
import design2 from '../images/design2.png'
import design3 from '../images/design3.png'


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
    <div className='sm:pt-20 pt-14 pb-28  bg-white tracking-wider ' >
        <div className='w-full sm:mt-5 p-7 sm:p-10 bg-brown-5 flex flex-col items-center'>
          <h2 className='text-slate-50 text-3xl'> Our Design</h2>
        </div>
        <Slider {...settings} className='  '>
            <div  >
              <div className='flex flex-col items-center px-10 pb-10 pt-20'>
                <img src={design1} alt="" className=' rounded' />
              </div>
            </div>
            <div>
              <div className='flex flex-col items-center px-10  pb-10 pt-20'>
               <img src={design2} alt="" className='rounded' />
              </div>
            </div>
            <div>
              <div className='flex flex-col items-center px-10  pb-10 pt-20'>
               <img src={design3} alt="" className='rounded' />
              </div>
            </div>
        </Slider>
      </div>
  )
}
