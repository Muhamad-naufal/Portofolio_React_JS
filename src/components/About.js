import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.3}}  
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          {/* text */}
          <motion.div
          variants={fadeIn('left',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}}  
          className='flex-1'>
            <h2 className='h2 text-accent'>Tentang Saya.</h2>
            <h3 className='h3 mb-4'>Developer Beginner </h3>
            <p className='mb-6'>
            Saya adalah mahasiswa Semester 6 yang memiliki keahlian dalam bidang Informatika dan dapat dipertanggung jawabkan secara penuh. Memiliki kedisiplinan tinggi dan keuletan yang dapat ditingkatkan dalam pekerjaan individual maupun kerja kelompok dalam bentuk tim.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={60} duration={5} /> : null}
                  /100               
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Bahasa Pemrograman<br /> HTML 5
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={50} duration={5} /> : null}
                  /100               
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Bahasa Pemrograman<br /> CSS
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={30} duration={5} /> : null}
                  /100               
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Bahasa Pemrograman<br /> Laravel
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
