import React from 'react'
import { Link } from 'react-router-dom'
import homeimg from '../images/homeimg.png'
import homeimg2 from '../images/homeimg2.png'
import homeimg3 from '../images/homeimg3.png'
import design from '../images/design.png'
import machine from '../images/machine.png'
import money from '../images/money.png'
import tajima from '../images/tajima.png'
import peacock from '../images/peacock.png'


export const Home = () => {

  return (
    <div className='pt-12 tracking-wide leading-loose' >
      <div>
      {/* desktop image  */}
       <img src={homeimg} className='mt-10 hidden xl:hidden sm:flex  ' alt="embroidery" />
       {/* mobile image  */}
       <img src={homeimg2} className='mt-10 sm:hidden flex ' alt="embroidery" />
       {/* 4k image  */}
       <img src={homeimg3} className='mt-10 hidden xl:flex ' alt="embroidery" />
      </div>
      {/* cards  */}
      <div className='flex bg-brown-3 flex-wrap justify-around  ' >
        {/* machines */}
        <div className='flex flex-col items-center m-10 w-full md:w-max' >
          <img src={machine} alt="machine" />
          <p className='mt-5 text-slate-50 tracking-wide'>State of the art machines</p>
        </div>
        {/* design  */}
        <div className='flex flex-col items-center m-10 w-full md:w-max '>
          <img src={design} alt="design" />
          <p className='mt-5 text-slate-50 tracking-wide' >Beautiful custom-made designs</p>
        </div>
        {/* price  */}
        <div className='flex flex-col items-center m-10 w-full md:w-max'>
          <img src={money} alt="money" className='' />
          <p className='mt-5 text-slate-50 tracking-wide'>Best market pricing</p>
        </div>
      </div>
      {/* card descriptions  */}
       {/* machine  */}
      <div className='flex flex-col lg:flex-row p-7 sm:p-20 justify-between bg-slate-50 ' >
        <img src={tajima} alt="tajima" className='md:w-max w-full h-full lg:mt-10 mb-5 rounded self-center lg:self-auto'/>
        <div className='sm:ml-10' >
            <h3 className='mb-5 text-2xl text-brown-4 tracking-wider ' >Our Machinery</h3>
            <p className='mb-5'>
              We boast an incredible line of state-of-the-art industrial embroidery machines.
              They include machines from well known companies such as tajima, barudan, etc.
              They have been tested well against several factors and always held up to the highest standards.
            </p>
            <p className='mb-5'>
               These machines run at up to 1000rpm and give an incredibly refined product 
               that matches industry standards of embroidered clothing. 
               They are equipped with the latest computers that provide high level of control
               to the operator, which allows us to bring only the best product to your hands.
            </p>
            <button className=' hover:bg-brown-3 duration-300  rounded px-5 py-3 bg-brown-5 text-white ' ><Link to='/machinery' >View our machinery</Link></button>
        </div>
      </div>
        {/* design  */}
      <div className='flex flex-col lg:flex-row p-7 sm:p-20  justify-between bg-brown-3 text-slate-50' >
        <img src={peacock} alt="peacock" className='md:w-max lg:w-full lg:h-full lg:mt-10 sm:ml-20 mb-10 rounded self-center lg:self-auto lg:hidden '/>
        <div className='' >
            <h3 className='mb-5 text-2xl text-brown-5 tracking-wider' >Our Design</h3>
            <p className='mb-5'>
              We have cutting edge software technology for embroidery design 
              such as wilcom, and tajima embroidery softwares.
              They give very precise control and offers a wide range of features 
              to fully customize and produce design.
            </p>
            <p className='mb-5'>
            In addition, our designers have over 10 years of industry experience, 
              have worked in numerous types of designs, and produced results 
              for many different type of clothing.
            </p>
            <p className='mb-5' >
              They can bring any concept design to life, and onto your clothing.
            </p>
            <button className='hover:bg-brown-2 duration-300 mt-5 rounded px-5 py-3 bg-brown-5 text-white ' > <Link to='/design' >View our designs</Link> </button>
        </div>
        <img src={peacock} alt="peacock" className='md:w-max w-full h-full lg:mt-10 sm:ml-20 rounded self-center lg:self-auto hidden lg:block'/>
      </div>

      
    </div>
  )
}
