import React from 'react'
import './Header.scss';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import {AppWrap} from '../../wrapper'
import { AiFillGithub,AiFillFileImage } from 'react-icons/ai';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
  },
};
const handleDownloadResume = () => {
  // Code to trigger the resume download
  // For simplicity, let's assume the resume file is located in the public folder
  const downloadLink = document.createElement('a');
  downloadLink.href = process.env.PUBLIC_URL + '/Abhishek_IT_resume.pdf';
  downloadLink.download = 'Abhishek_IT_resume.pdf';
  downloadLink.click();
};
const handleButtonClick = () => {
  window.open('https://github.com/Abhi143210', '_blank');
};
const Header = () => 
   (
    <div  className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Abhishek</h1>
            </div>
          </div> <br />

        
          <div className="resume-button">
          <span><button onClick={handleDownloadResume}>                    
                       <AiFillFileImage/>
            Download Resume</button></span>
          </div>
          
          <div className="resume-button">
          <span><button onClick={handleButtonClick}>
          <AiFillGithub /> GutHub</button></span>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Java Developer</p>

          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />

      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
          {[images.flutter, images.redux,images.sass].map((circle, index)=>(
         <div className="circle-cmp app__flex" key={`circle-${index}`}>
           <img src={circle} alt="profile_bg" />
         </div>
         ))}
      </motion.div>
       
    </div>
  )


export default AppWrap(Header,'home')
