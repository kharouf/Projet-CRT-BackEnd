import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './scss/App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import Principes from './components/Principes';
import Programs from './components/Programs';
import Comite from './components/Comite';
import { useRef } from 'react';


function App() {

  return (
    <>

      <Navbar />

      <Home />
      <About />
      <Events />
      <Comite />
      <Principes />
      <Programs />
      <Contact />
      <Footer />




      {/* <div>
      <section className='about' id='about'>
      <About/>
      </section>
      <section className='event' id='event'>
      <Events/>
      </section>
      <section className='comite' id='comite'>
      <Comite/>
      </section>
      <section className='our-principles' id='our-principles'>
      <Principes/>
      </section>
      <section className='our-programs' id='our-programs'>
      <Programs/>
      </section>
      <section className='contact' id='contact'>
       <Contact/>
      </section>
    </div> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
