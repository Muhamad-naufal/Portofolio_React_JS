import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return(
    <section id='contact' className='py-16 lg:section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          {/* text */}
          <motion.div
          variants={fadeIn('up',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Kontak</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Silahkan Hubungi<br /> Saya
              </h2>
            </div>
          </motion.div>
          
          {/* form */}
          <motion.div
          variants={fadeIn('down',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}}  
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            {/* inputan */}
            <input className='bg-transparent border-b py-3
             outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Email Kamu' />
             <input className='bg-transparent border-b py-3
             outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Nama Kamu' />
             <textarea className='bg-transparent border-b py-12
             outline-none w-full resize-none mb-12 placeholder:text-white focus:border-accent transition-all' placeholder='Pesan Kamu'></textarea>
             <input type='hidden' name='noWa' value='6282133887594'/>
             <button className='btn btn-lg'>Kirim</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
