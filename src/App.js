import React from 'react';
import { About,Testimonial,Footer,Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss'
// import Educations from './container/Education/Education';
// import Testimonial from './container/Testimonial/Testimonial'
const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Testimonial/>
        <Skills/>
        <Footer/>
        
    </div>
  );
}

export default App;
