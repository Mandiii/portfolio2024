import Logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return(
        <header>
            <Link to='/'>{Logo}</Link>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About Me</NavLink>
            <NavLink to='/portfolio'>Full Portfolio</NavLink>
            <Link to='/theme'>Other Options</Link>

        </header>
    )
    
}
export default Header