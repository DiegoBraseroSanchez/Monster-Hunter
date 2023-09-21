import imageMobile from '../assets/images/Monster-Hunter-Now.webp'
import imageDesktop from '../assets/images/Monster-Hunter-Now.webp'

export const MainArticle = () => {
  return (
    <section className='mb-12'>
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Articulo principal imagen" />
      </picture>
    <div className='sm:flex'>
      <div className='flex-1 py-6'>
        <h2 className='text-[2.5rem] font-bold sm:text-[3.625rem] leading-none'>¡Nuevo juego de Monster Hunter!</h2>
      </div>
      <div className='flex-1 pt-9'>
        <p className='text-[0.8215rem] mb-10 sm:text-[0.9375rem]'>Monster Hunter Now, el juego para móviles de Niantic y Capcom. ¡Monster Hunter Now por fin está disponible para jugar en todo el mundo desde hoy, 14 de septiembre de 2023!</p>
        <button className='bg-SoftRed w-[11.25rem] h-[3rem] uppercase text-OffWhite rounded-lg hover:bg-VeryDarkBlue'>apuntate</button>
      </div>
    </div>
      
    </section>
  )
}
