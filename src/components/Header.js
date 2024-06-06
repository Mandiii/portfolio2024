import Logo from '../images/logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return(
        <header className='snow'>
            <nav>
                <Link to='/'><img src={Logo} id='logo' alt="Mandi Gansauge" /></Link>
                <div className='nav-text-links'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "nav-element")}>Home</NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "nav-element")}>About Me</NavLink>
                    <NavLink to='/portfolio' className={({ isActive }) => (isActive ? "active" : "nav-element")}>Full Portfolio</NavLink>
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