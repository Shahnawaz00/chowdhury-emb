import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import embLogo from '../images/embLogo.png';

export const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);


//   styles
  const h1Styles = 'text-3xl font-light'
  const liStyles = 'px-5 text-brown-3 hover:text-brown-5 duration-300 '

  return (
    <div className="flex items-center justify-between bg-slate-50 py-3 sm:py-5 px-5 sm:px-10 tracking-wider fixed z-10 w-full">
      <Link to="/">
        <img src={embLogo} alt="" className=' pl-3 sm:pl-10  w-full h-full' />
      </Link>
      <nav >
        <section className="MOBILE-MENU flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-2 "
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8  bg-gray-600"></span>
            <span className="block h-0.5 w-8  bg-gray-600"></span>
            <span className="block h-0.5 w-8  bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li onClick={() => setIsNavOpen((prev) => !prev)} className={liStyles}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setIsNavOpen((prev) => !prev)} className={liStyles}>
                <Link to="/machinery">Our Machinery</Link>
              </li>
              <li onClick={() => setIsNavOpen((prev) => !prev)} className={liStyles}>
                <Link to="/design">Our Design</Link>
              </li>
              <li onClick={() => setIsNavOpen((prev) => !prev)} className={liStyles}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li className={liStyles} >
            <Link to="/about">About</Link>
          </li>
          <li className={liStyles} >
            <Link to="/machinery">Our Machinery</Link>
          </li>
          <li className={liStyles} >
            <Link to="/design">Our Design</Link>
          </li>
          <li className={liStyles} >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
        transition: 2s;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: 2s;
      }
    `}</style>
    </div>
  )
}
