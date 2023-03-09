import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
// import * as React from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './scss/App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Principes from './components/Principes';
import Programs from './components/Programs';
import Comite from './components/Comite';
import Evenements from './components/Evenements';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/dashboard/Admin';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout, userCurrent } from './components/JS/userSlice/userSlice';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoutes/PrivateRoutes';
import AdminRoute from './components/PrivateRoutes/AdminRoute';
import AddEvent from './components/dashboard/AddEvent';


function App() {
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent())
    }


  }, [])


  return (
    <>

      {/* <Admin/> */}
      {/* <AddEvent/> */}

      <Navbar />
   <Home/>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Admin />} />
        
      </Routes>
      <About />
      <Evenements />
      <Comite />
      <Principes />
      <Programs />
      <Contact />
      <Footer />

{/* <Route exact element={<AdminRoute />}>
          <Route exact path="/admin" element={<Admin />} />
        </Route>{""} */}
        {/* <Route exact path="/" element={<Home/>} /> */}
      

      

      {/* <Route exact element={<PrivateRoute/>}>
<Route exact path="/profil" element={<Profile />} /> 
</Route> */}

      {/* <Admin/> */}
      {/* <AddEvent/> */}
      {/* <Navbar />
      <Home />
      <About />
      <Evenements />
      <Comite />
      <Principes />
      <Programs />
      <Contact /> 
      <Footer />  */}




    </>
  );
}

export default App;
