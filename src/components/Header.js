import Logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return(
        <header className='elegant'>
            <nav>
                <Link to='/'><img src={Logo} id='logo' alt="Mandi Gansauge" /></Link>
                <div className='nav-text-links'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About Me</NavLink>
                    <NavLink to='/portfolio'>Full Portfolio</NavLink>
                </div>
                <Link to='/theme' className='themes-btn'>
                    <div className="menu-squares">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <p>Themes</p>
                </Link>
            </nav>

        </header>
    )
    
}
export default Header