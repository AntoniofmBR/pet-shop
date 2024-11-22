import { CategoryCard } from '../components/category';
import { ProductCard } from '../components/product';

import dog from '../assets/svg/dog.svg'
import cat from '../assets/svg/cat.svg'
import bird from '../assets/svg/bird.svg'
import fish from '../assets/svg/fish.svg'
import rabbit from '../assets/svg/rabbit.svg'
import reptiles from '../assets/svg/reptiles.svg'

import portion from '../assets/svg/portion.svg'
import scratcher from '../assets/svg/scratcher.svg'
import aquarium from '../assets/svg/aquarium.svg'
import house from '../assets/svg/house.svg'
import collar from '../assets/svg/collar.svg'
import toy from '../assets/svg/toy.svg'


const categories = [
  {
    title: 'Cachorros',
    src: dog,
  },
  {
    title: 'Gatos',
    src: cat,
  },
  {
    title: 'Aves',
    src: bird,
  },
  {
    title: 'Peixes',
    src: fish,
  },
  {
    title: 'Coelhos',
    src: rabbit,
  },
  {
    title: 'Répteis',
    src: reptiles,
  },
]

const products = [
  {
    title: 'Ração Premium DogLife Adulto (15kg)',
    src: portion,
    price: 249.90
  },
  {
    title: 'Arranhador para Gatos CatKing Tower',
    src: scratcher,
    price: 179.90
  },
  {
    title: 'Aquário Kit Completo AquaFun (20L)',
    src: aquarium,
    price: 349.90
  },
  {
    title: 'Casinha Térmica PetComfort (Médio)',
    src: house,
    price: 229.90
  },
  {
    title: 'Coleira Anti-pulgas e Carrapatos PetShield',
    src: collar,
    price: 249.90
  },
  {
    title: 'Brinquedo Interativo Kong Extreme para Cães',
    src: toy,
    price: 89.90
  },
]

export function Products () {
  return (
    <main className='min-h-screen flex flex-col justify-between items-center w-full py-7' >
      <section className='bg-blues-blue_300 h-auto w-full flex flex-col items-center p-4 text-center' >
        <h1 className='lg:text-4xl md:text-4xl sm:text-2xl text-blues-blue_500 font-bold' >
          Encontre os produtos perfeitos para o seu pet
        </h1>
        <h3 className='lg:text-3xl md:text-3xl sm:text-xl  text-whites-white_200 self-center font-bold' >
          Selecione por categoria:
        </h3>

        <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-7 items-center justify-center mt-7' >
          { categories.map((category) => {
            return (
              <CategoryCard
                title={ category.title }
                src={ category.src }
              />
            )
          }) }

        </div>
      </section>

      <section className=' h-auto w-full flex flex-col justify-between items-center gap-4 p-4 text-center' >
        <h1 className='font-bold text-4xl' >
          Confira os nossos principais produtos
        </h1>
        
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12' >
          { products.map((product) => {
            return (
              <ProductCard
                title={ product.title }
                src={ product.src }
                price={ product.price }
              />
            )
          }) }
        </div>
      </section>
    </main>
  )
}