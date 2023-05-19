import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div class="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:-m-10 lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            
            <motion.h1 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[1] lg:text-[60px]'>
              MUHAMAD NAUFAL<span> BURHANUDDIN BALIT</span>
            </motion.h1>

            <motion.div 
            variants={fadeIn('up',0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}  
            className='mb-6 text-[36px] lg:text-[33px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Saya Adalah</span>
              <TypeAnimation sequence={[
                'Mobile Developer',
                700,
                'Mahasiswa',
                700,
                'Web Developer',
                700,
              ]}
              speed={50}
              wrapper='span'
              className='text-accent'
              repeat={Infinity} />
            </motion.div>

            <motion.p
             variants={fadeIn('up',0.5)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}} 
             className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Saya memiliki keahlian dalam bidang Informatika, terutama pada pengembangan Web Developer dan Mobile Developer. Saya adalah salah satu mahasiswa dari Universitas Amikom Purwokerto yang memiliki segudang prestaso dalam bidang IT.</motion.p>
              <motion.div
              variants={fadeIn('up',0.6)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 pt-4'>
                <a href='#'>
                  <FaYoutube />
                </a>
                <a href='#'>
                  <FaGithub />
                </a>
                <a href='#'>
                  <FaDribbble />
                </a>
              </motion.div>
          </div>
          {/* gambar */}
          <motion.div
          variants={fadeIn('up',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}}  
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[900px]'>
            <img src={Image} alt='Foto Gede' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
