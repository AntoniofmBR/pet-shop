import { motion } from 'framer-motion';

import illustration from '../assets/png/dog_homepage.png'
import { ArrowRight } from '@phosphor-icons/react';

export function Homepage () {
  return (
    <main className='lg:h-screen md:h-screen sm:min-h-screen flex lg:flex-row md:flex-row sm:flex-col lg:mt-0 md:mt-0 sm:mt-32 justify-between items-center w-full lg:pl-7 md:pl-7 sm:p-0' >
      <section className='flex flex-col gap-7 lg:text-left md:text-left sm:text-center lg:items-start md:items-start sm:items-center' >
        <h1 className='lg:text-5xl md:text-5xl sm:text-4xl font-bold' >
          Tudo o que <strong className='text-blues-blue_500' > seu pet <br /> precisa </strong>, 
          em um só lugar
        </h1>

        <motion.button
         className='p-5 bg-blues-blue_500 font-bold text-whites-white_200 rounded-md lg:w-2/4 md:w-2/4 sm:w-4/5 flex items-center justify-center gap-2 text-2xl'
         whileHover={{ scale: 1.1, backgroundColor: '#0B0B68' }}
         transition={{
          duration: .3,
          ease: "easeInOut", 
          repeatType: "reverse",
          }}
          onClick={ () => alert('Faça seu login para conferir nossos produtos!') }
        >
           Explore agora
           <motion.svg
            height={30}
            width={30}
            initial={{ x: 0 }}
            whileHover={{ x: 30 }}
            transition={{
              duration: 1,
              ease: "easeInOut", 
              repeatType: "reverse",
            }}
            >
             <ArrowRight size={32} weight='bold' />
            </motion.svg>
        </motion.button>
      </section>
      <section className='h-full lg:w-1/2 md:w-1/2 sm:w-full flex flex-col justify-end items-end' >
        <img
          src={illustration}
          alt="Dog"
          className='h-[90%] w-5/6'
        />
      </section>
    </main>
  )
}