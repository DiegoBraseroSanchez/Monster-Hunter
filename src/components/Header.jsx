import NavBar from './NavBar';
import logo from '../assets/images/Logo.png'
import './Header.css'

export const Header = () => {
    return (
        <header className='flex place-content-between items-center mb-8 '>
            <img className='img' src={logo} alt="logo"></img>
            <NavBar/>
        </header>
    )
};

