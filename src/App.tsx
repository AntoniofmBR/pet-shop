import { Element } from 'react-scroll'

import { Header } from './components/header';
import { Footer } from './components/footer';

import { Homepage } from './pages/homepage';
import { About } from './pages/about';
import { Products } from './pages/products';
import { Contact } from './pages/contact';

export default function App() {
  return (
    <div className='app-container bg-grays-gray_700 text-whites-white_200' >
      <Header />

      <Element name='homePage' >
        <Homepage />
      </Element>

      <Element name='aboutPage' >
        <About />
      </Element>

      <Element name='productsPage' >
        <Products />
      </Element>

      <Element name='contactPage' >
       <Contact />
      </Element>

      <Footer />
    </div>
  )
}