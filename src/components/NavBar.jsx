import './NavBar.css'
import burgerMenu from "../assets/images/icon-menu.svg"
const NavBar = () => {
    return (
        <>
        <div className='NavBar '>
            <ul className="ul ">
                <li className='hover:text-SoftOrange'>
                    <a href="#">Home</a>
                </li>
                <li className='hover:text-SoftOrange'>
                    <a href="#">Popular</a>
                </li>
                <li className='hover:text-SoftOrange'>
                    <a href="#">Trending</a>
                </li>
                <li className='hover:text-SoftOrange'>
                    <a href="#">Categoria</a>
                </li>
            </ul>
        </div>
        <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt='menu hambuergesa'></img>
        </>
    )
};

export default NavBar;
