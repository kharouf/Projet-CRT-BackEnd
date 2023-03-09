import React, { useState } from 'react'
import Navbar from '../Navbar'
import "./style/admin.css"

import logo from "../../assets/images/logo.png";
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import Login from '../Login';
import Home from '../Home';
import About from '../About';
import AddEvenement from './evenements/AddEvenement';







const Admin = () => {
  const user = useSelector(state => state.user.user)
  // open and close login
  const [opendash, setOpendash] = useState(false);
  const [openuser, setOpenuser] = useState(false);
  const [openevent, setOpenevent] = useState(false);
  const [opendfamil, setOpenfamil] = useState(false);
  const [openbenevole, setOpenbenevole] = useState(false);
  const [opentogel, setOpentogel] = useState(false);
  // const SetTogel = () => {
  //   setOpendash(!opendash);
  // };


  return (
    <>
      <div className="container-dashbord">
        <div className="navbar-dashbord">
          {/* <img src={logo} alt="" width={"70px"} height={"70px"} onClick={() => setOpentogel(!opentogel)}/>
          {opentogel ?
            <div class="dropdown" >
              
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Icon icon="ri:logout-circle-line" color="red" width="25" height="25" hFlip={true} />
               <a class="dropdown-item" href="#">تسجيل خروج</a>
                
                
              </div>
            </div>
            :null} */}
            {/* <Navbar /> */}
        </div>
        <div className="siedbar-dashbord">
          <div className="sidebar-login">
            {/* <img src={logo} alt="" width={"100px"} height={"100px"} /> */}
            <h1>wala</h1>
          </div>

          <div className="sidebar-crud">

            <div className='sidebar__menu__item' >

              <Icon icon="bx:home" color="red" width="50" height="50" />
              <Link to="/about" relative="path">
                <h1>لوحة القيادة</h1></Link>
            </div>
            <div className='sidebar__menu__item__icon'>


            </div>


          </div>
          <div className="sidebar-crud">

            <div className='sidebar__menu__item' onClick={() => setOpenuser(!openuser)}>

              <Icon icon="mdi:user" color="red" width="50" height="50" />

              <h1>مستخدم</h1>
            </div>
            {openuser ?
              <div className='sidebar__menu__item__icon' >

                <Link>Add User</Link>
                <Link>Add User</Link>
                <Link>Add User</Link>
                <Link>Add User</Link>
              </div> : null}



          </div>
          <div className="sidebar-crud">

            <div className='sidebar__menu__item' onClick={() => setOpenbenevole(!openbenevole)}>

              <Icon icon="mdi:user-group" color="red" width="50" height="50" />

              <h1>متطوع</h1>
            </div>
            {openbenevole ?
              <div className='sidebar__menu__item__icon' >

                <Link>Add User</Link>
                <Link>Add User</Link>
                <Link>Add User</Link>
                <Link>Add User</Link>
              </div> : null}



          </div>
          <div className="sidebar-crud">

            <div className='sidebar__menu__item' onClick={() => setOpenfamil(!opendfamil)}>

              <Icon icon="mdi:user-heart" color="red" width="50" height="50" />

              <h1>أصحاب الحق</h1>
            </div>
            {opendfamil ?
              <div className='sidebar__menu__item__icon' >

                <Link>Add User</Link>
                <Link>Add User</Link>
                <Link>Add User</Link>
                <Link>Add User</Link>
              </div> : null}



          </div>
          <div className="sidebar-crud">

            <div className='sidebar__menu__item' onClick={() => setOpenevent(!openevent)} >

              <Icon icon="uil:file-plus-alt" color="red" width="50" height="50" />

              <h1>أخبار & نشاطات</h1>

            </div>
            {openevent ?
              <div className='sidebar__menu__item__icon' >
                <div className="links">

                  <Link id='text-crud' to="/Addevent">إضافة نشاط</Link>
                  <Icon icon="mdi:user-add" color="green" width="25" height="25" />
                </div>
                <div className="links">

                  <Link text-crud to="/Addevent">إضافة نشاط</Link>
                  <Icon icon="mdi:user-add" color="green" width="25" height="25" />
                </div>
                <div className="links">

                  <Link text-crud to="/Addevent">إضافة نشاط</Link>
                  <Icon icon="mdi:user-add" color="green" width="25" height="25" />
                </div>
                <div className="links">

                  <Link text-crud to="/Addevent">إضافة نشاط</Link>
                  <Icon icon="mdi:user-add" color="green" width="25" height="25" />
                </div>


              </div> : null}



          </div>
        </div>

        <div className="contenu-dasbord">
          <Routes>
            <Route exact path="/Addevent" element={<AddEvenement />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>


        </div>
      </div>












    </>
  )
}

export default Admin