import { motion } from 'framer-motion'

import illustration from '../assets/png/dog_about.png'

export function About () {
  return (
    <nav className='min-h-screen w-full flex flex-col items-center justify-between p-7 text-2xl' >
     <h1 className='lg:text-5xl md:text-5xl sm:text-3xl font-bold' >
      Sobre nós
     </h1>

     <div className='flex lg:flex-row md:flex-row sm:flex-col w-full font-semibold gap-5 items-center justify-center' >
        <section className='w-full lg:mt-0 md:mt-0 sm:mt-7' >
          <p className='lg:text-2xl md:text-xl sm:text-base' >
          Somos uma equipe de amantes dos animais dedicada a oferecer os melhores produtos e serviços para o bem-estar do seu pet. Estamos comprometidos em transformar o cuidado com os pets em uma experiência especial para você e seu melhor amigo.
          <br />
          <br />
            Cada detalhe em nosso petshop é pensado para tornar a vida do seu pet mais saudável e feliz. Nosso time está sempre atualizado para oferecer o que há de melhor, seja em produtos, serviços ou dicas personalizadas.
          </p>
        </section>

        <section className='flex items-center justify-center w-full' >
         <motion.img 
           src={illustration}
           alt="illustration"
           className='h-full w-3/4'
           whileHover={{ scale: 1.1 }}
         />
        </section>
     </div>

     <div />
    </nav>
  )
}