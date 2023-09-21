import { NewArticle } from "./NewArticle";



export const NewContainer = () => {
  return (
   <aside className="bg-VeryDarkBlue text-OffWhite py-[1.75rem] px-[1.25rem]">
    <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
    <NewArticle
        title= 'NOTICIAS ❖ 20.09.2023'
        text='¡Ya están disponibles las recompensas por preinscripción!'
    />
    <NewArticle
      title= 'EVENTO ❖ 20.09.2023'
      text='Invasión de Diablos: ¡Investiga el brote de monstruos en las regiones desérticas!'
    />
    <NewArticle
      title= 'NOTICIAS ❖ 14.09.2023'
      text='Monster Hunter Now, el juego para móviles de Niantic y Capcom, ya está disponible'
    />
   </aside>
  )
}
