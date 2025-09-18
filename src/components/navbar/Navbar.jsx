import { Link, NavLink } from 'react-router'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='navbar_list'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/About'>About Us</NavLink>
                        <NavLink to='/Company'>Nested Routes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar