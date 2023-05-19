import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Services = () => {
  return(
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
          variants={fadeIn('up',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex-1 lg:bg-bottom bg-no-repeat lg:bg-services mix-blend-lighten mb-12 lg:mb-0S'>
            <h2 className='h2 text-accent mb-6'>Experience</h2>
            <h3 className='h3 max-w-[455px] mb-10'>Saya adalah seorang programmer pemula yang mencari pengalaman pada dunia kerja</h3>
            <button className='btn btn-sm'>Lihat Sertifikat</button>
          </motion.div>
          {/* service */}
          <motion.div 
          variants={fadeIn('down',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex-1'>
            {/* service list */}
            <div>
              <div>
                <div className='max-w-[476px] -mt-3 border-b border-white/20 mb-[38px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>Google Certificates : Fundamentals of Digital Marketing</h4>
                  <p className='font-secondary leading-tight mb-4'>Kursus online dari GOOGLE yang berfokus untuk mengembangkan keterampilan seseorang dalam pengembangan bisnis melalui Digital Marketing.</p>
                </div>
                <div className='max-w-[476px] -mt-3 border-b border-white/20 mb-[38px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>Coursera Certificates : Python for Data Science, AI & Development</h4>
                  <p className='font-secondary leading-tight mb-4'>Kursus online dari IBM (The International Business Machines Corporation) yang berfokus untuk pembelajaran bahasa pemrograman python untuk pengembangan data science, AI dan development.</p>
                </div>
                <div className='max-w-[476px] -mt-3 pt-4 border-b border-white/20 mb-[38px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>AWS Certificates : Solutions Architect Learning Plan</h4>
                  <p className='font-secondary leading-tight mb-4'>Kursus dari AWS (Amazon Web Services) yang akan membantu mengembangkan keterampilan teknis Anda untuk merancang arsitektur yang tangguh, berkinerja tinggi, aman, dan hemat biaya di AWS.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
