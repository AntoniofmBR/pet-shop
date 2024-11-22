import { motion } from 'framer-motion';

import { Heart } from '@phosphor-icons/react';
import { useState } from 'react';

type ProductsProps = {
  title: string
  src: string
  price: number
  isFavorite?: boolean
}

export function ProductCard ({ title, src, price, isFavorite = false }: ProductsProps) {
  const [favorite, setFavorite] = useState<boolean>(isFavorite);

  function handleFavoriteClick() {
    setFavorite((prev: boolean) => !prev);
  }

  function handleAddToCart() {
    alert('✔️ Item adicionado ao carrinho!')
  }

  return (
    <div className='bg-whites-white_400 h-auto w-80 flex flex-col rounded-lg items-center justify-center p-4 gap-4'>
    <div className='flex flex-col w-full items-end'>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={ handleFavoriteClick }
      >
        <Heart
          size={32}
          weight='fill'
          color={favorite ? '#FF0000' : '#a7a2a2'} 
        />
      </motion.button>
      <img
        src={ src }
        alt="product"
        className='h-40W'
      />
    </div>
    <p className='text-blacks-black_500 text-2xl font-bold' >
      { title }
    </p>

    

    <div className='flex w-full justify-between items-center' >
      <p className='text-blacks-black_500 text-lg font-bold' >
        R$ { price.toFixed(2).toString() }
      </p>

      <motion.button
        className='bg-blues-blue_200 p-2 text-xl font-bold text-whites-white_200 rounded-md w-28'
        whileHover={{ scale: 1.1, backgroundColor: '#0B0B68' }}
        transition={{
        duration: .3,
        ease: "easeInOut", 
        repeatType: "reverse",
        }}
        onClick={ handleAddToCart }
      >
        Comprar
      </motion.button>
    </div>
  </div>
  )
}