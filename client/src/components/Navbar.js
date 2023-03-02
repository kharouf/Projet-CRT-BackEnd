import React, { useRef, useState } from 'react'


import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../scss/navbar.css'
import '../scss/footer.css'
import { FaBars, FaHamburger, FaRegUserCircle } from "react-icons/fa";
import Home from './Home';
import About from './About'
import { links } from './data'
// import { Link } from 'react-scroll'

const Navbar = () => {
  // sow navabr after media query change

  const [isMobile, setIsMobile] = useState(false)

  const handleIsMobile = () => setIsMobile(!isMobile)
  // //////////////////////////////////////////
  
//  change font and color icon
  let iconStyles = { color: "white", fontSize: "2em" };
  let iconStylesmd = { color: "white", fontSize: "2.6em" };
  // /////////////////////////////////////////////

  // open and close login
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
// //////////////////////////////////

  // chnage bacground navbar
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);

  }
  window.addEventListener('scroll', changeNavbar)

// ///////////////////////////////////////////////////////////

  return (
    <>
      <div className={navbar ? 'Navbaractive Navbar' : 'Navbar'}>
        <div className='Navbar-logo'>
          <a href='#' id='logo' ><img src={logo} alt='logo' /> </a>
        </div>
        {/*  */}
       <div className={isMobile?"Navbar-links-active":"Navbar-links"}>
         
          <a className='link'  href="#" >الرئيسية</a>
          <a className='link'  href="#about" >من نحن</a>
          <a className='link' href="#event">الأخبار و النشاطات</a>
          <a className='link' href="#comite">أعضاء الجمعية</a>
          <a className='link' href="#principes">مبادئنا</a>
          <a className='link'  href="#programs" >برامجنا</a>
          <a className='link' href="#contact">إتصل بنا</a>


        </div>
        
        
      

        <div className='Navbar-login' onClick={() => handleOpen()}>

          < FaRegUserCircle style={iconStylesmd}  />
          <h6>تسجيل الدخول</h6>
          {open ?
            <div className="dropdown">

              <Link className='link'>تسجيل الدخول</Link >
              <Link className='link'>تسجيل</Link >
              <Link className='link'>المسؤل</Link >

            </div>
            : null}




        </div>
        <div className="menu-icon"  onClick={()=>handleIsMobile()}>
          <FaBars className='fabars' style={iconStyles} />
        </div>
      </div>


    </>
  )
}

export default Navbar