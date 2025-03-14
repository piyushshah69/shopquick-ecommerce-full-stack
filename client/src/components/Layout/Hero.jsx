import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-image.png'

function Hero() {
  return (
    <section className='relative'>
      <img src={heroImage} alt="hero-image" className='w-full h-[300px] md:h-[650px] 2xl:h-[800px] object-cover' />
      <div className='absolute inset-0 flex items-center justify-center p-4 bg-black/50'>
        <div className='text-center flex flex-col items-center text-white p-6'>
          <h1 className='text-4xl md:text-9xl font-semibold tracking-tighter uppercase md:mb-2'>Summer Sale</h1>
          <p className='text-xs md:text-lg mb-1 md:mb-4 py-1 px-2 uppercase'>
            Get upto 40% OFF on all the products in summer sale.
          </p>
          <Link className='bg-white text-gray-950 px-2 py-1 md:px-4 md:py-2 rounded-sm text-sm md:text-lg' >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;