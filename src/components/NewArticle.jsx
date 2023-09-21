export const NewArticle = ({title, text}) => {
  return (
    <article className="h-[8.75rem] border-b-2 border-GrayishBlue py-7 last:border-none lg:h-[160px] lg:pt-3">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[1.25rem] mb-3 font-bold lg:text-[1rem] xl:text-[1.25ren]">{title}</h2>
        <p className="text-[0.9375rem]">{text}</p>
    </article>
  )
}
