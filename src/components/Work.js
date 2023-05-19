import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return(
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
          variants={fadeIn('left',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Project Terakhir<br />
                Saya.
              </h2>
              <p className='mx-w-sm mb-16'>
                Beberapa bulan terakhir saya membuat beberapa project yang akan menambah pengalaman saya. Saya sangat berminat dalam dunia IT ini. Project yang ada adalah hasil beberapa uji coba dan tugas dari perkuliahan.
              </p>
            </div>
            {/* image Project 1 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='Project Pertama' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>React JS and Tailwind CSS</span></div>
              {/* title */}
              <di className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'v>
                <span className='text-xl text-white'>Portofolio Website Using React JS and Tailwind CSS</span>
              </di>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex-1 flex flex-col gap-y-10'>
            {/* image Project 2 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='Project Pertama' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Laravel</span></div>
              {/* title */}
              <di className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'v>
                <span className='text-xl text-white'>Portofolio Website and CRUD With Laravel</span>
              </di>
            </div>
            {/* image Project 3 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='Project Pertama' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Data Science Python</span></div>
              {/* title */}
              <di className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'v>
                <span className='text-xl text-white'>Term Deposit Prediction</span>
              </di>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
