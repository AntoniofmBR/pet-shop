import illustration from '../assets/png/dog_contact.png'

export function Contact () {
  return (
    <nav className='min-h-screen w-full flex flex-col items-center justify-center py-2 text-2xl' >
     <div className='flex w-full font-semibold gap-5 items-center justify-center' >
      <section className='flex w-3/4' >
        <img 
          src={illustration}
          alt=""
          className='h-full w-5/6'
        />
      </section>

      <section className='w-full flex flex-col gap-7' >
        <h1 className='lg:text-5xl md:text-5xl sm:text-4xl font-bold' >
          Dúvidas?
        </h1>
        <p className='lg:text-2xl md:text-2xl sm:text-xl' >
          Entre em contato com <a className='text-[#03FF07]' > (11) 9999-9999 </a> para obter mais informações, estamos sempre prontos para atendimento!
        </p>
      </section>
     </div>
    </nav>
  )
}