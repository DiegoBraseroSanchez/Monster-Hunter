import { Article } from "./Article"
import img1 from '../assets/images/123.jpg'
import img2 from '../assets/images/rathian.jpg'
import img3 from '../assets/images/arma.jpg'
export const ArticleContainer = () =>{
    return(
    <section className="mt-6 md:flex md:flex-wrap md:gap-10">
        <Article
            img={img1}
            Number='01'
            title='Caza monstruos en el mundo real'
            text='¡Caza épicos monstruos por tu zona! El último juego de móvil de la saga Monster Hunter, Monster Hunter Now.'
        />
        <Article
            img={img3}
            Number='02'
            title='Armas'
            text='Para enfrentarse a monstruos enormes, se necesitan armas poderosas.'
        />
        <Article
            img={img2}
            Number='03'
            title='Monstruos'
            text='¡Han aparecido monstruos del mundo de Monster Hunter en tu vecindario'
        />
    </section>
    )
}