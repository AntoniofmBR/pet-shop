import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { InstagramLogo, YoutubeLogo, XLogo, FacebookLogo } from '@phosphor-icons/react'

import logo from '../assets/png/logo.png'

export function Footer () {
  return (
    <footer className='bg-blues-blue_300 flex flex-col justify-center items-center w-full p-3 absolute gap-4' >
      <section className='w-full flex justify-between items-center' >
        <motion.img
          src={logo}
          alt="logo"
          className='lg:h-32 md:h-30 sm:h-0 w-auto'
          whileHover={{ scale: 1.1 }}
        />

        <div className='flex gap-7 lg:text-2xl md:text-2xl sm:text-sm font-bold' >
          <Link
            to='homePage'
            smooth={ true }
            duration={ 500 }
          >
            <motion.button
            whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.button>
          </Link>

          <Link
            to='aboutPage'
            smooth={ true }
            duration={ 500 }
          >
            <motion.button
            whileHover={{ scale: 1.1 }}
            >
              Sobre nós
            </motion.button>
          </Link>

          <Link
            to='productsPage'
            smooth={ true }
            duration={ 500 }
          >
            <motion.button
            whileHover={{ scale: 1.1 }}
            >
              Produtos
            </motion.button>
          </Link>

          <Link
            to='contactPage'
            smooth={ true }
            duration={ 500 }
          >
            <motion.button
            whileHover={{ scale: 1.1 }}
            >
              Contato
            </motion.button>
          </Link>
        </div>

        <div className='flex gap-4' >
          <motion.div 
            className='lg:h-12 lg:w-12 md:h-10 md:w-10 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-gradient-to-r from-yellows-yellow_100 via-pinks-pink_100 to-purples-purple_200'
            whileHover={{ scale: 1.07 }}
          >
            <InstagramLogo
              weight='bold'
              className='lg:h-7 lg:w-7 md:h-6 md:w-6 sm:h-4 sm:w-4'
            />
          </motion.div>

          <motion.div
          className='lg:h-12 lg:w-12 md:h-10 md:w-10 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-reds-red_100'
          whileHover={{ scale: 1.07 }}
          >
            <YoutubeLogo
              weight='bold'
              className='lg:h-7 lg:w-7 md:h-6 md:w-6 sm:h-4 sm:w-4'
            />
          </motion.div>

          <motion.div 
          className='lg:h-12 lg:w-12 md:h-10 md:w-10 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-grays-gray_500'
          whileHover={{ scale: 1.07 }}
          >
          <XLogo
            weight='bold'
            className='lg:h-7 lg:w-7 md:h-6 md:w-6 sm:h-4 sm:w-4'
          />
          </motion.div>

          <motion.div
          className='lg:h-12 lg:w-12 md:h-10 md:w-10 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-blues-blue_200'
          whileHover={{ scale: 1.07 }}
          >
          <FacebookLogo
            weight='bold'
            className='lg:h-7 lg:w-7 md:h-6 md:w-6 sm:h-4 sm:w-4'
          />
          </motion.div>
        </div>
      </section>

      <section className='w-full flex justify-between items-center p-2 border-t-2 border-whites-white_200' >
        <h1 className='font-bold lg:text-base md:text-base sm:text-xs' >
          © 2024 Todos os direitos reservados
        </h1>

        <h1 className='font-bold lg:text-base md:text-base sm:text-xs' >
          Code by Antoniofm
        </h1>
      </section>
    </footer>
  )
}