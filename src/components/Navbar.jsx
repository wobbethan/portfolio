import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu,close } from '../assets';
import ewlogo from '../assets/ewlogo.png'

const downloadResume = () => {
  fetch('wobb_ethan_resume.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'wobb_ethan_resume.pdf';
          alink.click();
      })
  })
}

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
     className={`${styles.paddingX} w-full flex
     items-center py-5 fixed top-0 z-20 
     bg-primary`}
     style = {{backgroundColor: '#046e8f'}}     >
      <div className = "w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
        to = "/"
        className = "flex items-center gap-2"
        onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
        }}
        >
          <img src={ewlogo} alt="logo" className = "w-9 h-9 object-contain" />
          <p className = "text-white text-[18px] font-bold cursor-pointer flex">
            Ethan Wobb &nbsp;
            <span className="sm:block hidden"> | Computer Science Undergrad</span>
          
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'  >
          {navLinks.map((link) => (
            <li
            key={link.id}
              className = {`${
                active === link.title 
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick ={() => setActive(link.title)}
            >

              <a href = {`#${link.id}`}>{link.title}</a>
            </li>
          ))
          }
        </ul>
        <div  className = "sm:hidden flex flex-1 justify-end items-center">
          <img
          src={toggle ? close : menu}
          alt='menu'
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
          />
          
          <div className= {`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient 
          absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => (
            <li
            key={link.id}
              className = {`${
                active === link.title 
                ? "text-secondary"
                : "text-white"
              } hover:text-secondary text-[18px] font-poppins font-medium cursor-pointer text-[16px]`}
              onClick ={() => setToggle(!toggle)}
            >

              <a href = {`#${link.id}`}>{link.title}</a>
            </li>
          ))
          }
        </ul>
          </div>

        </div>
        <button
            type = 'download'
            className='word-wrap text-center ml-5 h-12 bg-tertiary py-3 px-4 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            style = {{backgroundColor: '#915eff'}}         
            onClick ={downloadResume}   >
                Download Résumé
            </button>
      </div>
        
    </nav>
  )
}

export default Navbar