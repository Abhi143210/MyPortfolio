// import React, { useState, useEffect } from 'react';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// // import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
// import './Education.scss';

// const Education = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [educations, setEducations] = useState([]);
// //   const [brands, setBrands] = useState([]);

//   const handleClick = (index) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const query = '*[_type == "educations"]';
//     // const brandsQuery = '*[_type == "brands"]';

//     client.fetch(query).then((data) => {
//       console.log(data)

//       setEducations(data);
//     });

//     // client.fetch(brandsQuery).then((data) => {
//     //   setBrands(data);
//     // });
//   }, []);

//   const test=educations[currentIndex];

//   return (
    
//     <>
    
            

//     {educations.length && (
//       <>
//             <h2 className="head-text">Education<br/></h2>

//         <div className="app__education-item app__flex">
//           {/* <img  src={urlFor(test.imgurl)} alt="educations" /> */}
        
//           <div className="app__education-content">
//             <p className="p-text">{test.degree}</p>
//             <div>
//               <h4 className="bold-text">{test.collage_school}</h4>
//               <h5 className="p-text">{test.stream}</h5>
//               <h5 className="p-text">{test.year}</h5>

//             </div>
//           </div>
//         </div>

//         <div className="app__education-btns app__flex">
          
//           <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? educations.length - 1 : currentIndex - 1)}>
//             <HiChevronLeft />
//           </div>

//           <div className="app__flex" onClick={() => handleClick(currentIndex === educations.length - 1 ? 0 : currentIndex + 1)}>
//             <HiChevronRight />
//           </div>
//         </div>
//       </>
//     )}

//     {/* <div className="app__education-brands app__flex">
//       {brands.map((brand) => (
//         <motion.div
//           whileInView={{ opacity: [0, 1] }}
//           transition={{ duration: 0.5, type: 'tween' }}
//           key={brand._id}
//         >
//           <img src={urlFor(brand.imgUrl)} alt={brand.name} />
//         </motion.div>
//       ))}
//     </div> */}
//   </>

//   )
// }

// export default AppWrap(
//     MotionWrap(Education, 'app__Education'),
//     'education',
//     'app__primarybg',
//   );