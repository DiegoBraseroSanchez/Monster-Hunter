
export const Article = ({img, Number, title, text}) => {
  return (
    <article className='flex h-[10.125rem] md:w-[35.4375rem] md:flex-grow '>
        <div className='w-[6.25rem] flex-none'>
            <img src={img} alt="diablos" />
        </div>
        <div className='pl-6 '>
            <p className='text-GrayishBlue text-3xl mb-[1.125rem] font-bold'>{Number}</p>
            <h2 className='font-bold mb-[1.125rem] hover:text-SoftOrange cursor-pointer'>{title}</h2>
            <p className='text-VeryDarkBlue'>{text}.</p>
        </div>
    </article>
  )
}