import ReactModal from 'react-modal'
import { motion } from 'framer-motion'
import { Envelope, LockSimple, User, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link } from 'react-scroll'

import logo from '../assets/png/logo.png'
import { Input } from './input'

export function Header () {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState<boolean>(false)
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = useState<boolean>(false)

  const [ name, setName ] = useState<string>('')
  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')

  function handleOpenLoginModal() {
    setModalRegisterIsOpen(false)
    setModalLoginIsOpen(true)
  }

  function handleCloseLoginModal() {
    setModalLoginIsOpen(false)
  }

  function handleOpenRegisterModal() {
    setModalLoginIsOpen(false)
    setModalRegisterIsOpen(true)
  }

  function handleCloseRegisterModal() {
    setModalRegisterIsOpen(false)
  }

  function handleLogin() {
    if (!email || !password) {
      return alert('❌ Preencha todos os campos para continuar! ')
    }

    alert('❌ Ainda não é possível logar')
  }

  function handleRegister() {
    if (!name || !email || !password) {
      return alert('❌ Preencha todos os campos para continuar! ')
    }

    alert('❌ Ainda não é possível se cadastrar')
  }

  return (
    <header className='flex lg:flex-row md:flex-row sm:flex-col justify-between items-center h-32 w-full px-7 absolute lg:gap-0 md:gap-0 sm:gap-4' >
      <motion.img
        src={logo}
        alt="logo"
        className='h-32 lg:w-auto mds:w-auto sm:w-0'
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

      <motion.button
       className='lg:p-5 md:p-4 sm:p-3 bg-blues-blue_500 font-bold text-whites-white_200 rounded-md w-28 lg:text-xl md:text-xl sm:text-base lg:mb-0 md:mb-0 sm:mb-0'
       whileHover={{ scale: 1.1, backgroundColor: '#0B0B68' }}
       transition={{
        duration: .3,
        ease: "easeInOut", 
        repeatType: "reverse",
        }}
        onClick={ handleOpenLoginModal }
      >
        Login
      </motion.button>

      <ReactModal
        isOpen={ modalLoginIsOpen }
        shouldCloseOnEsc={ true }
        shouldCloseOnOverlayClick={ true }
        onRequestClose={ handleCloseLoginModal }
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        className='relative bg-gray-300 px-6 py-12 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 h-auto flex flex-col items-center justify-between'
      >
        <div className='flex justify-between w-full' >
          <div />

          <h1 className='text-3xl font-bold text-blacks-black_500'>
            Login
          </h1>

          <X
            className='-translate-y-7 lg:h-7 lg:w-7 md:h-6 md:w-6 sm:h-5 sm:w-5 hover:scale-110'
            color='#000'
            weight='bold'
            onClick={ handleCloseLoginModal }
          />
        </div>

        <div className='flex flex-col items-center justify-center gap-2 mt-7 mb-7 lg:w-1/2 md:w-1/2 sm:w-full' >
          <Input
            type='email'
            placeholder='E-mail'
            icon={ Envelope }
            onChange={ (e) => setEmail(e.currentTarget.value) }
            value={ email }
          />
          <Input
            type='password'
            placeholder='Senha'
            icon={ LockSimple }
            onChange={ (e) => setPassword(e.currentTarget.value) }
            value={ password }
          />
          
        </div>
        <motion.button
            className='lg:p-5 md:p-4 sm:p-3 bg-blues-blue_500 font-bold text-whites-white_200 rounded-md w-32 lg:text-xl md:text-xl sm:text-base'
            whileHover={{ scale: 1.1, backgroundColor: '#0B0B68' }}
            transition={{
              duration: .3,
              ease: "easeInOut", 
              repeatType: "reverse",
              }}
            onClick={ handleLogin }
          >
            Login
          </motion.button>

        <div className='flex flex-col items-center justify-center' >
          <p className='text-base font-semibold text-blacks-black_100' >
            Não possui uma conta?
          </p>
          <button
            className='text-blues-blue_500 font-semibold text-sm'
            onClick={ handleOpenRegisterModal }
          >
            Cadastre-se aqui
          </button>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={ modalRegisterIsOpen }
        shouldCloseOnEsc={ true }
        shouldCloseOnOverlayClick={ true }
        onRequestClose={ handleCloseRegisterModal }
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        className='relative bg-gray-300 px-6 py-12 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 h-auto flex flex-col items-center justify-between'
      >
        <div className='flex justify-between w-full' >
          <div />

          <h1 className='text-3xl font-bold text-blacks-black_500'>
            Cadastro
          </h1>

          <X
            size={25}
            color='#000'
            weight='bold'
            onClick={ handleCloseRegisterModal }
            className='-translate-y-7 lg:h-7 lg:w-7 md:h-6 md:w-6 sm:h-5 sm:w-5 hover:scale-110'
          />
        </div>

        <div className='flex flex-col items-center justify-center gap-2 mt-7 mb-7 lg:w-1/2 md:w-1/2 sm:w-full' >
          <Input
            type='text'
            placeholder='Nome'
            icon={ User }
            onChange={ (e) => setName(e.currentTarget.value) }
            value={ name }
          />
          <Input
            type='email'
            placeholder='E-mail'
            icon={ Envelope }
            onChange={ (e) => setEmail(e.currentTarget.value) }
            value={ email }
          />
          <Input
            type='password'
            placeholder='Senha'
            icon={ LockSimple }
            onChange={ (e) => setPassword(e.currentTarget.value) }
            value={ password }
          />
        </div>
        <motion.button
            className='lg:p-5 md:p-4 sm:p-3 bg-blues-blue_500 font-bold text-whites-white_200 rounded-md w-44 lg:text-xl md:text-xl sm:text-base'
            whileHover={{ scale: 1.1, backgroundColor: '#0B0B68' }}
            transition={{
              duration: .3,
              ease: "easeInOut", 
              repeatType: "reverse",
              }}
            onClick={ handleRegister }
          >
            Cadastrar
          </motion.button>

        <div className='flex flex-col items-center justify-center' >
          <p className='text-base font-semibold text-blacks-black_100' >
            Já possui uma conta?
          </p>
          <button
            className='text-blues-blue_500 font-semibold text-sm'
            onClick={ handleOpenLoginModal }
          >
            Entre aqui
          </button>
        </div>
      </ReactModal>
    </header>
  )
}