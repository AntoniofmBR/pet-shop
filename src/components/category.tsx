import { motion } from 'framer-motion';

type CategoryProps = {
  title: string
  src: string
}

export function CategoryCard ({ title, src }: CategoryProps) {
  return (
    <motion.button
    whileHover={{ scale: 1.1 }}
  >
    <div className='bg-grays-gray_200 h-full w-full rounded-full flex items-center justify-center' >
      <img 
        src={src}
        alt="Dog"
        className='h-40 p-5'
      />
    </div>
    <p className='text-grays-gray_200 text-2xl font-bold' >
      { title }
    </p>
  </motion.button>
  )
}